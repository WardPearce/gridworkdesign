<script lang="ts">
	import { Checkbox as BitsCheckbox } from 'bits-ui';
	import { Check } from '@lucide/svelte';

	let {
		label,
		checked = $bindable(false),
		disabled = false,
		name,
		value = 'on'
	}: {
		label: string;
		checked?: boolean;
		disabled?: boolean;
		name?: string;
		value?: string;
	} = $props();
</script>

<label class="check-control">
	<BitsCheckbox.Root bind:checked {disabled} {name} {value} class="check-box">
		<span class="check-mark" aria-hidden="true"><Check size={16} strokeWidth={2.5} /></span>
	</BitsCheckbox.Root>
	<span>{label}</span>
</label>

<style>
	.check-control {
		display: inline-flex;
		min-height: 2.75rem;
		align-items: center;
		gap: 0.75rem;
		color: var(--text);
		cursor: pointer;
	}

	:global(.check-box) {
		display: inline-grid;
		width: 1.5rem;
		height: 1.5rem;
		flex: 0 0 auto;
		place-items: center;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
	}

	:global(.check-box:hover:not(:disabled)) {
		border-style: dashed;
	}

	:global(.check-box[data-state='checked']) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow:
			inset 0 2px 2px color-mix(in srgb, var(--white) 14%, transparent),
			inset 0 -3px 4px color-mix(in srgb, var(--text) 42%, transparent),
			0 1px 2px color-mix(in srgb, var(--text) 35%, transparent);
	}

	:global(.check-box:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}

	:global(.check-box:disabled) {
		cursor: not-allowed;
		opacity: 0.55;
	}

	.check-mark {
		visibility: hidden;
		font-size: 0.9rem;
		font-weight: 700;
		line-height: 1;
	}

	:global(.check-box[data-state='checked']) .check-mark {
		visibility: visible;
	}
</style>
