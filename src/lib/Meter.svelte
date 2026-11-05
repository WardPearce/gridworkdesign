<script lang="ts">
	import { Meter as BitsMeter } from 'bits-ui';
	let { value, max = 100, label = 'Meter' }: { value: number; max?: number; label?: string } = $props();
</script>

<div class="meter-wrap">
	<p class="meter-label">{label}<span>{value} / {max}</span></p>
	<BitsMeter.Root {value} {max} aria-label={label} class="meter"><span class="meter-fill" style={`width: ${Math.min(100, Math.max(0, (value / max) * 100))}%`}></span></BitsMeter.Root>
</div>

<style>
	:global(.meter-wrap) { width: 100%; }
	:global(.meter-label) { display: flex; justify-content: space-between; gap: 1rem; margin: 0 0 0.35rem; }
	:global(.meter) { display: block; width: 100%; height: 0.75rem; overflow: hidden; border: 2px solid var(--text); background: var(--light); }
	:global(.meter-fill) { display: block; height: 100%; background: var(--text); }
</style>
