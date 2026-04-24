# Home Run Electric (HRE) — Website

Business website for **Home Run Electric**, a licensed electrical contractor in Western Washington.

## Project State

Currently a single standalone HTML file: `Home Run Electric _standalone_.html`

This file is a pre-built bundle — all assets (images, styles, scripts) are base64-encoded and embedded within it. It is self-contained and can be opened directly in a browser without a server.

## Tech Stack (bundled output)

- **UI Framework:** React (loaded at runtime)
- **Transpiler:** Babel standalone (in-browser JSX/ES6+ transformation)
- **Assets:** Embedded as base64, optionally gzip-compressed, via a custom manifest loader
- **Deployment:** Single-file, offline-capable

## Development Notes

The standalone HTML is compiled output. To make source-level changes, the original source files and build tooling are needed. The bundler:
- Compresses assets with gzip
- Embeds everything as base64 in `<script type="__bundler/manifest">`
- Uses a `DOMContentLoaded` loader to decompress, create blob URLs, and initialize the app

## Business Context

- Licensed electrical contractor, Western Washington
- Logo: home-plate + lightning bolt motif
- Site purpose: marketing/lead generation for residential and commercial electrical services
