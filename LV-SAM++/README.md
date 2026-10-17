# LV-SAM++ project page

Target URL: https://lvyupku.github.io/LV-SAM++/

Standalone, buildless HTML/CSS/JavaScript. Copy this entire folder into the root of `lvyupku.github.io`. The folder name and capitalization are significant. The two plus signs are literal path characters.

The page uses the same core stylesheet, system typography, blue links, masthead, sidebar navigation, figure dialog, and citation interaction as the EchoST-SAM project page.

Resources: the supplied published paper PDF, original poster PDF, and downloadable BibTeX. There are no presentation slides or code-release placeholders.

## Content provenance

- Paper: Xiaokang Deng, Yu Lu, Wei Zhang, and Xianghua Fu, ICASSP 2026, pp. 4826–4830. DOI: 10.1109/ICASSP55912.2026.11464908.
- Title, author order, affiliations, metrics, training setup, and limitations follow the published paper and camera-ready LaTeX.
- The poster remains byte-for-byte identical to the supplied PDF. Its author-affiliation superscripts differ slightly from those in the published paper; the webpage uses the published paper's metadata.
- `workflow.webp` comes from the source package's `introduction.png`, also used in the poster. Qualitative panels and evaluation plots are lossless WebP copies of the source PNGs.
- `framework-original.webp` is a lossless 3000-pixel rendering of the complete original `model.pdf` from the supplied LaTeX package. All original modules, connections, labels, and annotations are preserved. `LV-SAM-plus-plus-model.pdf` is a byte-for-byte copy of that original figure for vector viewing.
- The table preserves the paper's reported ± values without assigning an unreported statistical definition to them.

## Maintenance

- Edit text and table values in `index.html`.
- Edit the citation in both `index.html` and `assets/lvsamplusplus.bib`.
- Replace the poster PDF and regenerate `assets/poster-preview.webp` together when updating the poster.
- The `assets/main.js` interactions are optional: content, downloads, native disclosure panels, and figure links remain available without JavaScript.
- No build system, external fonts, analytics, or third-party JavaScript are required.
