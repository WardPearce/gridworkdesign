# Design system: Svelte UI

This document defines the visual language for this Svelte 5 component library. Bits UI supplies accessible behavior and interaction primitives. Components should feel like one family even when used in different applications or themes.

## 1. Design intent

The interface should feel **direct, utilitarian, and a little handmade**. It favors readable information, visible boundaries, and plain language with restrained physical depth and minimal decoration. The result should feel like a carefully typeset tool.

Keep these qualities in balance:

- **Readable first:** monospace body text, clear hierarchy, and useful labels.
- **Visible structure:** solid borders, engraved separators, and shared bevel shadows define regions.
- **Low ornament:** use depth to explain interaction; avoid gratuitous gradients, glass, pill shapes, or animation.
- **Themeable:** the same component must work across light, dark, and tinted palettes.
- **Accessible behavior:** Bits UI state and keyboard behavior remain intact; styling must make states perceivable.

## 2. Visual foundations

### Color and themes

Use these five base values for the default palette. These are the values used by the reference styles, recorded here so components can reproduce its contrast and hierarchy:

| Token                 | Default value                  | Strict usage                                                                                                                       |
| --------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `--background`        | `rgb(182 180 180)` (`#b6b4b4`) | Page background and ordinary control/panel surfaces.                                                                               |
| `--text`              | `rgb(56 56 56)` (`#383838`)    | Primary text, solid control borders, and focus rings. This is the default ink color.                                               |
| `--white`             | `rgb(236 236 236)` (`#ececec`) | Inverse text/icons and subtle depth highlights. Never use as the default page background.                                          |
| `--light`             | `#999999`                      | Muted track/surface color, specifically progress tracks. Do not use for body copy or important boundaries.                         |
| `--background-darker` | `rgb(71 70 70)` (`#474646`)    | Alternate filled button and inset surface. Pair with `--white` foreground. Do not use as the page background in the default theme. |

The reference palettes are:

| Theme              | `--white`          | `--background`     | `--light` | `--text`           | `--background-darker` |
| ------------------ | ------------------ | ------------------ | --------- | ------------------ | --------------------- |
| Gridwork (default) | `rgb(236 236 236)` | `rgb(182 180 180)` | `#999999` | `rgb(56 56 56)`    | `rgb(71 70 70)`       |
| NewsPaper          | `rgb(170 166 166)` | `rgb(136 135 135)` | `#747373` | `rgb(27 27 27)`    | `rgb(49 49 49)`       |
| BurntWood          | `rgb(255 255 255)` | `rgb(26 25 25)`    | `#494444` | `rgb(240 232 232)` | `rgb(26 25 25)`       |
| Hacker             | `rgb(236 236 236)` | `#072004`          | `#0f3813` | `rgb(178 230 176)` | `rgb(11 78 8)`        |
| PurpleDaydream     | `rgb(236 236 236)` | `rgb(34 3 75)`     | `#6734aa` | `rgb(201 172 235)` | `rgb(43 13 112)`      |
| BloodRed           | `rgb(236 236 236)` | `rgb(54 12 12)`    | `#863434` | `rgb(194 122 122)` | `rgb(88 14 14)`       |

Apply the roles consistently:

1. Set the page and ordinary surfaces to `--background`; text and solid boundaries use `--text`.
2. Ordinary actions use the page surface; filled alternate actions use `--background-darker` with `--white` foreground. Elevation and pressed states use shared shadow tokens.
3. Fields and tracks are recessed; action faces are raised. Hover strengthens depth without changing border style or dimensions.
4. Use `--light` for tracks or muted surface regions, never body copy. Progress fill uses `--text`.
5. Use `--white` for inverse foreground and mix a small amount into transparent bevel highlights. It is not a generic surface color.
6. Derive semantic colors from the palette. Physical shadows use a neutral black alpha token so light foreground ink in dark themes does not create a glowing shadow.
7. Components consume CSS custom properties; never hard-code theme RGB values in component styles.

The library ships its Gridwork defaults in `src/lib/theme.css`. Import this stylesheet once at the application root, or import the package entry point so its defaults are included. A host theme can override the five custom properties on `:root` or a theme container. Do not rely on fallback values declared only on the page body: portaled Bits UI content is rendered outside component subtrees and must inherit the same defined tokens.

When translating to library tokens, map `--background` to page/surface, `--text` to foreground/border/focus, `--white` to inverse foreground, `--light` to muted surface/track, and `--background-darker` to alternate surface. Keep semantic aliases if needed, but preserve these base-role meanings. Check text and control contrast in every shipped theme before adding it; some reference palette combinations may need adjustment for accessible small text while preserving their hue and contrast character.

The library also exposes semantic aliases for custom compositions. Use these aliases instead of writing fixed page or component colors:

