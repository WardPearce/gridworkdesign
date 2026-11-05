<script lang="ts">
	import { Separator as BitsSeparator } from 'bits-ui';
	let {
		orientation = 'horizontal',
		decorative = true
	}: { orientation?: 'horizontal' | 'vertical'; decorative?: boolean } = $props();
</script>

<BitsSeparator.Root {orientation} {decorative} class="separator" />

<style>
	:global(.separator[data-orientation='horizontal']) {
		display: block;
		width: 100%;
		height: 0;
		margin: 1rem 0;
		border: 0;
		border-top: 1px dotted var(--text);
	}
	:global(.separator[data-orientation='vertical']) {
		display: inline-block;
		width: 0;
		height: 1.5rem;
		margin: 0 0.75rem;
		border: 0;
		border-left: 1px dotted var(--text);
		vertical-align: middle;
	}
</style>
