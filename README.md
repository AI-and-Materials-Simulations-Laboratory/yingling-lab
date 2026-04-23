# Y-AIMS Lab Website

**Y-Y-AIMS Laboratory** — NC State University, Department of Materials Science and Engineering

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g., `aims-lab-website`)
2. Push all files in this folder to the `main` branch
3. Go to **Settings → Pages** → Source: `main` branch, root `/`
4. Your site will be live at `https://<your-username>.github.io/aims-lab-website/`

## Updating Content

- **Team members**: Edit `team.html` — find the placeholder cards and replace name/role/links
- **Publications**: Edit `publications.html` — copy an existing `<article class="pub-entry">` block and update fields
- **News**: Edit `news.html` — copy a news card block and update
- **PI photo**: In `team.html`, replace the SVG placeholder in `.pi-photo` with `<img src="assets/yingling.jpg" alt="Prof. Yaroslava Yingling" />`
- **Research content**: Edit `research.html` section text directly

## Structure

```
aims-lab/
├── index.html          # Home
├── research.html       # Research areas
├── team.html           # Team members
├── publications.html   # Publications list
├── software.html       # Data & Software
├── news.html           # News & updates
├── css/
│   ├── tokens.css      # Design tokens (colors, spacing, fonts)
│   ├── base.css        # Shared styles, nav, footer, components
│   └── home.css        # Home-page specific styles
├── js/
│   └── main.js         # Dark mode, nav, scroll animations
└── assets/             # Place images here
```

## Customization

- **Colors**: Edit `css/tokens.css` — `--color-primary` (NCSU Red), `--color-accent` (blue)
- **Fonts**: Cabinet Grotesk (headings) + Satoshi (body) via Fontshare CDN
- **Dark mode**: Built-in, respects system preference, manual toggle in nav