| Alias                  | Role                                                |
| ---------------------- | --------------------------------------------------- |
| `--surface`            | Main page and component surface (`--background`)    |
| `--surface-subtle`     | Slightly differentiated surface derived from theme  |
| `--surface-muted`      | Muted surface or track (`--light`)                  |
| `--surface-inverse`    | Alternate filled surface (`--background-darker`)    |
| `--foreground`         | Primary text (`--text`)                             |
| `--foreground-muted`   | Supporting text derived from foreground and surface |
| `--foreground-inverse` | Text on inverse surfaces (`--white`)                |
| `--border`             | Primary outline (`--text`)                          |
| `--border-subtle`      | Low emphasis divider derived from `--text`          |
| `--accent`             | Alternate action surface (`--background-darker`)    |
| `--accent-foreground`  | Foreground for accent surfaces (`--white`)          |

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

- Prefer square corners; keep circular geometry where function requires it, such as dials, radio indicators, and spinners.
- Keep solid boundaries at rest, on hover, and during selection. Use 2px ink borders for fields and primary controls; compact parts may use 1px borders. Dashed and dotted borders are no longer the interaction language.
- Light falls from above: a subtle top highlight and lower shadow define a bevel. Use shared tokens from `src/lib/theme.css` rather than custom shadows per component.

| Token               | Role                                                              | Typical components                                                   |
| ------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------- |
| `--depth-shadow`    | Neutral dark alpha for physical occlusion in every theme          | Shared shadow recipes                                                |
| `--depth-highlight` | Transparent palette-derived bevel light                           | Top edges and engraved separators                                    |
| `--shadow-raised`   | Resting face with a top bevel, lower bevel, and short cast shadow | Buttons, triggers, cards, badges, navigation items, slider thumbs    |
| `--shadow-hover`    | Slightly stronger lift, without movement or resizing              | Enabled actions on hover                                             |
| `--shadow-inset`    | Inner top shadow and lower highlight                              | Fields, search, tracks, selected and pressed controls, empty regions |
| `--shadow-floating` | Beveled face with broader separation                              | Dialogs, popovers, menus, tooltips, picker panels                    |
| `--focus-ring`      | Solid 3px ink outline overlapping the existing border             | Keyboard focus and field focus-within                                |

- Use `--focus-ring-offset: -2px` with `--focus-ring` so focus reinforces the existing edge as one continuous boundary. Never add a separated outer ring around an already bordered control. Keep native inner inputs borderless and outline-free when their wrapper owns the focus indicator; segmented controls also retain the inverse active segment.
- Depth communicates hierarchy, not importance alone: editable wells sit below action faces, and overlays sit above panels. Avoid giving typography, labels, or layout-only wrappers a shadow.
- Separators use a solid ink edge paired with a thin highlight to read as an engraved seam. Card and section dividers stay solid.
- Keep shadows restrained. Avoid glass, large decorative glows, and gradients. Disabled controls retain their geometry and resting depth without hover or pressed feedback.

### Spacing and layout

The reference uses compact spacing with a simple `1em` rhythm, broad upload panels, and content that stacks on narrow screens. Build spacing from a small token scale (for example 4, 8, 12, 16, 24, 32px), then keep spacing consistent within each component. Give controls enough room to operate comfortably even when the overall look is compact.

Use fluid width and sensible max-widths. On narrow viewports, stack side-by-side controls and let actions fill available width where useful. Do not preserve legacy breakpoint values mechanically; choose breakpoints based on component content.

## 3. Component language

### Buttons and links

- Buttons are rectangular and text-forward with solid boundaries and `--shadow-raised` at rest.
- Use `--background` or transparent page-matching surfaces for ordinary actions; alternate actions pair `--background-darker` with `--white` foreground. Both variants share the same elevation rules.
- Enabled hover uses `--shadow-hover`; pressing uses `--shadow-inset`. Keep position, dimensions, and border style stable. Persistent selections remain inset.
- Apply the same treatment to toolbar actions, pagination, calendar navigation, menu triggers, and composite control buttons.
- Links retain a persistent underline or another clear non-color cue. Ordinary inline links do not need a bevel; navigation surfaces may use raised faces.
- Disabled actions use reduced opacity and an appropriate cursor; exclude them from hover and pressed feedback.
- Every interactive control needs a solid focus-visible ring, independent of its current shadow or selection state. Icon-only buttons need an accessible name.

### Fields and selection controls

- Inputs, textareas, search wells, PIN cells, and segmented date/time fields use square solid boundaries, monospace text, and `--shadow-inset`.
- Keep the inset shadow on field focus; add `--focus-ring` with `--focus-ring-offset` on the field or its outer wrapper. Never substitute a dashed border for focus or remove focus feedback.
- Segmented date/time controls retain the inverse active-segment treatment as well as a solid outer focus-within ring.
- Select and combobox triggers use raised action faces; their popup panels use floating depth. Selected options, toggles, checkboxes, radio controls, and active tabs use inset depth with explicit state semantics.
- Sliders and switches pair recessed tracks with raised thumbs. Progress and meter tracks are recessed, with measurable contrasting fills.
- Labels remain persistent and associated. Error and disabled states need text or icons as appropriate in addition to color; do not rely on shadows alone.

