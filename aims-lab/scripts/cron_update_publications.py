#!/usr/bin/env python3
"""
Y-AIMS Lab — Weekly publications auto-update cron script.
Fetches from Google Scholar, updates publications.js, redeploys site.
"""

import json
import re
import sys
import time
import os
import subprocess
from datetime import datetime

SCHOLAR_ID = "2UN_tCAAAAAJ"
SITE_DIR   = "/home/user/workspace/aims-lab"
OUTPUT_JS  = os.path.join(SITE_DIR, "js", "publications.js")

TOPIC_RULES = [
    ("ai-ml",        ["machine learning", "neural network", "deep learning", "ai ", "artificial intelligence",
                      "bayesian", "informatics", "language model", "llm", "gpt", "force field"]),
    ("nanoparticles", ["nanoparticle", "nanostructure", "gold nanoparticle", "silver nanoparticle",
                       "quantum dot", "nanomaterial", " nano"]),
    ("cellulose",    ["cellulose", "nanocrystal", "cmc", "microfibrils", "wood"]),
    ("dna-rna",      ["dna", "rna", "nucleic acid", "oligonucleotide", "sirna", "mrna",
                      "aptamer", " origami"]),
    ("polymer",      ["polymer", "polyelectrolyte", "hydrogel", "coarse-grain", "lipid bilayer",
                      "amphiphilic", "block copolymer", "membrane"]),
    ("biomolecular", ["protein", "peptide", "biomolecular", "biomimetic", "collagen",
                      "self-assembly", "biomaterial"]),
    ("informatics",  ["informatics", "database", "data-driven", "cheminformatics",
                      "property prediction", "structure-property"]),
    ("water",        ["water", "aqueous", "solvation", "hydration", "nanotube"]),
    ("laser",        ["laser", "ultrafast", "femtosecond", "photon", "optical"]),
]


def assign_topics(title, abstract=""):
    text = (title + " " + abstract).lower()
    found = []
    for topic_id, kws in TOPIC_RULES:
        if any(kw in text for kw in kws):
            found.append(topic_id)
    return found[:3]


def scholar_to_pub(pub, rank):
    bib = pub.get("bib", {})
    title = bib.get("title", "").strip()
    if not title:
        return None
    authors_raw = bib.get("author", "")
    authors = ", ".join(authors_raw) if isinstance(authors_raw, list) else authors_raw
    year_raw = bib.get("pub_year") or bib.get("year") or ""
    try:
        year = int(str(year_raw).strip())
    except:
        year = 0
    journal = bib.get("journal") or bib.get("booktitle") or bib.get("publisher") or ""
    parts = [journal]
    if bib.get("volume"):
        parts.append(bib["volume"])
    if bib.get("pages"):
        parts.append(bib["pages"])
    citation = ", ".join(p for p in parts if p).strip(", ")
    doi = pub.get("eprint_url") or bib.get("doi") or ""
    return {
        "id":      rank,
        "title":   title,
        "authors": authors,
        "year":    year,
        "journal": citation,
        "doi":     doi,
        "topics":  assign_topics(title, bib.get("abstract", "")),
        "labels":  [],
        "extras":  {},
    }


def fetch_all():
    from scholarly import scholarly as sch
    print(f"[{datetime.utcnow().isoformat()}] Fetching Scholar ID {SCHOLAR_ID}...")
    author = sch.search_author_id(SCHOLAR_ID)
    author = sch.fill(author, sections=["publications"])
    raw = author.get("publications", [])
    print(f"  {len(raw)} raw entries found, filling details...")

    results = []
    for i, pub in enumerate(raw):
        try:
            filled = sch.fill(pub)
            entry = scholar_to_pub(filled, i + 1)
            if entry:
                results.append(entry)
            if (i + 1) % 25 == 0:
                print(f"  {i+1}/{len(raw)} done...")
                time.sleep(1.5)
        except Exception as e:
            print(f"  Skipped #{i+1}: {e}", file=sys.stderr)

    results.sort(key=lambda p: (-p["year"], p["title"]))
    for i, p in enumerate(results, 1):
        p["id"] = i
    return results


def load_existing():
    try:
        with open(OUTPUT_JS) as f:
            content = f.read()
        m = re.search(r'const PUBLICATIONS\s*=\s*(\[.*?\]);', content, re.DOTALL)
        if m:
            return json.loads(m.group(1))
    except Exception as e:
        print(f"  Could not load existing: {e}", file=sys.stderr)
    return []


def merge(fresh, existing):
    def norm(t):
        return re.sub(r'\W+', ' ', t.lower()).strip()
    existing_map = {norm(p["title"]): p for p in existing if "title" in p}
    for pub in fresh:
        old = existing_map.get(norm(pub["title"]), {})
        pub["labels"] = old.get("labels", [])
        pub["extras"] = old.get("extras", {})
    return fresh


def write_js(pubs):
    with open(OUTPUT_JS) as f:
        content = f.read()
    ts = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
    pubs_json = json.dumps(pubs, indent=2, ensure_ascii=False)
    new_content = re.sub(
        r'const PUBLICATIONS\s*=\s*\[.*?\];',
        f'const PUBLICATIONS = {pubs_json};',
        content,
        flags=re.DOTALL
    )
    new_content = re.sub(r'// Last auto-updated:.*', f'// Last auto-updated: {ts}', new_content)
    if '// Last auto-updated:' not in new_content:
        new_content = f'// Last auto-updated: {ts}\n' + new_content
    with open(OUTPUT_JS, "w") as f:
        f.write(new_content)
    print(f"  Written {len(pubs)} pubs → {OUTPUT_JS}")


def redeploy():
    """Trigger site redeploy via deploy_website — called from within Computer session."""
    # This script is invoked by Computer's cron; the cron task string handles the deploy call.
    # We just print a signal that the JS was updated.
    print("PUBLICATIONS_UPDATED")


if __name__ == "__main__":
    try:
        fresh    = fetch_all()
        existing = load_existing()
        merged   = merge(fresh, existing)
        write_js(merged)
        redeploy()
        print(f"SUCCESS: {len(merged)} publications, newest={merged[0]['year'] if merged else '?'}")
    except Exception as e:
        print(f"FAILED: {e}", file=sys.stderr)
        import traceback; traceback.print_exc()
        sys.exit(1)
