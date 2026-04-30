# Team Photos

Drop headshots in this folder. The team page and homepage PI section reference
photos by filename — when a file is present it appears automatically; when it
is missing the page falls back to the colored initials avatar (no broken-image
icon).

## Naming convention

```
firstname-lastname.jpg
```

Lowercase, hyphenated, no diacritics. Use the **first** first-name and the
**last** last-name (skip middle names and parentheticals).

## Image specs

- **Format:** `.jpg` (preferred) or `.webp`
- **Aspect ratio:** 1:1 (square)
- **Recommended size:** 600 × 600 px
- **Max file size:** ~150 KB (compress before committing)
- **Content:** centered face, head-and-shoulders crop, neutral background ideal

## Filenames currently wired up

### Group photo
| Subject | Filename |
|---|---|
| Y-AIMS Lab group photo (homepage placeholder) | `group-photo.jpg` (recommended ~1600 × 700 px, ≤300 KB) |

### Principal Investigator
| Person | Filename |
|---|---|
| Prof. Yaroslava (Yara) G. Yingling | `yara-yingling.jpg` |

### Research Faculty & Staff
| Person | Filename |
|---|---|
| Prof. Albert L. Kwansa | `albert-kwansa.jpg` |
| Prof. Alexey Gulyuk | `alexey-gulyuk.jpg` |
| Dr. Barry Farmer | `barry-farmer.jpg` |

### Postdoctoral Fellows
*Currently recruiting.*

### Graduate Students
| Person | Filename |
|---|---|
| Sergei Rigin | `sergei-rigin.jpg` |
| Andrew Hans Cannon | `andrew-cannon.jpg` |
| Merve Fedai | `merve-fedai.jpg` |
| Christina J. Bayard | `christina-bayard.jpg` |
| Patrick Hogsed | `patrick-hogsed.jpg` |
| Laila Belpalme | `laila-belpalme.jpg` |
| Deepak Sai Pendyala | `deepak-pendyala.jpg` |

### Undergraduate Researchers
| Person | Filename |
|---|---|
| Siri Mudunuri | `siri-mudunuri.jpg` |
| Arjun Kancharla | `arjun-kancharla.jpg` |
| Sanchit Shah | `sanchit-shah.jpg` |
| Anne Chabaneix | `anne-chabaneix.jpg` |
| Stephanie Euceda Trujillo | `stephanie-trujillo.jpg` |

## Adding a new person

1. Drop the photo here using the convention above.
2. In `team.html`, add an `<img>` line inside that person's avatar div:
   ```html
   <div class="member-avatar" style="background:var(--ncsu-red)">
     AK
     <img src="assets/people/albert-kwansa.jpg" alt="" loading="lazy" onerror="this.remove()" />
   </div>
   ```
3. The `onerror="this.remove()"` is what makes the initials fall back gracefully
   if the file is missing or fails to load. Keep it.
