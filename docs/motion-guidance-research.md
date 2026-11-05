# Motion guidance research

Status: approved and incorporated into `design-system.md` section 4 and its contributor checklist.

## Recommendation

Keep motion functional, sparse, and visually consistent with the design system's direct, utilitarian character. Use it to explain a state change or preserve spatial context, never as decoration or a prerequisite for understanding an interface.

## Proposed design rules

- Prefer a quick opacity or small positional transition for overlays and content entering or leaving. Avoid large travel, scale/bounce, parallax, blur, and decorative looping motion; they add ornament and can distract from data entry.
- Keep control feedback immediate. Avoid delayed starts; use short durations (roughly 100–200 ms as a starting range, tuned to the component) and simple easing. This timing range is a design recommendation, not a WCAG requirement.
- Animate layout only when it helps users track reordered content. Do not animate routine field updates or progress in a way that obscures the current value.
- Use CSS transitions for simple state feedback and Svelte's `transition:` for DOM enter/leave. Use `animate:` only for meaningful reordering in keyed each blocks. Prefer built-ins and avoid introducing an animation dependency for the library's restrained needs.
- Respect the system `prefers-reduced-motion` preference everywhere. Remove non-essential spatial movement and looping animation; use an instant state change or a minimal opacity change when that still helps convey continuity. Preserve the final state and all functionality.
- Avoid automatically repeating motion. Any essential or user-requested ongoing animation needs an obvious pause/stop control where applicable.
- Motion must not replace text, semantic state, focus indication, or status announcements. Keep the control's accessible state correct throughout transitions; confirm dismissal and focus restoration for overlays.
- Use theme tokens for colors and existing crisp borders/surfaces. Do not add glow, blur, gradients, or soft elevation to make motion visible.

## Project observations

The design guide now defines motion patterns and review criteria. The 120 ms progress-width transition in `src/lib/Progress.svelte` already disables under reduced motion. The date/time field focus pulse was removed, and brief opacity entry/exit animations were added to overlays, menus, tooltips, selects, and calendar popovers with a reduced-motion override.

## Sources

- [Svelte transition directive](https://svelte.dev/docs/svelte/transition): transitions are tied to DOM entry/exit; `transition:` is bidirectional and Svelte exposes built-in transitions. Relevant for choosing the native Svelte mechanism for conditional UI.
- [Svelte animate directive](https://svelte.dev/docs/svelte/animate): `animate:` applies to reordered existing items in keyed each blocks, not additions/removals. Relevant for limiting list motion to meaningful reordering.
- [Svelte motion and `prefersReducedMotion`](https://svelte.dev/docs/svelte/motion): Svelte provides a reactive media-query helper (available since 5.7.0) for responding to reduced-motion preference when behavior must be adapted in script. CSS media queries remain simpler for CSS-only effects.
- [W3C Understanding WCAG 2.3.3: Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions): Level AAA criterion says interaction-triggered motion can be disabled unless essential; the W3C describes reduced-motion preference, a user control, or avoiding unnecessary motion as ways to reduce risk. It distinguishes user-triggered animation from automatically initiated movement.
- [MDN `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion): the media feature communicates a preference to remove, reduce, or replace non-essential motion.

## Suggested review question

If approved, append the proposed rules (edited as needed) to section 4 of `docs/design-system.md`, and update the contributor checklist to check reduced-motion behavior for components that animate.
