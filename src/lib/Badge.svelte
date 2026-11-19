<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<span class="badge">{@render children()}</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		padding: 0.2rem 0.5rem;
		border: 1px solid var(--text);
		color: var(--text);
		background: var(--background);
		font-size: 0.75rem;
		font-weight: 700;
		box-shadow: var(--shadow-raised);
	}
</style>
