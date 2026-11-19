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
	<BitsMenu.Trigger class="simple-menu-trigger"
		>{label} <ChevronDown size={16} aria-hidden="true" /></BitsMenu.Trigger
	>
	<BitsMenu.Portal>
		<BitsMenu.Content class="simple-menu-content" sideOffset={6}>
			{#each items as item (item.label)}<BitsMenu.Item
					class="simple-menu-item"
					disabled={item.disabled}
					onSelect={item.onSelect}>{item.label}</BitsMenu.Item
				>{/each}
		</BitsMenu.Content>
	</BitsMenu.Portal>
</BitsMenu.Root>

<style>
	:global(.simple-menu-trigger) {
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
		box-shadow: var(--shadow-raised);
	}
	:global(.simple-menu-trigger:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.simple-menu-content) {
		z-index: var(--layer-popup);
		min-width: 12rem;
		padding: 0.25rem;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: var(--shadow-floating);
	}
	:global(.simple-menu-item) {
		display: flex;
		min-height: 2.75rem;
		align-items: center;
		padding: 0.5rem 0.75rem;
		outline: none;
		cursor: pointer;
		box-shadow: var(--shadow-raised);
	}
	:global(.simple-menu-item[data-highlighted]) {
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.simple-menu-item[data-disabled]) {
		opacity: 0.55;
		cursor: not-allowed;
	}

	:global(.simple-menu-trigger:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}

	:global(.simple-menu-item:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
