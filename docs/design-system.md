# Design system: Svelte UI

This document defines the visual language for this Svelte 5 component library. Bits UI supplies accessible behavior and interaction primitives. Components should feel like one family even when used in different applications or themes.

## 1. Design intent

The interface should feel **direct, utilitarian, and a little handmade**. It favors readable information, visible boundaries, and plain language over polished gradients, soft cards, or decorative effects. The result should feel like a carefully typeset tool.

Keep these qualities in balance:

- **Readable first:** monospace body text, clear hierarchy, and useful labels.
- **Visible structure:** borders, dotted separators, and small offset shadows define regions.
- **Low ornament:** no gratuitous gradients, blur, pill shapes, or animation.
- **Themeable:** the same component must work across light, dark, and tinted palettes.
- **Accessible behavior:** Bits UI state and keyboard behavior remain intact; styling must make states perceivable.

## 2. Visual foundations

### Color and themes

Use these five base values for the default palette. These are the values used by the reference styles, recorded here so components can reproduce its contrast and hierarchy:

| Token                 | Default value                  | Strict usage                                                                                                                       |
| --------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `--background`        | `rgb(182 180 180)` (`#b6b4b4`) | Page background and transparent control surfaces. Do not use it for text, borders, or shadows.                                     |
| `--text`              | `rgb(56 56 56)` (`#383838`)    | Primary text, control borders, dotted outlines, focus treatment, and hard offset shadows. This is the default ink color.           |
| `--white`             | `rgb(236 236 236)` (`#ececec`) | Foreground text/icons on `--background-darker` surfaces. Despite its name, never use it as the default page background.            |
| `--light`             | `#999999`                      | Muted track/surface color, specifically progress tracks. Do not use for body copy or important boundaries.                         |
| `--background-darker` | `rgb(71 70 70)` (`#474646`)    | Alternate filled button and inset surface. Pair with `--white` foreground. Do not use as the page background in the default theme. |

The reference palettes are:

| Theme          | `--white`          | `--background`     | `--light` | `--text`           | `--background-darker` |
| -------------- | ------------------ | ------------------ | --------- | ------------------ | --------------------- |
| IBM (default)  | `rgb(236 236 236)` | `rgb(182 180 180)` | `#999999` | `rgb(56 56 56)`    | `rgb(71 70 70)`       |
| NewsPaper      | `rgb(170 166 166)` | `rgb(136 135 135)` | `#747373` | `rgb(27 27 27)`    | `rgb(49 49 49)`       |
| BurntWood      | `rgb(255 255 255)` | `rgb(26 25 25)`    | `#494444` | `rgb(240 232 232)` | `rgb(26 25 25)`       |
| Hacker         | `rgb(236 236 236)` | `#072004`          | `#0f3813` | `rgb(178 230 176)` | `rgb(11 78 8)`        |
| PurpleDaydream | `rgb(236 236 236)` | `rgb(34 3 75)`     | `#6734aa` | `rgb(201 172 235)` | `rgb(43 13 112)`      |
| BloodRed       | `rgb(236 236 236)` | `rgb(54 12 12)`    | `#863434` | `rgb(194 122 122)` | `rgb(88 14 14)`       |

Apply the roles consistently:

1. Set the page to `--background`; default text, borders, and hard shadows use `--text`.
2. Keep ordinary fields and primary button surfaces transparent so the page color shows through. Their border and label use `--text`.
3. Filled alternate actions use `--background-darker` with `--white` text/icons. Keep their default border and shadow tied to the foreground ink; on hover, replace the solid border with a same-width, 2px dashed border colored with the page background.
4. Use `--light` only for low-priority tracks or muted surface regions. Progress fill uses `--text`, matching the reference progress bar. Never set paragraph text in `--light`.
5. Use `--white` only as foreground on dark/alternate surfaces. It is not a generic “surface” token.
6. Do not invent additional colors for hover, focus, errors, or selection. Derive them from these roles, and add semantic tokens only when a role cannot be expressed accessibly from the base palette.
7. Never hard-code a theme’s RGB values inside a component. Components consume CSS custom properties so palette switching changes the whole component family together.

The library ships its IBM defaults in `src/lib/theme.css`. Import this stylesheet once at the application root, or import the package entry point so its defaults are included. A host theme can override the five custom properties on `:root` or a theme container. Do not rely on fallback values declared only on the page body: portaled Bits UI content is rendered outside component subtrees and must inherit the same defined tokens.

When translating to library tokens, map `--background` to page/surface, `--text` to foreground/border/focus, `--white` to inverse foreground, `--light` to muted surface/track, and `--background-darker` to alternate surface. Keep semantic aliases if needed, but preserve these base-role meanings. Check text and control contrast in every shipped theme before adding it; some reference palette combinations may need adjustment for accessible small text while preserving their hue and contrast character.

### Typography

