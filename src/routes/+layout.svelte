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
	:global(body) {
		margin: 0;
		min-height: 100vh;
	}
	:global(#app) {
		min-height: 100vh;
	}
	.docs-theme-control {
		position: absolute;
		top: 0.75rem;
		right: 1.5rem;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 0.75rem;
		padding: 0;
		color: var(--text);
	}
	@media (max-width: 760px) {
		.docs-theme-control {
			position: static;
			padding: 0.75rem 1rem;
		}
	}
</style>
