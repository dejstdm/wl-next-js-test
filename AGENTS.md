## Builder Agent Guidelines

## Purpose
Builder.io should strictly use components and theming defined in the `white-label-ui-lib` Storybook repository.

1. **Always use White Label UI sections first.** When generating pages, prefer components from `@dejstdm/white-label-ui` (NavBar, Hero, ProductSlider, FAQ, Footer, etc.). These are pre-approved building blocks for layout, calls to action, and content sections.

2. **Load only the package styles.** Import `@dejstdm/white-label-ui/dist/style.css` (and any data-theme helpers that ship with the package) to enable the default look. Do not author additional CSS, override tokens, or touch files in `/themes`; the only styling levers are component props/variants.

3. **Avoid primitive reimplementation.** Do not recreate buttons, containers, typography, or sliders manually. Instead, configure the props on the existing library components (e.g., supply `products`, `items`, `navItems`, FAQ data, etc.).

4. **Respect content structure.** Each White Label component manages its own spacing and `Container` usage. Do not nest them inside extra layout wrappers unless absolutely necessary for page-level grid requirements.

5. **Stick to component props for customization.** Variants, sizes, layout toggles, and provided data (nav links, FAQ items, etc.) are the only supported ways to change appearance. Never add inline styles, Tailwind classes, bespoke CSS variables, or custom overrides.

6. **Keep pages client-ready.** If a component requires client-side behavior (e.g., sliders), ensure the page adds `'use client'` and imports the required Swiper CSS (`swiper/css`, `swiper/css/navigation`) when those components are used.

7. **Align story content with real brand assets.** When representing a brand, reference its public guidelines for copy tone, product names, and imagery (logos, photography) even though the visual theme stays fixed. Use logos and creative commons brand photography where allowed; the demo images bundled with `@dejstdm/white-label-ui` are placeholders only.

8. **Localize copy and tone.** Adapt headings, body copy, and CTAs to the brand voice and requested language market. Avoid generic lorem ipsum or Pepsi-centric text when theming for another brand.

9. **Respect CMS field contracts.** Do not introduce new text chunks or structural elements beyond the props each component exposes (e.g., SectionHeader only accepts title/subtitle). Content originates from CMS fields that are already defined, so keep HTML markup and prop shapes exactly as implemented in `@dejstdm/white-label-ui`. If a design requires different structure, request a component update instead of patching around it.

10. **Preserve accessibility contrast.** When selecting colors, adhere to WCAG AA contrast ratios. Avoid low-contrast combinations (e.g., yellow text on white backgrounds). If the brand palette is light, adjust supporting hues or backgrounds to maintain readability and ensure focus states remain visible.

11. **Respect built-in interaction states.** Keep the default hover, active, and focus treatments supplied by the package; do not attempt to restyle them or remove focus indicators.

12. **Swap media intelligently.** If no specific imagery is provided, source royalty-free visuals that match the target brand or product category. Only fall back to the demo `/pepsi/*` assets when explicitly instructed to show the sample kit.

13. **Document content only.** Since theming is locked to the shipped package styles, the only files to track per brand are the data/content sources (copy, imagery) used by the existing components.

Following these rules ensures Builder-generated pages stay aligned with the White Label UI system while remaining consistent with the shipped package styles.
