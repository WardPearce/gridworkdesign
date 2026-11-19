<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		header,
		footer,
		class: className = '',
		alternate = false,
		flush = false,
		stretch = false,
		interactive = false
	}: {
		children: Snippet;
		header?: Snippet;
		footer?: Snippet;
		class?: string;
		alternate?: boolean;
		flush?: boolean;
		stretch?: boolean;
		interactive?: boolean;
	} = $props();
</script>

<article
	class={`card ${alternate ? 'card-alternate' : ''} ${flush ? 'card-flush' : ''} ${stretch ? 'card-stretch' : ''} ${interactive ? 'card-interactive' : ''} ${className}`}
	data-alternate={alternate || undefined}
>
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
		box-shadow: var(--shadow-raised);
	}
	.card-stretch {
		display: flex;
		height: 100%;
		flex-direction: column;
	}
	.card-stretch .card-body {
		display: flex;
		flex: 1;
		flex-direction: column;
	}
	.card-flush .card-body {
		padding: 0;
	}
	.card-interactive {
		transition:
			box-shadow 140ms ease-out,
			transform 140ms ease-out;
	}
	.card-interactive:hover {
		box-shadow: var(--shadow-hover);
		transform: translateY(-2px);
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
		border-top: 2px solid var(--text);
	}
	@media (prefers-reduced-motion: reduce) {
		.card-interactive {
			transition: none;
		}
		.card-interactive:hover {
			transform: none;
		}
	}
</style>
