<script lang="ts">
	import { DropdownMenu as BitsMenu } from 'bits-ui';
	import { ChevronDown } from '@lucide/svelte';
	let {
		label = 'Menu',
		items
	}: { label?: string; items: { label: string; disabled?: boolean; onSelect?: () => void }[] } =
		$props();
</script>

<BitsMenu.Root>
	<BitsMenu.Trigger class="menu-trigger"
		>{label} <ChevronDown size={16} aria-hidden="true" /></BitsMenu.Trigger
	>
	<BitsMenu.Portal>
		<BitsMenu.Content class="menu-content" sideOffset={6}>
			{#each items as item (item.label)}<BitsMenu.Item
					class="menu-item"
					disabled={item.disabled}
					onSelect={item.onSelect}>{item.label}</BitsMenu.Item
				>{/each}
		</BitsMenu.Content>
	</BitsMenu.Portal>
</BitsMenu.Root>

<style>
	:global(.menu-trigger) {
		display: inline-flex;
		min-height: 2.75rem;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.875rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
	}
	:global(.menu-trigger:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}
	:global(.menu-content) {
		z-index: 30;
		min-width: 12rem;
		padding: 0.25rem;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 3px 3px var(--text);
	}
	:global(.menu-item) {
		display: flex;
		min-height: 2.75rem;
		align-items: center;
		padding: 0.5rem 0.75rem;
		outline: none;
		cursor: pointer;
	}
	:global(.menu-item[data-highlighted]) {
		outline: 1px dashed var(--text);
		outline-offset: -3px;
	}
	:global(.menu-item[data-disabled]) {
		opacity: 0.55;
		cursor: not-allowed;
	}
</style>
