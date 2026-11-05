<script lang="ts" generics="T">
	let { items, separator = '//' }: { items: readonly T[]; separator?: string } = $props();
</script>

<span class="inline-list">
	{#each items as item, index (index)}
		{#if index > 0}<span class="separator" aria-hidden="true">{separator}</span>{/if}
		<span class="item">{item}</span>
	{/each}
</span>

<style>
	.inline-list {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: baseline;
		column-gap: 0.5em;
		row-gap: 0.25em;
		max-width: 100%;
	}

	.item {
		min-width: 0;
		overflow-wrap: anywhere;
	}

	.separator {
		flex: 0 0 auto;
		white-space: pre;
	}
</style>
