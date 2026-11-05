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
	}
	:global(.pagination-button[data-selected]) {
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.pagination-button:hover:not(:disabled)) {
		border-style: dotted;
	}
	:global(.pagination-button:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 2px;
	}
	:global(.pagination-button:disabled) {
		opacity: 0.55;
		cursor: not-allowed;
	}
</style>
