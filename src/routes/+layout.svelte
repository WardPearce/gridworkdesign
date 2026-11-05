<script lang="ts">
	import DemoLinks from './demo/DemoLinks.svelte';

	let { children } = $props();
</script>

{@render children()}<DemoLinks />
