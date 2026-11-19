<script lang="ts">
	import { Switch as BitsSwitch } from 'bits-ui';

	let {
		label,
		checked = $bindable(false),
		disabled = false,
		name
	}: { label: string; checked?: boolean; disabled?: boolean; name?: string } = $props();
</script>

<label class="switch-control">
	<span>{label}</span>
	<BitsSwitch.Root bind:checked {disabled} {name} class="switch-root" aria-label={label}>
		<BitsSwitch.Thumb class="switch-thumb" />
	</BitsSwitch.Root>
</label>

<style>
	.switch-control {
		display: flex;
		min-height: 2.75rem;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		color: var(--text);
	}

	:global(.switch-root) {
		position: relative;
		width: 3rem;
		height: 1.75rem;
		flex: 0 0 auto;
		border: 2px solid var(--text);
		background: var(--light);
		cursor: pointer;
		box-shadow: var(--shadow-inset);
	}

	:global(.switch-root[data-state='checked']) {
		background: var(--text);
		box-shadow: var(--shadow-inset);
	}

	:global(.switch-root:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}

	:global(.switch-root:disabled) {
		cursor: not-allowed;
		opacity: 0.55;
	}

	:global(.switch-thumb) {
		position: absolute;
		top: 0.2rem;
		left: 0.2rem;
		width: 1rem;
		height: 1rem;
		background: var(--white);
		box-shadow: var(--shadow-raised);
	}

	:global(.switch-root[data-state='checked'] .switch-thumb) {
		left: auto;
		right: 0.2rem;
		background: var(--background);
	}

	:global(.switch-root:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
