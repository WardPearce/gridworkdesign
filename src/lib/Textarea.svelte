<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	let { value = $bindable(''), class: className, ...rest }: HTMLTextareaAttributes = $props();
</script>

<textarea bind:value class={['textarea', className]} {...rest}></textarea>

<style>
	.textarea {
		display: block;
		width: 100%;
		min-height: 7rem;
		padding: 0.75rem;
		border: var(--border-width) solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		resize: vertical;
		box-shadow: var(--shadow-inset);
	}
	.textarea::placeholder {
		color: inherit;
		opacity: 1;
	}
	.textarea:focus-visible {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	.textarea:disabled {
		opacity: 0.55;
		cursor: not-allowed;
	}
	.textarea[aria-invalid='true'] {
		border-style: double;
		border-width: 4px;
	}
</style>
