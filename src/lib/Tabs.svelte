<script lang="ts">
	import { Tabs as BitsTabs } from 'bits-ui';

	type TabItem = {
		value: string;
		label: string;
		content: string | import('svelte').Snippet;
		disabled?: boolean;
	};
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
			>{#if typeof item.content === 'string'}<p>
					{item.content}
				</p>{:else}{@render item.content()}{/if}</BitsTabs.Content
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
		box-shadow: var(--shadow-raised);
	}
	:global(.tabs-trigger[data-state='active']) {
		border-color: var(--text);
		border-bottom-color: var(--background);
		margin-bottom: -2px;
		background: var(--background-darker);
		color: var(--white);
		font-weight: 700;
		box-shadow: var(--shadow-inset);
	}
	:global(
		.tabs-trigger:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			):not(:disabled)
	) {
		text-decoration: underline;
		text-decoration-style: solid;
		text-underline-offset: 0.2em;
	}
	:global(
		.tabs-trigger[data-state='active']:hover:not(:disabled):not([data-disabled]):not(
				[aria-disabled='true']
			):not([data-disabled] *):not(:disabled)
	) {
		border-bottom-color: var(--background);
	}
	:global(.tabs-trigger:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.tabs-trigger:disabled) {
		opacity: 0.55;
		cursor: not-allowed;
	}
	:global(.tabs-content) {
		padding: 1rem;
		border: 2px solid var(--text);
		border-top: 0;
		box-shadow: var(--shadow-raised);
	}
	:global(.tabs-content p) {
		margin: 0;
	}

	:global(.tabs-trigger:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
