#!/usr/bin/env python3
"""
Y-AIMS Lab — Auto-fetch publications from Google Scholar
Usage: python3 fetch_publications.py
Writes: ../js/publications.js  (merged with existing manual entries)

Scholar ID: 2UN_tCAAAAAJ (Prof. Yaroslava G. Yingling)
"""

import json
import re
import sys
import time
import os
from datetime import datetime

SCHOLAR_ID = "2UN_tCAAAAAJ"
OUTPUT_JS  = os.path.join(os.path.dirname(__file__), "..", "js", "publications.js")

# ── Topic keyword → badge config ────────────────────────────────────────────
TOPIC_RULES = [
    ("ai-ml",       ["machine learning", "neural network", "deep learning", "ai", "artificial intelligence",
                     "bayesian", "informatics", "language model", "llm", "gpt", "force field"]),
    ("nanoparticles",["nanoparticle", "nanostructure", "gold nanoparticle", "silver nanoparticle",
                     "quantum dot", "nanomaterial", "nano"]),
    ("cellulose",   ["cellulose", "nanocrystal", "cmc", "microfibrils", "wood"]),
    ("dna-rna",     ["dna", "rna", "nucleic acid", "oligonucleotide", "siRNA", "mrna",
                     "aptamer", "nanotechnology", "origami"]),
    ("polymer",     ["polymer", "polyelectrolyte", "hydrogel", "coarse-grain", "lipid bilayer",
                     "amphiphilic", "block copolymer", "membrane"]),
    ("biomolecular",["protein", "peptide", "biomolecular", "biomimetic", "collagen",
                     "self-assembly", "biomaterial"]),
    ("informatics", ["informatics", "database", "data-driven", "cheminformatics",
                     "property prediction", "structure-property"]),
    ("water",       ["water", "aqueous", "solvation", "hydration", "nanotube"]),
    ("laser",       ["laser", "ultrafast", "femtosecond", "photon", "optical"]),
]

TOPIC_CONFIG = {
    "ai-ml":        {"label": "AI/ML",         "color": "indigo"},
    "nanoparticles":{"label": "Nanoparticles",  "color": "teal"},
    "cellulose":    {"label": "Cellulose",      "color": "olive"},
    "dna-rna":      {"label": "DNA/RNA",        "color": "orange"},
    "polymer":      {"label": "Polymer",        "color": "blue"},
    "biomolecular": {"label": "Biomolecular",   "color": "red"},
    "informatics":  {"label": "Informatics",    "color": "yellow"},
    "water":        {"label": "Water",          "color": "blue-teal"},
    "laser":        {"label": "Laser",          "color": "deep-red"},
}


def assign_topics(title: str, abstract: str = "") -> list[str]:
    text = (title + " " + abstract).lower()
    found = []
    for topic_id, keywords in TOPIC_RULES:
        if any(kw in text for kw in keywords):
            found.append(topic_id)
    return found[:3]  # cap at 3 badges


def scholar_to_pub(pub: dict, rank: int) -> dict | None:
    bib = pub.get("bib", {})
    title = bib.get("title", "").strip()
    if not title:
        return None

    authors_raw = bib.get("author", "")
    if isinstance(authors_raw, list):
        authors = ", ".join(authors_raw)
    else:
        authors = authors_raw

    year_raw = bib.get("pub_year") or bib.get("year") or ""
    try:
        year = int(str(year_raw).strip())
    except (ValueError, TypeError):
        year = 0

    journal = bib.get("journal") or bib.get("booktitle") or bib.get("publisher") or ""
    volume  = bib.get("volume", "")
    pages   = bib.get("pages", "")
    doi_raw = pub.get("eprint_url") or bib.get("doi") or ""

    citation = journal
    if volume:
        citation += f", {volume}"
    if pages:
        citation += f", {pages}"
    citation = citation.strip(", ")

    topics = assign_topics(title, bib.get("abstract", ""))

    return {
        "id":       rank,
        "title":    title,
        "authors":  authors,
        "year":     year,
        "journal":  citation,
        "doi":      doi_raw,
        "topics":   topics,
        "labels":   [],
        "extras":   {},
    }


