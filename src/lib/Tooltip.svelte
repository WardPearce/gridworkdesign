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
	}
	:global(.tooltip-trigger:hover) {
		border-style: dashed;
	}
	:global(.tooltip-trigger:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 2px;
	}
	:global(.tooltip-content) {
		z-index: 30;
		max-width: min(20rem, calc(100vw - 2rem));
		padding: 0.375rem 0.625rem;
		border: 2px solid var(--text);
		background: var(--background-darker);
		color: var(--white);
		font-size: 0.8125rem;
	}
</style>
