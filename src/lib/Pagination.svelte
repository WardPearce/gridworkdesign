<script lang="ts">
	import { Pagination as BitsPagination } from 'bits-ui';
	let {
		count,
		perPage = 10,
		page = $bindable(1)
	}: { count: number; perPage?: number; page?: number } = $props();
</script>

<BitsPagination.Root {count} {perPage} bind:page class="pagination" aria-label="Pagination">
	<BitsPagination.PrevButton class="pagination-button">Previous</BitsPagination.PrevButton>
	{#each Array.from({ length: Math.ceil(count / perPage) }, (_, i) => i + 1) as pageNumber (pageNumber)}
		<BitsPagination.Page page={{ type: 'page', value: pageNumber }} class="pagination-button"
			>{pageNumber}</BitsPagination.Page
		>
	{/each}
	<BitsPagination.NextButton class="pagination-button">Next</BitsPagination.NextButton>
</BitsPagination.Root>

<style>
	:global(.pagination) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		align-items: center;
	}
	:global(.pagination-button) {
		min-width: 2.5rem;
		min-height: 2.5rem;
		padding: 0.35rem 0.65rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
		box-shadow: var(--shadow-raised);
	}
	:global(.pagination-button[data-selected]) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow: var(--shadow-inset);
	}
	:global(
		.pagination-button:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			):not(:disabled)
	) {
		box-shadow: var(--shadow-hover);
	}
	:global(.pagination-button:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.pagination-button:disabled) {
		opacity: 0.55;
		cursor: not-allowed;
	}

	:global(.pagination-button:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
