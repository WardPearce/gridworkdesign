<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		title,
		children,
		urgent = false
	}: { title: string; children?: Snippet; urgent?: boolean } = $props();
</script>

<div class="alert" role={urgent ? 'alert' : 'status'}>
	<strong>{title}</strong>{@render children?.()}
</div>

<style>
	.alert {
		display: grid;
		gap: 0.5rem;
		padding: 1rem;
		border: 2px solid var(--text);
		border-left-width: 6px;
		color: var(--text);
		background: var(--background);
		box-shadow: var(--shadow-raised);
	}
</style>
