<script lang="ts">
	import { DropdownMenu as BitsMenu } from 'bits-ui';
	import { ChevronDown } from '@lucide/svelte';
	let {
		label = 'Actions',
		items
	}: {
		label?: string;
		items: { label: string; disabled?: boolean; onSelect?: () => void }[];
	} = $props();
</script>

<BitsMenu.Root>
	<BitsMenu.Trigger class="dropdown-menu-trigger"
		>{label}<ChevronDown size={16} aria-hidden="true" /></BitsMenu.Trigger
	>
	<BitsMenu.Portal>
		<BitsMenu.Content class="dropdown-menu-content" sideOffset={6}>
			{#each items as item (item.label)}
				<BitsMenu.Item class="dropdown-menu-item" disabled={item.disabled} onSelect={item.onSelect}
					>{item.label}</BitsMenu.Item
				>
			{/each}
		</BitsMenu.Content>
	</BitsMenu.Portal>
</BitsMenu.Root>

<style>
	:global(.dropdown-menu-trigger) {
		display: inline-flex;
		min-height: 2.75rem;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.875rem;
		border: 2px solid var(--text);
		background: var(--background-darker);
		color: var(--white);
		font: inherit;
		cursor: pointer;
		box-shadow: 3px 3px var(--text);
	}
	:global(.dropdown-menu-trigger:hover) {
		border-style: dashed;
	}
	:global(.dropdown-menu-trigger:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}
	:global(.dropdown-menu-content) {
		z-index: var(--layer-popup);
		min-width: 12rem;
		padding: 0.25rem;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 3px 3px var(--text);
	}
	:global(.dropdown-menu-item) {
		display: flex;
		min-height: 2.75rem;
		align-items: center;
		padding: 0.5rem 0.75rem;
		outline: none;
		cursor: pointer;
	}
	:global(.dropdown-menu-item[data-highlighted]) {
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.dropdown-menu-item[data-disabled]) {
		opacity: 0.55;
		cursor: not-allowed;
	}
</style>
