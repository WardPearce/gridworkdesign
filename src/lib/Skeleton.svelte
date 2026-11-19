<script lang="ts">
	let { width = '100%', height = '1rem' }: { width?: string; height?: string } = $props();
</script>

<span class="skeleton" style:width style:height aria-hidden="true"></span>

<style>
	.skeleton {
		display: block;
		background: color-mix(in srgb, var(--text) 18%, var(--background));
		box-shadow: var(--shadow-inset);
	}
</style>
