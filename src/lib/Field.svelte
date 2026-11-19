<script lang="ts">
	import type { Snippet } from 'svelte';
	const generatedId = $props.id();
	let {
		label,
		description,
		error,
		required = false,
		id = generatedId,
		children
	}: {
		label: string;
		description?: string;
		error?: string;
		required?: boolean;
		id?: string;
		children: Snippet<
			[{ id: string; 'aria-describedby': string | undefined; 'aria-invalid': true | undefined }]
		>;
	} = $props();
	const describedBy = $derived(
		[description ? `${id}-description` : '', error ? `${id}-error` : '']
			.filter(Boolean)
			.join(' ') || undefined
	);
</script>

<div class="field">
	<label for={id}
		>{label}{#if required}<span aria-hidden="true"> *</span>{/if}</label
	>
	{#if description}<p id={`${id}-description`}>{description}</p>{/if}
	{@render children({
		id,
		'aria-describedby': describedBy,
		'aria-invalid': error ? true : undefined
	})}
	{#if error}<p class="error" id={`${id}-error`} role="alert">{error}</p>{/if}
</div>

<style>
	.field {
		display: grid;
		gap: 0.5rem;
		color: var(--text);
	}
	label {
		font-weight: 700;
	}
	p {
		margin: 0;
		font-size: 0.875rem;
	}
	.error {
		border-left: 3px solid currentColor;
		padding-left: 0.5rem;
		font-weight: 700;
	}
</style>
