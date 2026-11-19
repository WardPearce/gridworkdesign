<script lang="ts">
	import { Popover as BitsPopover } from 'bits-ui';
	import type { Snippet } from 'svelte';
	let { trigger = 'Show details', children }: { trigger?: string; children?: Snippet } = $props();
</script>

<BitsPopover.Root>
	<BitsPopover.Trigger class="popover-trigger">{trigger}</BitsPopover.Trigger>
	<BitsPopover.Portal>
		<BitsPopover.Content class="popover-content ui-motion-enter" sideOffset={8}>
			{@render children?.()}
			<BitsPopover.Arrow class="popover-arrow" />
		</BitsPopover.Content>
	</BitsPopover.Portal>
</BitsPopover.Root>

<style>
	:global(.popover-trigger) {
		min-height: 2.75rem;
		padding: 0.5rem 0.875rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
		box-shadow: var(--shadow-raised);
	}
	:global(.popover-trigger:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(
		.popover-trigger:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			):not(:disabled)
	) {
		box-shadow: var(--shadow-hover);
	}
	:global(.popover-content) {
		z-index: var(--layer-popup);
		max-width: min(24rem, calc(100vw - 2rem));
		padding: 1rem;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: var(--shadow-floating);
	}
	:global(.popover-arrow) {
		fill: var(--background);
		stroke: var(--text);
	}

	:global(.popover-trigger:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
