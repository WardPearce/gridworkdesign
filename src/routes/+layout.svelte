<script lang="ts">
	import Root from '../lib/Root.svelte';
	import ThemeSelector from '../lib/ThemeSelector.svelte';
	let { children } = $props();
</script>

<Root>
	<div class="docs-theme-control">
		<ThemeSelector mode="rotate" />
	</div>
	{@render children()}
</Root>

<style>
	.docs-theme-control {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 0.75rem;
		padding: 0.75rem 1.5rem;
		color: var(--text);
	}
</style>
