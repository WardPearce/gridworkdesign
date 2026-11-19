<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		value = $bindable<string | number | undefined>(undefined),
		prefix,
		suffix,
		class: className = '',
		...attributes
	}: {
		value?: string | number;
		prefix?: Snippet;
		suffix?: Snippet;
		class?: string;
	} & Omit<import('svelte/elements').HTMLInputAttributes, 'class' | 'prefix' | 'value'> = $props();
</script>

<span class="input-wrap">
	{#if prefix}<span class="input-icon prefix">{@render prefix()}</span>{/if}
	<input bind:value class="input {className}" {...attributes} />
	{#if suffix}<span class="input-icon suffix">{@render suffix()}</span>{/if}
</span>

<style>
	.input-wrap {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		gap: 0.625rem;
		width: 100%;
		min-height: var(--control-height);
		padding: 0 0.75rem;
		border: var(--border-width) solid var(--text);
		background: transparent;
		color: var(--text);
		box-shadow: var(--shadow-inset);
	}

	.input-wrap:focus-within {
		box-shadow: var(--shadow-inset);
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}

	.input {
		box-sizing: border-box;
		flex: 1;
		min-width: 0;
		min-height: calc(var(--control-height) - 2 * var(--border-width));
		padding: 0.5rem 0;
		border: 0;
		outline: 0;
		background: transparent;
		color: inherit;
		font: inherit;
		font-size: max(1rem, 16px);
	}

	.input::placeholder {
		color: var(--foreground-muted);
		opacity: 1;
	}

	.input-icon {
		display: inline-flex;
		flex: 0 0 auto;
		align-items: center;
		justify-content: center;
	}
</style>
