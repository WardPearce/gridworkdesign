<script lang="ts">
	import { Label as BitsLabel } from 'bits-ui';
	import type { ComponentProps, Snippet } from 'svelte';
	type Props = ComponentProps<typeof BitsLabel.Root> & { children: Snippet };
	let { children, ...rest }: Props = $props();
</script>

<BitsLabel.Root class="label" {...rest}>{@render children()}</BitsLabel.Root>

<style>
	:global(.label) { display: inline-block; color: var(--text); font: inherit; font-weight: 700; }
</style>
