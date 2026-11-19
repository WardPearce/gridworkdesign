<script lang="ts">
	import { Combobox } from 'bits-ui';
	import { Search as SearchIcon } from '@lucide/svelte';
	let {
		suggestions = [],
		value = $bindable(''),
		placeholder = 'Search',
		...attributes
	}: {
		suggestions?: string[];
		value?: string;
		placeholder?: string;
	} & Omit<
		import('svelte').ComponentProps<typeof Combobox.Input>,
		'class' | 'type' | 'list' | 'value' | 'placeholder'
	> = $props();
</script>

<Combobox.Root type="single" bind:value>
	<div class="search-wrap">
		<span class="search-icon"><SearchIcon size={16} aria-hidden="true" /></span>
		<Combobox.Input
			class="search-input"
			{placeholder}
			aria-label={attributes['aria-label'] ?? placeholder}
			{...attributes}
		/>
	</div>
	{#if suggestions.length}
		<Combobox.Portal>
			<Combobox.Content class="search-content" sideOffset={4}>
				<Combobox.Viewport>
					{#each suggestions as suggestion (suggestion)}
						<Combobox.Item value={suggestion} class="search-item">{suggestion}</Combobox.Item>
					{/each}
				</Combobox.Viewport>
			</Combobox.Content>
		</Combobox.Portal>
	{/if}
</Combobox.Root>

<style>
	.search-wrap {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		gap: 0.625rem;
		width: 100%;
		min-height: 2.75rem;
		padding: 0 0.75rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		box-shadow: var(--shadow-inset);
	}
	.search-wrap:focus-within {
		box-shadow: var(--shadow-inset);
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	.search-icon {
		display: inline-flex;
		flex: 0 0 auto;
		align-items: center;
	}
	:global(.search-input) {
		box-sizing: border-box;
		flex: 1;
		min-width: 0;
		min-height: calc(2.75rem - 4px);
		padding: 0.5rem 0;
		border: 0;
		outline: 0;
		background: transparent;
		color: inherit;
		font: inherit;
	}
	:global(.search-input::placeholder) {
		color: var(--text);
		opacity: 1;
	}
	:global(.search-content) {
		z-index: var(--layer-popup);
		width: var(--bits-combobox-anchor-width);
		min-width: var(--bits-combobox-anchor-width);
		max-height: min(18rem, var(--bits-combobox-content-available-height));
		overflow: auto;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: var(--shadow-floating);
	}
	:global(.search-item) {
		min-height: 2.75rem;
		padding: 0.6rem 0.75rem;
		cursor: pointer;
		box-shadow: var(--shadow-inset);
	}
	:global(.search-item[data-highlighted]) {
		background: var(--background-darker);
		color: var(--white);
	}

	:global(.search-item:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
