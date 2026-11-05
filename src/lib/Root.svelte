<script lang="ts">
	import type { Snippet } from 'svelte';
	import './theme.css';

	let { children }: { children: Snippet } = $props();
</script>

{@render children()}

<style>
	:global(body) {
		margin: 0;
		background: var(--background);
		color: var(--text);
		font-family: var(--font-body);
	}
</style>
