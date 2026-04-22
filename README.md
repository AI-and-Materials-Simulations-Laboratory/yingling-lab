# Y-AIMS Lab — NC State University

**AI & Materials Simulations Lab**  
Department of Materials Science & Engineering, NC State University  
Principal Investigator: Prof. Yaroslava (Yara) G. Yingling

🌐 **Live site:** [y-aims-lab.github.io](https://y-aims-lab.github.io) *(update after deploy)*

---

## Site structure

```
├── index.html          # Home
├── research.html       # Research areas
├── team.html           # Lab members
├── publications.html   # 193+ publications with search & filters
├── teaching.html       # Courses (MSE 723, 721, 485/791)
├── software.html       # Software, datasets, patents
├── news.html           # News & LinkedIn posts
├── css/                # Stylesheets
├── js/                 # JavaScript (publications.js has all pub data)
├── assets/             # Images and logos
└── scripts/            # Auto-update scripts
    └── fetch_publications.py   # Run to refresh publications from Google Scholar
```

## How to edit

### Add a new publication manually
Edit `js/publications.js` — add an entry at the top of the `PUBLICATIONS` array:
```js
{
  "id": 1,
  "title": "Your Paper Title",
  "authors": "Author A, Author B, Yingling YG",
  "year": 2026,
  "journal": "Nature Materials, 25, 100–110",
  "doi": "https://doi.org/...",
  "topics": ["ai-ml", "nanoparticles"],
  "labels": ["journal-cover"],   // optional: "journal-cover", "press-release", "award", "featured"
  "extras": {}
}
```

### Auto-refresh publications from Google Scholar
```bash
pip install scholarly
python3 scripts/fetch_publications.py
```
Then commit and push — GitHub Pages updates automatically.

### Add a LinkedIn news post
Edit `news.html` — add an entry at the top of the `POSTS` array (around line 500):
```js
{
  date: 'April 2026',
  cat: 'publication',          // award | publication | event | people | education | news
  catLabel: 'Publication',
  barCls: 'bar-publication',
  catCls: 'cat-publication',
  title: 'Your post title',
  excerpt: 'Post summary text...',
  tags: ['#Tag1', '#Tag2'],
  url: 'https://www.linkedin.com/posts/yaroslava-yingling_...'
}
```

### Connect LinkedIn RSS (auto news)
1. Go to [rss.app](https://rss.app) → create account → New Feed → LinkedIn profile URL
2. Copy the RSS feed URL
3. In `news.html`, find: `<div class="news-feed" id="newsFeed" data-rss-url="">`
4. Paste your RSS URL inside the quotes → commit → push

## Deploy to GitHub Pages

1. Push this repo to GitHub (repo name: `y-aims-lab` or `<username>.github.io`)
2. Settings → Pages → Source: **Deploy from branch** → `main` → `/` (root)
3. Site goes live at `https://<username>.github.io/y-aims-lab/`

## ADA Compliance
This site meets **WCAG 2.1 AA** — verified with axe-core 4.9.1 across all 6 pages (zero violations).
