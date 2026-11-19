<script lang="ts">
	import { PinInput as BitsPinInput } from 'bits-ui';

	let {
		label,
		value = $bindable(''),
		length = 4,
		disabled = false,
		onComplete
	}: {
		label: string;
		value?: string;
		length?: number;
		disabled?: boolean;
		onComplete?: (value: string) => void;
	} = $props();
</script>

<div class="pin-field">
	<span class="pin-label">{label}</span>
	<BitsPinInput.Root
		bind:value
		maxlength={length}
		{disabled}
		{onComplete}
		class="pin-input"
		aria-label={label}
	>
		{#snippet children({ cells })}
			{#each cells as cell, index (index)}
				<BitsPinInput.Cell {cell} class="pin-cell">{cell.char}</BitsPinInput.Cell>
			{/each}
		{/snippet}
	</BitsPinInput.Root>
</div>

<style>
	.pin-field {
		display: grid;
		gap: 0.5rem;
		color: var(--text);
	}

	.pin-label {
		font-weight: 700;
	}

	:global(.pin-input) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	:global(.pin-cell) {
		display: grid;
		width: 2.75rem;
		height: 2.75rem;
		place-items: center;
		border: 2px solid var(--text);
		background: transparent;
		font: inherit;
		font-size: 1.25rem;
		box-shadow: var(--shadow-inset);
	}

	:global(
		.pin-input:not([data-disabled])
			.pin-cell:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			)
	) {
		box-shadow: var(--shadow-hover);
	}

	:global(.pin-cell[data-active]) {
		box-shadow: var(--shadow-inset);
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}

	:global(.pin-input[data-disabled]) {
		cursor: not-allowed;
		opacity: 0.55;
	}
</style>
