<script lang="ts">
	import { Progress as BitsProgress } from 'bits-ui';

	let {
		value,
		max = 100,
		label = 'Progress',
		...rest
	}: {
		value: number;
		max?: number;
		label?: string;
	} = $props();
</script>

<div class="progress-wrap">
	<p class="progress-label">{label}<span>{Math.round((value / max) * 100)}%</span></p>
	<BitsProgress.Root {value} {max} aria-label={label} class="progress" {...rest}>
		<span class="progress-range" style={`width: ${Math.min(100, Math.max(0, (value / max) * 100))}%`}></span>
	</BitsProgress.Root>
</div>

<style>
	:global(.progress-wrap) { width: 100%; }
	:global(.progress-label) { display: flex; justify-content: space-between; gap: 1rem; margin: 0 0 0.35rem; }
	:global(.progress) { display: block; width: 100%; height: 0.75rem; overflow: hidden; border: 2px solid var(--text); background: var(--light); }
	:global(.progress-range) { display: block; height: 100%; background: var(--text); transition: width 120ms linear; }
	@media (prefers-reduced-motion: reduce) { :global(.progress-range) { transition: none; } }
</style>