- **Display headings:** Use Space Mono for headings (`h1`–`h6`) and prominent display labels. Its distinctive retro-tech forms provide a freely licensed monospace display voice. Bundle the font with the project; if it cannot load, fall back to a system monospace stack.
- **Supporting text:** Use FragmentMono for subheadings, paragraphs, labels, controls, captions, and utility copy. Bundle it with the project and fall back to a system monospace stack.
- **Hierarchy:** Establish levels with size, line-height, and ink shade. Keep heading text in the primary `--text` color; supporting text may use a documented muted ink token derived from `--text` (never `--light`, which is reserved for tracks/surfaces). Preserve readable contrast in every theme.
- **Suggested scale:** Display title 2.5rem/1.1; page heading 2rem/1.2; section heading 1.5rem/1.25; subsection heading 1.125rem/1.35; body 0.9375rem/1.6; supporting/caption 0.8125rem/1.5. Treat these as defaults that consuming applications can override.
- **Voice:** short, literal labels; sentence case for explanatory content; uppercase only where the reference intentionally uses it for prominent action labels.
- Fonts must ship as local project assets and include a remote font URL as a secondary source. Keep system fallbacks so the interface remains legible offline or when either source fails.

### Icons

- Use icons from `@lucide/svelte` for interface symbols such as close, chevron, calendar, check, navigation, and rating marks. Do not draw icons with Unicode characters, emoji, or CSS-generated text glyphs.
- Icons inherit `currentColor` so they follow the text and inverse-surface tokens. Use a consistent 1em to 1.25em size and the default Lucide stroke unless the surrounding control needs a documented adjustment.
- Mark decorative icons `aria-hidden="true"`. Icon-only buttons still need a visible or programmatic accessible name on the button itself; the icon does not provide the name.

### Shape, borders, and depth

- Prefer square corners; avoid rounded pills and large radii.
- Use solid 2px ink borders for buttons and fields.
- Use a small, hard, offset shadow (about 3px) to give primary actions a tactile edge. The shadow color follows the foreground/border role.
- Use dotted or dashed borders for upload/drop areas, article-like sections, and secondary separators. Reserve solid borders for controls and important boundaries.
- On hover, replace the solid control border with a same-width, 2px dashed border, matching Uploadly. Do not keep the solid border and add a dotted/dashed outline around it. Change only `border-style` so dimensions do not shift. Reserve outlines for `:focus-visible`, where they provide a separate keyboard focus indicator.
- Avoid soft elevation, translucent glass, and oversized shadows.

### Spacing and layout

The reference uses compact spacing with a simple `1em` rhythm, broad upload panels, and content that stacks on narrow screens. Build spacing from a small token scale (for example 4, 8, 12, 16, 24, 32px), then keep spacing consistent within each component. Give controls enough room to operate comfortably even when the overall look is compact.

Use fluid width and sensible max-widths. On narrow viewports, stack side-by-side controls and let actions fill available width where useful. Do not preserve legacy breakpoint values mechanically; choose breakpoints based on component content.

## 3. Component language

### Buttons and links

- Buttons are rectangular, outlined, and text-forward, with a small hard offset shadow for the primary treatment.
- Every button has a visible 2px `--text` border, including buttons inside toolbars, menubars, dialogs, and date controls. Use a transparent fill for ordinary actions and `--background-darker` with `--white` text for alternate actions. Add a 3px hard `--text` shadow to primary actions; do not leave a button looking like unframed text.
- Alternate buttons keep their `--text` border at rest. On hover, change it to a same-width, 2px dashed border in `--background` while keeping the `--background-darker` fill and `--white` foreground.
- Match Uploadly’s control treatment: compact, uppercase action labels may use the display face, 2px solid borders become 2px dashed on hover without changing dimensions, and disabled controls retain their solid boundary. Keep body and field text in FragmentMono.
- Primary and alternate buttons should differ through semantic surface/foreground tokens, not unrelated visual systems.
- Keep button text concise. Icon-only buttons need an accessible name and a visible focus indicator.
- Hover replaces the solid border with a same-width, 2px dashed border; do not add a dashed outline while leaving the solid border in place. Disabled controls remain visually stable and use a not-allowed cursor where appropriate.
- Links remain recognizable as links: underline by default or another persistent non-color cue. A dashed underline on hover is consistent with the reference.
- Provide clear focus-visible styling. Do not make hover the only indication that a control is interactive.

### Fields and selection controls

- Use transparent or theme-surface backgrounds, square 2px borders, and monospace input text.
- Inputs, selects, comboboxes, date/time segments, PIN cells, and other editable controls must have a visible 2px `--text` border. A transparent fill is intentional for fields because the page background shows through; the border is still required. If a primitive is split into parts, give its outer field or each independently operable part a clear boundary.
- On hover and keyboard focus, replace the solid 2px field border with a dashed 2px border. Keep the control dimensions fixed and do not layer an outline over the solid border. This dashed border is the field’s visible focus treatment.
- Labels must be persistent and programmatically associated; placeholders are examples, not labels.
- Fields show keyboard focus by changing their solid border to dashed. Other interactive controls retain a clear `:focus-visible` outline. Never remove the browser focus indicator without replacing it.
- Error, success, and disabled states must be explicit and themeable, with text or icons in addition to color.

