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
	}

	:global(.pin-input:not([data-disabled]) .pin-cell:hover) {
		border-style: dotted;
	}

	:global(.pin-cell[data-active]) {
		outline: 2px dashed var(--text);
		outline-offset: 2px;
	}

	:global(.pin-input[data-disabled]) {
		cursor: not-allowed;
		opacity: 0.55;
	}
</style>
