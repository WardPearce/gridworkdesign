<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		prefix,
		suffix,
		class: className = '',
		...attributes
	}: {
		prefix?: Snippet;
		suffix?: Snippet;
		class?: string;
	} & Omit<import('svelte/elements').HTMLInputAttributes, 'class'> = $props();
</script>

<span class="input-wrap">
	{#if prefix}<span class="input-icon prefix">{@render prefix()}</span>{/if}
	<input class="input {className}" {...attributes} />
	{#if suffix}<span class="input-icon suffix">{@render suffix()}</span>{/if}
</span>

<style>
	.input-wrap {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		gap: 0.625rem;
		width: 100%;
		min-height: 2.75rem;
		padding: 0 0.75rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
	}

	.input-wrap:focus-within {
		border-style: dashed;
	}

	.input {
		box-sizing: border-box;
		flex: 1;
		min-width: 0;
		min-height: calc(2.75rem - 4px);
		padding: 0.5rem 0;
		border: 0;
		outline: 0;
		background: transparent;
		color: inherit;
		font: inherit;
	}

	.input::placeholder {
		color: var(--text);
		opacity: 0.65;
	}

	.input-icon {
		display: inline-flex;
		flex: 0 0 auto;
		align-items: center;
		justify-content: center;
	}
</style>
