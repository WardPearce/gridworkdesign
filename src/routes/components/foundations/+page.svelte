<script lang="ts">
	import ComponentDocs from '../../../lib/ComponentDocs.svelte';
	import { Field, Textarea, Alert, Badge, Spinner, Skeleton, EmptyState, Input } from '../../../lib/index.js';
	let value = $state('');
</script>

<ComponentDocs
	name="Form and feedback foundations"
	summary="Accessible field associations, multiline input, status, and loading states."
	props={[]}
	usage={'<Field label="Name" error="Enter a name">{#snippet children(attributes)}<Input {...attributes} />{/snippet}</Field>'}
>
	{#snippet example()}
		<div class="examples">
			<Field
				label="Name"
				description="Shown on your profile."
				error={value ? undefined : 'Enter a name'}
				required
			>
				{#snippet children(attributes)}<Input {...attributes} bind:value required />{/snippet}
			</Field>
			<Field label="Notes"
				>{#snippet children(attributes)}<Textarea
						{...attributes}
						placeholder="Add a note…"
					/>{/snippet}</Field
			>
			<Alert title="Changes saved">Your settings are up to date.</Alert>
			<Badge>Draft</Badge><Spinner /><Skeleton height="3rem" />
			<EmptyState title="No results" description="Try a different search." />
		</div>
	{/snippet}
</ComponentDocs>

<style>
	.examples {
		display: grid;
		gap: 1.5rem;
		width: 100%;
	}
</style>