### Panels, cards, and separators

- Prefer flat, outlined panels over rounded cards.
- Dotted borders suit drop areas and lightweight content groupings. Use padding to create breathing room rather than a filled card surface by default.
- Use separators and headings to organize content. Avoid nesting several bordered boxes without a clear information hierarchy.

### Progress and status

The reference presents progress as plain status copy paired with a prominent native progress bar. Keep progress measurable and textual: announce the task, elapsed time or completed amount where useful, and total amount. Preserve native `<progress>` semantics or equivalent accessible value attributes. Ensure the fill and track remain distinguishable in all themes.

### Overlays and composite controls (Bits UI)

Use Bits UI for behavior such as dialogs, popovers, menus, tabs, accordions, and selects. Keep its keyboard handling, focus management, and ARIA relationships. Style the exposed parts with this document’s tokens and geometry. Do not replace accessible primitives with custom behavior just to match an appearance. Menus and dialogs should use square borders, flat surfaces, visible focus, and restrained shadows; their positioning and dismissal behavior should remain predictable.

- Dialogs, alert dialogs, popovers, menus, tooltips, and date-picker panels must use a solid `--background` surface and a visible 2px `--text` border. Never leave portaled content transparent: it must remain legible over both the page and the dimmed overlay. Use `--background-darker` only for an intentional alternate/inverse surface with `--white` foreground.
- Give overlay panels a small hard `--text` shadow where it helps separate the panel from its surroundings. Keep the backdrop distinct from the panel, and derive its tint from `--text` rather than adding a new palette color.

## 4. Interaction and motion

- Provide visible `:focus-visible` treatment on every interactive component.
- Hover and pressed states should be immediate and restrained. Avoid animation that delays feedback or distracts from data entry.
- Respect `prefers-reduced-motion`; motion should be optional and brief.
- Do not communicate state through color alone. Include text, shape, iconography, or semantics as appropriate.
- For async actions, show progress and completion/error status near the triggering control, with announcements for assistive technology when the status changes.

## 5. Responsive and accessible defaults

- Every control must be keyboard operable and have a visible focus state.
- Preserve Bits UI semantics, labels, roles, and focus management.
- Maintain readable contrast across every shipped theme, including disabled and alternate surfaces.
- Make target areas comfortable to use; the visual compact visual style should not produce tiny hit targets.
- Allow text to wrap and controls to reflow without horizontal scrolling at narrow widths.
- Use semantic HTML, associate labels and descriptions, and include accessible names for icon-only actions.
- Test layouts at narrow and wide widths and with keyboard navigation when adding a component.

## 6. Implementation rules for contributors and agents

When creating or changing a component:

1. **Start from the shared tokens.** Do not introduce a one-off color, radius, shadow, or spacing value without a documented reason. Add a semantic token if multiple components need the role.
2. **Use Bits UI for interaction primitives.** Compose and style its parts; do not reimplement its accessibility behavior.
3. **Match the visual language.** Square geometry, crisp outlines, restrained hard shadows, flat surfaces, monospace utility, and minimal ornament should be recognizable.
4. **Cover states.** Include default, hover, focus-visible, pressed/open, disabled, and invalid/loading states where relevant. Ensure hover does not shift layout.
5. **Cover themes.** Use semantic variables throughout and inspect every supported theme. Never hard-code the sample RGB values into component styles.
6. **Cover responsive behavior.** Define how the component wraps, stacks, or scrolls at narrow widths.
7. **Keep APIs composable.** Prefer slots/snippets and clear component props over one rigid layout. Do not bake page-specific copy or product-specific behavior into general-purpose primitives.
8. **Preserve semantics.** Use native HTML where possible and retain Bits UI keyboard, ARIA, and focus behavior.
9. **Use consistent naming.** Prefer semantic token and component names (`surface`, `text-muted`, `focus-ring`) over visual names (`grey-2`, `big-shadow`).
10. **Document exceptions.** If a component intentionally diverges, explain why in its component docs or source comment so the next contributor can make the same decision consistently.

Before considering a component complete, review it against this short checklist:

- Does it look like it belongs beside the library’s outlined controls and flat surfaces?
- Does it use shared tokens and work in every theme?
- Are all interactive states visible and stable?
- Does it retain Bits UI accessibility and keyboard behavior?
- Does it reflow at narrow widths and avoid relying on color alone?

## 7. Scope and source notes

This guide defines the visual direction and contributor expectations for the library. It captures shared design principles rather than prescribing every implementation detail. Components should apply the visual language with shared tokens, accessible behavior, and reusable APIs.
