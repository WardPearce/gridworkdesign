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
	}
	:global(.popover-trigger:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}
	:global(.popover-trigger:hover:not(:disabled)) {
		border-style: dashed;
	}
	:global(.popover-content) {
		z-index: var(--layer-popup);
		max-width: min(24rem, calc(100vw - 2rem));
		padding: 1rem;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 3px 3px var(--text);
	}
	:global(.popover-arrow) {
		fill: var(--background);
		stroke: var(--text);
	}
</style>
