<script lang="ts">
	import { Command } from 'bits-ui';
	type Item = { value: string; label: string; keywords?: string[]; disabled?: boolean };
	let {
		items,
		label = 'Search commands',
		value = $bindable('')
	}: { items: Item[]; label?: string; value?: string } = $props();
</script>

<Command.Root {label} bind:value class="command-root">
	<Command.Input placeholder="Search…" class="command-input" aria-label={label} />
	<Command.List class="command-list">
		<Command.Empty class="command-empty">No matching commands.</Command.Empty>
		{#each items as item (item.value)}
			<Command.Item
				value={item.value}
				keywords={item.keywords}
				disabled={item.disabled}
				class="command-item"
			>
				{item.label}
			</Command.Item>
		{/each}
	</Command.List>
</Command.Root>

<style>
	:global(.command-root) {
		width: 100%;
		max-width: 24rem;
		border: 2px solid var(--text);
		color: var(--text);
		box-shadow: var(--shadow-inset);
	}
	:global(.command-input) {
		box-sizing: border-box;
		width: 100%;
		min-height: 2.75rem;
		padding: 0.5rem 0.75rem;
		border: 0;
		border-bottom: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
	}
	:global(.command-input:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.command-list) {
		max-height: 16rem;
		overflow: auto;
		padding: 0.25rem;
	}
	:global(.command-item) {
		min-height: 2.75rem;
		padding: 0.6rem 0.75rem;
		cursor: pointer;
		box-shadow: var(--shadow-inset);
	}
	:global(.command-item[data-selected]) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow: var(--shadow-inset);
	}
	:global(.command-item[data-disabled]) {
		opacity: 0.55;
		cursor: not-allowed;
	}
	:global(.command-empty) {
		padding: 0.75rem;
	}

	:global(.command-item:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