### Panels, cards, and separators

- Cards, alerts, calendars, toolbars, scroll regions, and expandable groups use solid boundaries with restrained shared depth.
- Cards and outer panels use raised depth; empty regions and editable wells use inset depth. Reserve floating elevation for overlays.
- Accordion and collapsible triggers are tactile action faces; content remains readable without extra nested elevation.
- Separate content with solid engraved seams and headings. Avoid stacking shadows on every nested wrapper or inline text element.

### Progress and status

The reference presents progress as plain status copy paired with a prominent native progress bar. Keep progress measurable and textual: announce the task, elapsed time or completed amount where useful, and total amount. Preserve native `<progress>` semantics or equivalent accessible value attributes. Ensure the fill and track remain distinguishable in all themes.

### Overlays and composite controls (Bits UI)

Use Bits UI for behavior such as dialogs, popovers, menus, tabs, accordions, and selects. Keep its keyboard handling, focus management, and ARIA relationships. Style the exposed parts with this document’s tokens and geometry. Do not replace accessible primitives with custom behavior just to match an appearance. Menus and dialogs should use square borders, opaque surfaces, solid focus rings, and floating depth; their positioning and dismissal behavior should remain predictable.

- Dialogs, alert dialogs, popovers, menus, tooltips, and date-picker panels must use a solid `--background` surface and a visible 2px `--text` border. Never leave portaled content transparent: it must remain legible over both the page and the dimmed overlay. Use `--background-darker` only for an intentional alternate/inverse surface with `--white` foreground.
- Give overlay panels `--shadow-floating` where it helps separate the panel from its surroundings. Keep the backdrop distinct from the panel, and derive its tint from the palette rather than adding a new palette color.

## 4. Interaction and motion

- Provide visible `:focus-visible` treatment on every interactive component.
- Keep motion functional, sparse, and consistent with the direct, utilitarian visual language. Use it to clarify a state change or preserve spatial context, never as decoration or a prerequisite for understanding.
- Prefer quick opacity or small positional transitions for overlays and content entering or leaving. Avoid large travel, scale/bounce, parallax, blur, and decorative looping motion.
- Keep control feedback immediate: avoid delayed starts and use short durations (roughly 100–200 ms as a starting range, tuned to the component) with simple easing. Do not animate routine field updates or progress in ways that obscure the current value.
- Use CSS transitions for simple state feedback and Svelte's `transition:` for DOM entry/exit. Use `animate:` only for meaningful reordering in keyed each blocks. Prefer Svelte's built-ins; avoid adding an animation dependency for the library's restrained needs.
- Respect `prefers-reduced-motion` everywhere. Remove non-essential spatial movement and looping animation; use an instant state change or minimal opacity change when continuity still helps. Preserve the final state and all functionality.
- Avoid automatically repeating motion. Any essential or user-requested ongoing animation needs an obvious pause/stop control where applicable.
- Motion must not replace text, semantic state, focus indication, or status announcements. Keep accessible state correct throughout transitions; confirm dismissal and focus restoration for overlays.
- Use theme tokens for colors and existing crisp borders/surfaces. Use the shared depth tokens for state feedback; do not add decorative effects to make motion visible.
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
3. **Match the visual language.** Square geometry, solid outlines, shared raised/inset/floating depth, monospace utility, and minimal ornament should be recognizable.
4. **Cover states.** Include default, hover, focus-visible, pressed/open, disabled, and invalid/loading states where relevant. Ensure hover does not shift layout.
5. **Cover themes.** Use semantic variables throughout and inspect every supported theme. Never hard-code the sample RGB values into component styles.
6. **Cover responsive behavior.** Define how the component wraps, stacks, or scrolls at narrow widths.
7. **Keep APIs composable.** Prefer slots/snippets and clear component props over one rigid layout. Do not bake page-specific copy or product-specific behavior into general-purpose primitives.
8. **Preserve semantics.** Use native HTML where possible and retain Bits UI keyboard, ARIA, and focus behavior.
9. **Use consistent naming.** Prefer semantic token and component names (`surface`, `text-muted`, `focus-ring`) over visual names (`grey-2`, `big-shadow`).
10. **Document exceptions.** If a component intentionally diverges, explain why in its component docs or source comment so the next contributor can make the same decision consistently.

Before considering a component complete, review it against this short checklist:

- Does it look like it belongs beside the library’s solid controls and tactile surfaces?
- Does it use shared tokens and work in every theme?
- Are all interactive states visible and stable?
- Does it retain Bits UI accessibility and keyboard behavior?
- If it animates, does it honor `prefers-reduced-motion` and keep state and functionality clear without motion?
- Does it reflow at narrow widths and avoid relying on color alone?

## 7. Scope and source notes

This guide defines the visual direction and contributor expectations for the library. It captures shared design principles rather than prescribing every implementation detail. Components should apply the visual language with shared tokens, accessible behavior, and reusable APIs.
