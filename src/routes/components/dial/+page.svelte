<script lang="ts">
	import Dial from '../../../lib/Dial.svelte';
	import ComponentDocs, { type Prop } from '../../../lib/ComponentDocs.svelte';

	let volume = $state(58);
	let tuning = $state(12);
	let level = $state(6);
	const summary = 'Circular rotary control for adjusting a bounded numeric value.';
	const props: Prop[] = [
		{ name: 'label', type: 'string', required: true, defaultValue: '—', description: 'Visible and accessible name for the dial.' },
		{ name: 'value', type: 'number', required: false, defaultValue: '50', description: 'Current value. Bind this prop to receive changes.' },
		{ name: 'min', type: 'number', required: false, defaultValue: '0', description: 'Minimum value.' },
		{ name: 'max', type: 'number', required: false, defaultValue: '100', description: 'Maximum value.' },
		{ name: 'step', type: 'number', required: false, defaultValue: '1', description: 'Amount changed by each keyboard step or endless rotation notch.' },
		{ name: 'mode', type: "'endless' | 'notch' | 'fill'", required: false, defaultValue: "'notch'", description: 'Endless rotation, one selected notch, or cumulative notches through the selected value.' },
		{ name: 'showValue', type: 'boolean', required: false, defaultValue: 'false', description: 'Shows the current numeric value in the center of the dial.' },
		{ name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Disables pointer and keyboard interaction.' }
	];
</script>

<ComponentDocs name="Dial" {summary} {props} usage={'<Dial label="Volume" bind:value min={0} max={100} />'}>
	{#snippet example()}
		<div class="dial-examples">
			<Dial label="Endless" mode="endless" bind:value={tuning} />
			<Dial label="Selected notch" bind:value={volume} showValue />
			<Dial label="Filled notches" mode="fill" bind:value={level} max={24} />
		</div>
	{/snippet}
</ComponentDocs>

<style>
	.dial-examples { display: flex; flex-wrap: wrap; gap: 2rem; }
</style>
