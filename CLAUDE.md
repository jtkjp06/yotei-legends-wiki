# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

冥人奇譚 攻略wiki — A Japanese strategy wiki for *Ghost of Yōtei: Legends* (co-op multiplayer DLC), built with MkDocs + Material theme and hosted on GitHub Pages.

Live site: https://jtkjp06.github.io/yotei-legends-wiki/

## Development Commands

```bash
# Install dependencies (requires Python)
pip install -r requirements.txt

# Start local dev server (http://localhost:8000)
mkdocs serve

# Build static site to site/ directory
mkdocs build
```

## Architecture

- **Content**: All wiki content lives in `docs/` as Markdown files with YAML frontmatter (`title`, `description`)
- **Config**: `mkdocs.yml` defines site structure, navigation, theme, and plugins
- **Theme**: Material for MkDocs with Japanese (`ja`) search tokenizer, dark/light toggle, deep orange + amber colors
- **Deployment**: GitHub Pages via GitHub Actions (workflow not yet created — see `COPILOT_PROMPT.md` for reference)

## Content Structure

```
docs/
├── classes/    # Character class guides (samurai, archer, mercenary, shinobi)
├── modes/      # Game mode guides (story, survival, incursion, raid, hyakki)
├── gear/       # Equipment: legendary items, perks/builds
└── guide/      # Strategy guides (beginner, ki-farming, survival-tips)
```

## Content Guidelines

All content must cite sources using these categories (defined in `CONTRIBUTING.md`):

| Label | Meaning |
|-------|---------|
| 公式 | Official source |
| goylegends.com | Fan wiki |
| 5ch実測 | Community player testing |
| 要検証 | Unverified — wrap in `!!! warning` admonition |

Use MkDocs admonition blocks for callouts (`!!! note`, `!!! warning`, `!!! tip`).
