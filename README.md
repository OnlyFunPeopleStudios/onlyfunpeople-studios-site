# OnlyFunPeople Studios

> Comprender. Adaptar. Crear.

Estudio independiente de Buenos Aires. Creamos videojuegos, herramientas y experiencias por el placer de crear.

[![License: MIT](https://img.shields.io/badge/License-MIT-c8ff00.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Website-onlyfunpeople.com.ar-0a0a0b?style=flat&labelColor=0a0a0b)](https://onlyfunpeople.com.ar)
[![GitHub](https://img.shields.io/badge/GitHub-OnlyFunPeopleStudios-0a0a0b?style=flat&labelColor=0a0a0b)](https://github.com/OnlyFunPeopleStudios)

---

## Projects

| # | Project | Description | Link | Status |
|---|---------|-------------|------|--------|
| LAB_001 | [ProfeOS](/profeos/) | Sistema operativo para gestión educativa | [profeos.com.ar](https://profeos.com.ar) | v1.0.0 · activo |
| LAB_002 | [Big Pickle](/bigpickle/) | Un roguelike en proceso de mutación | [Jugar](/bigpickle/) | En desarrollo · 43% |
| LAB_003 | IA Tools | Herramientas para pensar y crear mejor | — | Experimental · 21% |
| LAB_004 | [Tiberium Wars](/tiberium/) | Un juego de estrategia en desarrollo | [Jugar](/tiberium/) | En desarrollo |
| LAB_005 | Vendi | SaaS de gestión para pequeños negocios y emprendimientos | [vendi.onlyfunpeople.com.ar](https://vendi.onlyfunpeople.com.ar) | En desarrollo |

---

## Website

El sitio está vivo en **[onlyfunpeople.com.ar](https://onlyfunpeople.com.ar)** (GitHub Pages):

- Landing con identidad editorial propia (hero, principios, laboratorio, manifiesto, bitácora, contacto)
- Páginas de juego para **Big Pickle** (`/bigpickle/`) y **Tiberium Wars** (`/tiberium/`)
- Sección **ProfeOS** con privacidad, términos, changelog, roadmap, FAQ y soporte
- Deploy automático vía GitHub Actions sobre `main`

---

## Tech Stack

- **Web (sitio):** HTML5, CSS3, JavaScript vanilla
- **Mobile:** Flutter, Dart
- **Systems:** Rust, C++
- **AI/ML:** Python
- **CI/CD:** GitHub Actions
- **Hosting:** GitHub Pages

---

## Quick Start

```bash
# Clone
git clone https://github.com/OnlyFunPeopleStudios/onlyfunpeople-studios-site.git

# Open in browser
open index.html

# Or serve locally
python -m http.server 8000
```

---

## Repository Structure

```
/
├── index.html              # Landing page
├── bigpickle/              # Página del juego Big Pickle
│   └── index.html
├── tiberium/               # Página del juego Tiberium Wars
│   └── index.html
├── apps/                   # Apps directory
│   └── index.html
├── profeos/                # ProfeOS section
│   ├── index.html
│   ├── privacy.html
│   ├── terms.html
│   ├── changelog.html
│   ├── roadmap.html
│   ├── faq.html
│   └── support.html
├── blog/                   # Blog
├── assets/                 # Static assets
│   ├── css/
│   ├── js/
│   ├── fonts/
│   └── images/
├── .github/                # GitHub config
│   ├── workflows/
│   ├── ISSUE_TEMPLATE/
│   └── dependabot.yml
└── README.md
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

(c) 2026 OnlyFunPeople Studios. [MIT License](LICENSE).

---

*Hecho con ♡ en Buenos Aires.*