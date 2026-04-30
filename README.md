# Y-AIMS Lab — Group Website

Source for the **Y-AIMS Laboratory** website (AI & Materials Simulations · NC State MSE), led by Prof. Yaroslava (Yara) G. Yingling.

A static, hand-built site — no framework, no build step. HTML + a small bit of vanilla JS + plain CSS using NC State brand tokens. Deploys to any static host (GitHub Pages, Netlify, etc.).

---

## Table of contents

1. [Quick start (local preview)](#quick-start-local-preview)
2. [Project layout](#project-layout)
3. [Adding content](#adding-content)
4. [Where to suggest changes](#where-to-suggest-changes)
5. [Contributing code (fork → PR workflow)](#contributing-code-fork--pr-workflow)
6. [Coding conventions](#coding-conventions)
7. [Deploying](#deploying)
8. [Useful links](#useful-links)

---

## Quick start (local preview)

You only need a static file server because everything is plain HTML/CSS/JS.

```bash
# clone
git clone https://github.com/deepaksaipendyala/yingling-lab.git
cd yingling-lab

# serve on http://localhost:8765
python3 -m http.server 8765
```

Open http://localhost:8765 — the site is live. Hard-refresh (`Cmd+Shift+R` / `Ctrl+Shift+R`) after edits to bypass the JS cache-busting query string.

No `npm install`, no build, no transpile. Edit a file, save, reload.

---

## Project layout

```
yingling-lab/
├── index.html              Home (hero canvas, about, 6 research areas, PI, highlights)
├── research.html           Multiscale Methods + 5 research thrusts
├── team.html               PI · Faculty · Postdocs · Grads · Undergrads · Alumni
├── publications.html       Searchable, filterable list (143 entries; data in JS)
├── teaching.html           Courses, AI training, mentorship, talks
├── software.html           Open-source tools, methods, structures, DB, patents, startups
├── news.html               PI awards, group awards, media, LinkedIn updates
│
├── css/
│   ├── tokens.css          Design tokens (NC State colors, fonts, spacing) + dark mode
│   ├── base.css            Shared globals (nav, footer, buttons)
│   ├── publications.css    Publications list / filter / pill chips
│   ├── animations.css      Reveal / fade animations
│   ├── home.css            (currently unused — orphan)
│   └── team.css            (currently unused — most team CSS is inline)
│
├── js/
│   ├── publications.js     143-entry publication data + render/filter logic
│   ├── bg-animation.js     Hero canvas (neural net + molecules + force-field viz)
│   └── main.js             (currently unused — inline scripts on each page)
│
└── assets/
    ├── ncsu/               NC State wolf marks + brick logos
    ├── people/             Team headshots — see assets/people/README.md
    ├── aims-banner.jpg     About-section banner image
    └── wolf-clean.svg
```

### Notable patterns

- Each page re-includes the same nav/footer markup. There is **no template system** — when you edit nav links, you edit them on every page (use grep + Edit).
- Most pages embed page-specific styles in a `<style>` block in `<head>` rather than a separate CSS file. Only `tokens.css` / `base.css` / `publications.css` / `animations.css` are extracted.
- All data is hard-coded in JS arrays — no backend, no fetch.
- An early-paint `<script>` in every page's `<head>` reads `localStorage.yaimsTheme` (or `prefers-color-scheme`) and applies `data-theme` *before* CSS paints — that's how dark mode persists across navigations without a flash.

---

## Adding content

### Adding / updating a team member

1. Drop their headshot in [`assets/people/`](assets/people/) following the convention documented in [`assets/people/README.md`](assets/people/README.md) (e.g., `firstname-lastname.jpg`, square, 600×600, ≤150 KB).
2. In [`team.html`](team.html), find the appropriate section (`Faculty`, `Postdocs`, `Graduate Students`, `Undergraduate Researchers`, `Alumni`) and add a card that mirrors the existing pattern. The avatar block is:

   ```html
   <div class="member-avatar" style="background:var(--ncsu-red)">
     AK
     <img src="assets/people/albert-kwansa.jpg" alt="" loading="lazy" onerror="this.remove()" />
   </div>
   ```

   The `onerror="this.remove()"` is what makes the colored initials show through if the photo file is missing or fails to load. **Keep it.**

3. Bump the `<span class="section-count">N members</span>` count if it's a counted section.

### Adding a publication

Open [`js/publications.js`](js/publications.js) and prepend a new object to the `PUBLICATIONS = [ ... ]` array. The schema:

```js
{ id: 144, year: 2026,
  title: "Paper title",
  authors: "A. Author, B. Author, <strong>Yaroslava G. Yingling</strong>, et al.",
  journal: "Journal Name", vol: "12, 345–367", doi: "10.xxxx/xxxxx",
  labels: ["cover", "press-release"],   // optional, see LABEL_CONFIG
  topic:  ["ai-ml", "biomolecular"]     // see TOPIC_CONFIG
}
```

After adding, also bump the count in three places on [`publications.html`](publications.html) (hero subtitle, stats bar, count text) and the `data-count` on the home stat in [`index.html`](index.html). All four currently say `143`.

### Adding a news / award entry

Edit the `PI_AWARDS`, `GROUP_AWARDS`, `MEDIA_POSTS`, or `LINKEDIN_POSTS` arrays inside the inline `<script>` at the bottom of [`news.html`](news.html). Each follows a clear schema — copy the nearest existing entry as a template.

### Adding a course

In [`teaching.html`](teaching.html), copy an existing `<article class="course-card">` block and edit. The `<details class="course-details">` panel holds the expandable goals/learning-outcomes content.

---

## Where to suggest changes

Two channels — pick whichever is easier:

1. **Notion (lab-internal)** — Merve started a documentation page for website suggestions:
   **OmniSpark → Group Website** (bottom of the main page). Use this for general feedback, copy edits, and ideas under discussion.

2. **GitHub Issues** — for anything that needs to be tracked and assigned (bugs, broken links, features). Open an issue at https://github.com/deepaksaipendyala/yingling-lab/issues with:
   - A short, specific title
   - What you saw vs. what you expected
   - The page URL or filename
   - A screenshot if visual
   - Tag a `bug`, `enhancement`, or `content` label if you have access

Either channel works. Use Issues when something needs to be done by a specific person.

---

## Contributing code (fork → PR workflow)

We use a standard fork-and-pull-request flow so multiple people can edit safely.

### One-time setup

1. **Fork** this repo on GitHub (button at top-right of the repo page).
2. Clone *your fork* locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/yingling-lab.git
   cd yingling-lab
   ```
3. Add the original repo as `upstream` so you can pull in others' changes:
   ```bash
   git remote add upstream https://github.com/deepaksaipendyala/yingling-lab.git
   ```

### Per-change workflow

```bash
# 1. Sync your fork with the latest main
git checkout main
git pull upstream main
git push origin main

# 2. Create a branch for your change (one branch per topic)
git checkout -b add-new-publication

# 3. Edit. Preview locally with `python3 -m http.server 8765`.

# 4. Commit
git add publications.html js/publications.js
git commit -m "Add 2026 Nature Materials chirality paper"

# 5. Push your branch to YOUR fork
git push origin add-new-publication
```

Then open a **pull request** from your fork's branch to `deepaksaipendyala/yingling-lab:main` via the GitHub UI.

### Resolving merge conflicts

If `main` moved while you were working, conflicts can show up. Easiest path:

```bash
git checkout main
git pull upstream main
git checkout add-new-publication
git rebase main          # replays your commits on top of latest main
# fix any conflicting files, then:
git add <resolved-files>
git rebase --continue
git push --force-with-lease origin add-new-publication
```

If a rebase feels risky, you can also do `git merge main` instead of rebasing — same idea, slightly different shape of history.

### What makes a good PR

- **One topic per PR.** Don't bundle a publication update with a CSS refactor.
- **Test locally** by serving the page and clicking through the affected views, including dark mode and mobile width.
- **Include a screenshot** in the PR description for any visual change.
- **Link the issue** it resolves (`Closes #12`) if there is one.

A reviewer will leave comments. Push fixups to the same branch — the PR auto-updates.

---

## Coding conventions

These are not strict rules, but matching the existing style keeps the diff focused on the change you actually want.

- **Indentation:** 2 spaces.
- **HTML:** lowercase tags, double-quoted attributes, no trailing slash on void elements (we use HTML5).
- **CSS:** use the design tokens in [`css/tokens.css`](css/tokens.css) (`var(--ncsu-red)`, `var(--color-text)`, `var(--space-4)`, etc.) instead of hard-coding hex / px. If you need a one-off color, add a token first.
- **Dark mode:** every color must work in both `[data-theme='light']` and `[data-theme='dark']`. The tokens already handle this — if you hard-code a color, also add a `[data-theme='dark'] .your-class` override.
- **Brand voice:** "Y-AIMS Lab" (with the hyphen) in nav and titles; "Y-AIMS Laboratory" in long-form copy. The PI is "Prof. Yaroslava (Yara) G. Yingling" on first reference, "Prof. Yingling" thereafter.
- **No emojis** in UI copy. Use SVG icons (Feather-style) instead. See [`teaching.html`](teaching.html) for examples.
- **External links:** always `target="_blank" rel="noopener"`.
- **Images:** always `loading="lazy"` (except the nav wolf logo and other above-the-fold assets), always include `alt=""` (decorative) or a meaningful description.
- **Cache-busting:** if you change `js/publications.js`, bump the `?v=N` query string in the `<script src="...">` tag in [`publications.html`](publications.html) so visitors don't get the cached version.

---

## Deploying

The site is deployed via **GitHub Pages**. Once a PR merges to `main`, Pages picks it up automatically.

If Pages isn't enabled or you're forking for a different deployment:
1. Repo **Settings → Pages**.
2. Source: `Deploy from a branch` → `main` → `/ (root)`.
3. Save — your site is live at `https://YOUR-USERNAME.github.io/yingling-lab/` within a minute.

For a custom domain (e.g., `yaims.ncsu.edu`), see the GitHub Pages docs linked below.

---

## Useful links

- **GitHub Pages docs:** https://docs.github.com/en/pages
- **Collaborating with forks & pull requests:** https://docs.github.com/en/pull-requests/collaborating-with-pull-requests
- **NC State brand guidelines:** https://brand.ncsu.edu/
- **NC State brand fonts (Univers, Glypha):** https://cdn.ncsu.edu/brand-assets/fonts-2-0/include.css
- **Prof. Yingling — MSE faculty page:** https://www.mse.ncsu.edu/yingling/
- **Lab on GitHub:** https://github.com/yingling-group

---

## License & credits

Content © Y-AIMS Laboratory · NC State University.
Site code maintained by the Y-AIMS Lab. Open an issue or PR to contribute.
