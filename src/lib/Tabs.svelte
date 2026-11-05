<script lang="ts">
	import { Tabs as BitsTabs } from 'bits-ui';

	type TabItem = { value: string; label: string; content: string; disabled?: boolean };
	let {
		items,
		value = $bindable(items[0]?.value),
		...rest
	}: { items: TabItem[]; value?: string } = $props();
</script>

<BitsTabs.Root bind:value class="tabs" {...rest}>
	<BitsTabs.List class="tabs-list" aria-label="Sections">
		{#each items as item (item.value)}
			<BitsTabs.Trigger value={item.value} disabled={item.disabled} class="tabs-trigger"
				>{item.label}</BitsTabs.Trigger
			>
		{/each}
	</BitsTabs.List>
	{#each items as item (item.value)}
		<BitsTabs.Content value={item.value} class="tabs-content"
			><p>{item.content}</p></BitsTabs.Content
		>
	{/each}
</BitsTabs.Root>

<style>
	:global(.tabs) {
		display: block;
		width: 100%;
	}
	:global(.tabs-list) {
		display: flex;
		flex-wrap: wrap;
		border-bottom: 2px solid var(--text);
	}
	:global(.tabs-trigger) {
		min-height: 2.75rem;
		padding: 0.5rem 0.9rem;
		border: 2px solid transparent;
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
	}
	:global(.tabs-trigger[data-state='active']) {
		border-color: var(--text);
		border-bottom-color: var(--background);
		margin-bottom: -2px;
		font-weight: 700;
	}
	:global(.tabs-trigger:hover:not(:disabled)) {
		text-decoration: underline;
		text-decoration-style: dashed;
		text-underline-offset: 0.2em;
	}
	:global(.tabs-trigger[data-state='active']:hover:not(:disabled)) {
		border-bottom-color: var(--background);
	}
	:global(.tabs-trigger:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: -4px;
	}
	:global(.tabs-trigger:disabled) {
		opacity: 0.55;
		cursor: not-allowed;
	}
	:global(.tabs-content) {
		padding: 1rem;
		border: 2px solid var(--text);
		border-top: 0;
	}
	:global(.tabs-content p) {
		margin: 0;
	}
</style>
