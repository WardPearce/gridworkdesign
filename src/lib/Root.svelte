<script lang="ts">
	import type { Snippet } from 'svelte';
	import './theme.css';

	let { children }: { children: Snippet } = $props();
</script>

<div class="theme-root">
	{@render children()}
</div>

<style>
	:global(body) {
		margin: 0;
	}
	.theme-root {
		min-height: 100vh;
		background: var(--background);
		color: var(--text);
		font-family: var(--font-body);
	}
</style>
