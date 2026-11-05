<script lang="ts">
	import { Slider } from 'bits-ui';

	let {
		label,
		value = $bindable(25),
		min = 0,
		max = 100,
		step = 1,
		disabled = false
	}: {
		label: string;
		value?: number;
		min?: number;
		max?: number;
		step?: number;
		disabled?: boolean;
	} = $props();
</script>

<div class="slider-field">
	<div class="slider-heading">
		<span>{label}</span>
		<output>{value}</output>
	</div>
	<Slider.Root
		type="single"
		bind:value
		{min}
		{max}
		{step}
		{disabled}
		class="slider-root"
		aria-label={label}
	>
		<Slider.Range class="slider-range" />
		<Slider.Thumb index={0} class="slider-thumb" />
	</Slider.Root>
</div>

<style>
	.slider-field {
		display: grid;
		gap: 0.75rem;
		color: var(--text);
	}

	.slider-heading {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	:global(.slider-root) {
		position: relative;
		display: flex;
		min-height: 2.75rem;
		align-items: center;
		touch-action: none;
		user-select: none;
	}

	:global(.slider-root)::before {
		position: absolute;
		right: 0;
		left: 0;
		height: 0.5rem;
		background: var(--light);
		content: '';
	}

	:global(.slider-range) {
		position: absolute;
		height: 0.5rem;
		background: var(--text);
	}

	:global(.slider-thumb) {
		position: relative;
		width: 1.25rem;
		height: 1.75rem;
		border: 2px solid var(--text);
		background: var(--background);
		cursor: grab;
	}

	:global(.slider-thumb:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}

	:global(.slider-thumb:focus:not(:focus-visible)),
	:global(.slider-thumb:active) {
		outline: none;
		border-style: solid;
	}

	:global(.slider-thumb:hover) {
		border-style: dashed;
	}

	:global(.slider-root[data-disabled]) {
		cursor: not-allowed;
		opacity: 0.55;
	}
</style>
