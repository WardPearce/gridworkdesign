<script lang="ts">
	import { ContextMenu as BitsMenu } from 'bits-ui';
	import type { Snippet } from 'svelte';
	let {
		items,
		children
	}: { items: { label: string; disabled?: boolean; onSelect?: () => void }[]; children?: Snippet } =
		$props();
</script>

<BitsMenu.Root>
	<BitsMenu.Trigger class="context-target">{@render children?.()}</BitsMenu.Trigger>
	<BitsMenu.Portal>
		<BitsMenu.Content class="context-content ui-motion-enter">
			{#each items as item (item.label)}
				<BitsMenu.Item class="context-item" disabled={item.disabled} onSelect={item.onSelect}
					>{item.label}</BitsMenu.Item
				>
			{/each}
		</BitsMenu.Content>
	</BitsMenu.Portal>
</BitsMenu.Root>

<style>
	:global(.context-target) {
		display: block;
		width: 100%;
		min-height: 3rem;
		padding: 0.75rem;
		border: 1px dashed var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		text-align: left;
	}
	:global(.context-target:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}
	:global(.context-content) {
		z-index: var(--layer-popup);
		min-width: 12rem;
		padding: 0.25rem;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 3px 3px var(--text);
	}
	:global(.context-item) {
		display: flex;
		min-height: 2.75rem;
		align-items: center;
		padding: 0.5rem 0.75rem;
		outline: none;
		cursor: pointer;
	}
	:global(.context-item[data-highlighted]) {
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.context-item[data-disabled]) {
		opacity: 0.55;
		cursor: not-allowed;
	}
</style>
