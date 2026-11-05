<script lang="ts">
	import { Menubar as BitsMenubar } from 'bits-ui';
	let {
		menus
	}: {
		menus: {
			label: string;
			items: { label: string; disabled?: boolean; onSelect?: () => void }[];
		}[];
	} = $props();
</script>

<BitsMenubar.Root class="menubar">
	{#each menus as menu (menu.label)}
		<BitsMenubar.Menu>
			<BitsMenubar.Trigger class="menubar-trigger" onmousedown={(event) => event.preventDefault()}>{menu.label}</BitsMenubar.Trigger>
			<BitsMenubar.Portal>
				<BitsMenubar.Content class="menubar-content ui-motion-enter">
					{#each menu.items as item (item.label)}<BitsMenubar.Item
							class="menubar-item"
							disabled={item.disabled}
							onSelect={item.onSelect}>{item.label}</BitsMenubar.Item
						>{/each}
				</BitsMenubar.Content>
			</BitsMenubar.Portal>
		</BitsMenubar.Menu>
	{/each}
</BitsMenubar.Root>

<style>
	:global(.menubar) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		border: 2px solid var(--text);
		padding: 0.25rem;
	}
	:global(.menubar-trigger) {
		min-height: 2.75rem;
		padding: 0.5rem 0.875rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
	}
	:global(.menubar-trigger:hover) {
		border-style: dashed;
	}
	:global(.menubar-trigger[data-state='open']),
	:global(.menubar-trigger:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: -4px;
	}
	:global(.menubar-content) {
		z-index: 30;
		min-width: 12rem;
		padding: 0.25rem;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 3px 3px var(--text);
	}
	:global(.menubar-item) {
		display: flex;
		min-height: 2.75rem;
		align-items: center;
		padding: 0.5rem 0.75rem;
		outline: none;
		cursor: pointer;
	}
	:global(.menubar-item[data-highlighted]) {
		outline: 1px dashed var(--text);
		outline-offset: -3px;
	}
	:global(.menubar-item[data-disabled]) {
		opacity: 0.55;
		cursor: not-allowed;
	}
</style>
