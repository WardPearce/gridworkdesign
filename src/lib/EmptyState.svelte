<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		title,
		description,
		children
	}: { title: string; description?: string; children?: Snippet } = $props();
</script>

<div class="empty-state">
	<h3>{title}</h3>
	{#if description}<p>{description}</p>{/if}{@render children?.()}
</div>

<style>
	.empty-state {
		display: grid;
		justify-items: center;
		gap: 1rem;
		padding: 2rem;
		border: 2px solid var(--text);
		text-align: center;
		color: var(--text);
		box-shadow: var(--shadow-inset);
	}
	h3,
	p {
		margin: 0;
	}
</style>
