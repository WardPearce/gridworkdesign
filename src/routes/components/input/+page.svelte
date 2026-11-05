<script lang="ts">
	import { Search, AtSign } from '@lucide/svelte';
	import Input from '../../../lib/Input.svelte';
	import ComponentDocs, { type Prop } from '../../../lib/ComponentDocs.svelte';

	let query = $state('');
	const summary = 'Text input with optional prefix and suffix icon content.';
	const props: Prop[] = [
		{ name: 'prefix', type: 'Snippet', required: false, defaultValue: '—', description: 'Content displayed before the input, such as an icon.' },
		{ name: 'suffix', type: 'Snippet', required: false, defaultValue: '—', description: 'Content displayed after the input, such as an icon.' },
		{ name: '...attributes', type: 'HTMLInputAttributes', required: false, defaultValue: '—', description: 'Native input attributes including type, placeholder, and name.' }
	];
</script>

<ComponentDocs
	name="Input"
	{summary}
	{props}
	usage={'<Input bind:value={query} placeholder="Search">{#snippet prefix()}<Search size={16} />{/snippet}</Input>'}
>
	{#snippet example()}
		<Input bind:value={query} placeholder="Search">
			{#snippet prefix()}<Search size={16} />{/snippet}
		</Input>
		<Input type="email" placeholder="you@example.com">
			{#snippet suffix()}<AtSign size={16} />{/snippet}
		</Input>
	{/snippet}
</ComponentDocs>
