# Domaine Technical Assessment - Product Card

This repository contains my implementation of the Shopify product card technical assessment, built on top of a Dawn starter theme and customized to match the provided Figma design.

<img width="166" height="236" alt="image" src="https://github.com/user-attachments/assets/42919dee-73b5-4b5b-b5d5-dadd2e7784b9" />

## Submission

- GitHub repository: [https://github.com/karlos-bob/domaine-test](https://github.com/karlos-bob/domaine-test)
- Working prototype URL: [https://domaine-test-zknfsstn.myshopify.com/](https://domaine-test-zknfsstn.myshopify.com?preview_theme_id=155619590296) (pass: piangi)

## Assessment Scope

Implemented requirements:

- Build from the provided Figma design and product image assets
- Build in a headed Shopify theme environment
- Use TailwindCSS
- Store code in a GitHub repository

Implemented user stories:

- Customer can clearly see when a product is on sale (badge + markdown pricing)
- Customer can switch variant imagery via color swatches
- Customer can view a secondary image of the selected variant on hover
- Customer can view product title, brand name, and pricing information

## What Was Built

### 1) Tailwind setup and theme tokens

I integrated Tailwind and added design tokens for typography and colors in `assets/tailwind.input.css`, including:

- Brand tokens (primary/accent)
- Text tokens
- Swatch color tokens (`orange`, `green`, `blue`, `yellow`, `pink`, `navy`)

Tailwind output is generated in `assets/tailwind.output.css` and loaded from `layout/theme.liquid`.

### 2) Custom product card component

I built the product card from scratch with:

- `snippets/product-card.liquid` (Liquid markup)
- `assets/product-card.css` (component styles)
- `assets/product-card.js` (component behavior)

Key behavior:

- Sale badge + compare-at price rendering
- Variant swatch selection updates primary/secondary image source
- Hover swaps to secondary image
- Product info block with vendor, title, and current pricing

### 3) Accessibility improvements

Swatches were implemented as an accessible radiogroup pattern:

- `role="radiogroup"` on the swatch container
- `role="radio"` + `aria-checked` on each swatch
- Roving tabindex
- Keyboard support (`Arrow` keys, `Home`, `End`)

I also avoided nesting interactive controls inside links to keep markup valid and keyboard-friendly.

### 4) Section integration

The custom card is rendered from collection sections:

- `sections/featured-collection.liquid`
- `sections/main-collection-product-grid.liquid`

Both sections load `product-card.css` and `product-card.js` at section scope.

## Files Changed

- `assets/tailwind.input.css`
- `assets/tailwind.output.css`
- `layout/theme.liquid`
- `assets/base.css`
- `snippets/product-card.liquid`
- `assets/product-card.css`
- `assets/product-card.js`
- `sections/featured-collection.liquid`
- `sections/main-collection-product-grid.liquid`

## Run Locally

Install dependencies:

```bash
npm install
```

Run Tailwind watch/build (if needed in your environment):

```bash
npm run dev
```

Run Shopify theme dev server:

```bash
shopify theme dev
```

