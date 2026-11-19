<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		minColumnWidth = '17rem',
		gap = 'md',
		class: className = '',
		...attributes
	}: {
		children: Snippet;
		minColumnWidth?: string;
		gap?: 'sm' | 'md' | 'lg';
		class?: string;
	} & Omit<
		import('svelte/elements').HTMLAttributes<HTMLDivElement>,
		'children' | 'class'
	> = $props();

	const gapSize = $derived(gap === 'sm' ? '0.75rem' : gap === 'lg' ? '1.5rem' : '1rem');
</script>

<div
	{...attributes}
	class={`grid ${className}`}
	style:--grid-min-column-width={minColumnWidth}
	style:--grid-gap={gapSize}
>
	{@render children()}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--grid-min-column-width)), 1fr));
		gap: var(--grid-gap);
	}
</style>
