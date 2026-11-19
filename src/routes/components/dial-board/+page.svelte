<script lang="ts">
	import DialBoard, { type DialBoardItem } from '../../../lib/DialBoard.svelte';
	import ComponentDocs, { type Prop } from '../../../lib/ComponentDocs.svelte';

	let dials = $state<DialBoardItem[]>([
		{ id: 'master', label: 'Master', value: 72, mode: 'fill', size: 'lg', showValue: true },
		{ id: 'bass', label: 'Bass', value: 38, mode: 'notch', size: 'md', showValue: true },
		{ id: 'treble', label: 'Treble', value: 64, mode: 'notch', size: 'sm', showValue: true },
		{ id: 'pan', label: 'Pan', value: 12, min: -50, max: 50, mode: 'endless', size: 'md' },
		{ id: 'drive', label: 'Drive', value: 5, min: 0, max: 10, mode: 'fill', size: 'xs' }
	]);
	const usage = '<DialBoard bind:dials />';
	const summary = 'A modular control deck with dials you can rearrange by dragging their handles or using the keyboard.';
	const props: Prop[] = [
		{ name: 'dials', type: 'DialBoardItem[]', required: true, defaultValue: '—', description: 'Dial definitions in deck order. Bind this array to receive value and order changes.' },
		{ name: 'class', type: 'string', required: false, defaultValue: "''", description: 'Additional class applied to the board grid.' }
	];
</script>

<ComponentDocs name="Dial Board" {summary} {props} {usage}>
	{#snippet example()}
		<DialBoard bind:dials />
	{/snippet}
</ComponentDocs>
