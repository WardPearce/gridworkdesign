<script lang="ts">
	import { Tooltip as BitsTooltip } from 'bits-ui';
	import type { Snippet } from 'svelte';
	let { label, children }: { label: string; children?: Snippet } = $props();
</script>

<BitsTooltip.Provider>
	<BitsTooltip.Root>
		<BitsTooltip.Trigger class="tooltip-trigger">{@render children?.()}</BitsTooltip.Trigger>
		<BitsTooltip.Portal>
			<BitsTooltip.Content class="tooltip-content ui-motion-enter" sideOffset={6}
				>{label}</BitsTooltip.Content
			>
		</BitsTooltip.Portal>
	</BitsTooltip.Root>
</BitsTooltip.Provider>

<style>
	:global(.tooltip-trigger) {
		display: inline-flex;
		min-height: 2.75rem;
		align-items: center;
		padding: 0.375rem 0.625rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: help;
		box-shadow: var(--shadow-raised);
	}
	:global(
		.tooltip-trigger:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			)
	) {
		box-shadow: var(--shadow-hover);
	}
	:global(.tooltip-trigger:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.tooltip-content) {
		z-index: var(--layer-popup);
		max-width: min(20rem, calc(100vw - 2rem));
		padding: 0.375rem 0.625rem;
		border: 2px solid var(--text);
		background: var(--background-darker);
		color: var(--white);
		font-size: 0.8125rem;
		box-shadow: var(--shadow-floating);
	}
</style>
