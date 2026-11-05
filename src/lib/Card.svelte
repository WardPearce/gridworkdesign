<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		header,
		footer,
		class: className = '',
		alternate = false
	}: {
		children: Snippet;
		header?: Snippet;
		footer?: Snippet;
		class?: string;
		alternate?: boolean;
	} = $props();
</script>

<article class={`card ${alternate ? 'card-alternate' : ''} ${className}`} data-alternate={alternate || undefined}>
	{#if header}
		<header class="card-header">{@render header()}</header>
	{/if}
	<div class="card-body">{@render children()}</div>
	{#if footer}
		<footer class="card-footer">{@render footer()}</footer>
	{/if}
</article>

<style>
	.card {
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
	}

	.card[data-alternate='true'] {
		background: var(--background-darker);
		color: var(--white);
	}

	.card-header,
	.card-footer {
		padding: 0.75rem 1rem;
		font-family: 'FragmentMono', monospace;
	}

	.card-header {
		border-bottom: 2px solid var(--text);
		font-weight: 700;
	}

	.card-body {
		padding: 1rem;
	}

	.card-footer {
		border-top: 2px dotted var(--text);
	}
</style>
