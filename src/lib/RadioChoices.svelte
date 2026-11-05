<script lang="ts">
	import { RadioGroup } from 'bits-ui';

	type Choice = { value: string; label: string; disabled?: boolean };
	let {
		choices,
		value = $bindable(''),
		name,
		disabled = false
	}: { choices: Choice[]; value?: string; name?: string; disabled?: boolean } = $props();
</script>

<RadioGroup.Root bind:value {name} {disabled} class="radio-group">
	{#each choices as choice (choice.value)}
		<label class="radio-choice">
			<RadioGroup.Item value={choice.value} disabled={choice.disabled} class="radio-item">
				<span class="radio-dot" aria-hidden="true"></span>
			</RadioGroup.Item>
			<span>{choice.label}</span>
		</label>
	{/each}
</RadioGroup.Root>

<style>
	:global(.radio-group) {
		display: grid;
		gap: 0.25rem;
	}

	.radio-choice {
		display: flex;
		min-height: 2.75rem;
		align-items: center;
		gap: 0.75rem;
		color: var(--text);
		cursor: pointer;
	}

	:global(.radio-item) {
		display: grid;
		width: 1.5rem;
		height: 1.5rem;
		flex: 0 0 auto;
		place-items: center;
		border: 2px solid var(--text);
		border-radius: 50%;
		background: transparent;
		cursor: pointer;
	}

	:global(.radio-item:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}

	:global(.radio-item:disabled) {
		cursor: not-allowed;
		opacity: 0.55;
	}

	.radio-dot {
		width: 0.65rem;
		height: 0.65rem;
		border-radius: 50%;
		background: var(--text);
		transform: scale(0);
	}

	:global(.radio-item[data-state='checked']) .radio-dot {
		transform: scale(1);
	}
</style>
