<script lang="ts">
	import '../lib/theme.css';
	import DemoLinks from './demo/DemoLinks.svelte';

	let { children } = $props();
</script>

{@render children()}<DemoLinks />