def fetch_publications(scholar_id: str) -> list[dict]:
    print(f"Fetching Google Scholar profile: {scholar_id}")
    from scholarly import scholarly as sch, ProxyGenerator

    author_search = sch.search_author_id(scholar_id)
    author = sch.fill(author_search, sections=["publications"])
    pubs_raw = author.get("publications", [])
    print(f"  Found {len(pubs_raw)} raw entries, fetching details…")

    results = []
    for i, pub in enumerate(pubs_raw):
        try:
            filled = sch.fill(pub)
            entry = scholar_to_pub(filled, i + 1)
            if entry:
                results.append(entry)
            if (i + 1) % 20 == 0:
                print(f"  Processed {i+1}/{len(pubs_raw)}…")
                time.sleep(1)  # polite delay
        except Exception as e:
            print(f"  Warning: skipped pub {i+1}: {e}", file=sys.stderr)

    # Sort by year descending, then by title
    results.sort(key=lambda p: (-p["year"], p["title"]))
    for i, p in enumerate(results, 1):
        p["id"] = i

    return results


def load_existing_js(path: str) -> list[dict]:
    """Extract existing PUBLICATIONS array from publications.js to preserve manual labels/extras."""
    try:
        with open(path) as f:
            content = f.read()
        # Pull everything between 'const PUBLICATIONS = [' and the matching '];'
        m = re.search(r'const PUBLICATIONS\s*=\s*(\[.*?\]);', content, re.DOTALL)
        if m:
            return json.loads(m.group(1))
    except Exception as e:
        print(f"  Could not parse existing publications: {e}", file=sys.stderr)
    return []


def merge_publications(fresh: list[dict], existing: list[dict]) -> list[dict]:
    """Merge fresh Scholar data with existing manual labels/extras by title matching."""
    # Build lookup from existing by normalized title
    def norm(t): return re.sub(r'\W+', ' ', t.lower()).strip()
    existing_map = {norm(p["title"]): p for p in existing if "title" in p}

    merged = []
    for pub in fresh:
        key = norm(pub["title"])
        old = existing_map.get(key, {})
        # Preserve manual labels and extras from existing entry
        pub["labels"] = old.get("labels", [])
        pub["extras"] = old.get("extras", {})
        merged.append(pub)

    return merged


def write_publications_js(pubs: list[dict], output_path: str):
    """Overwrite publications.js with updated PUBLICATIONS array."""
    with open(output_path) as f:
        content = f.read()

    pubs_json = json.dumps(pubs, indent=2, ensure_ascii=False)

    new_content = re.sub(
        r'const PUBLICATIONS\s*=\s*\[.*?\];',
        f'const PUBLICATIONS = {pubs_json};',
        content,
        flags=re.DOTALL
    )

    # Bump cache-bust version comment at top of file
    ts = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
    new_content = re.sub(
        r'// Last auto-updated:.*',
        f'// Last auto-updated: {ts}',
        new_content
    )
    if '// Last auto-updated:' not in new_content:
        new_content = f'// Last auto-updated: {ts}\n' + new_content

    with open(output_path, "w") as f:
        f.write(new_content)

    print(f"  Written {len(pubs)} publications to {output_path}")


if __name__ == "__main__":
    fresh     = fetch_publications(SCHOLAR_ID)
    print(f"Fetched {len(fresh)} publications from Scholar")

    existing  = load_existing_js(OUTPUT_JS)
    print(f"Loaded {len(existing)} existing entries (to preserve labels/extras)")

    merged    = merge_publications(fresh, existing)
    write_publications_js(merged, OUTPUT_JS)

    print(f"\nDone — {len(merged)} publications written.")
    print(f"Newest: {merged[0]['year']} — {merged[0]['title'][:60]}")
    print(f"Oldest: {merged[-1]['year']} — {merged[-1]['title'][:60]}")
