<script lang="ts">
	import { Toolbar as BitsToolbar } from 'bits-ui';
	let {
		actions
	}: { actions: { label: string; disabled?: boolean; pressed?: boolean; onClick?: () => void }[] } =
		$props();
</script>

<BitsToolbar.Root class="toolbar" aria-label="Formatting tools">
	<BitsToolbar.Group type="multiple">
		{#each actions as action (action.label)}
			<BitsToolbar.Button
				class="toolbar-button"
				disabled={action.disabled}
				aria-pressed={action.pressed}
				onclick={action.onClick}>{action.label}</BitsToolbar.Button
			>
		{/each}
	</BitsToolbar.Group>
</BitsToolbar.Root>

<style>
	:global(.toolbar) {
		display: inline-flex;
		max-width: 100%;
		border: 2px solid var(--text);
		padding: 0.25rem;
		box-shadow: var(--shadow-raised);
	}
	:global(.toolbar [role='group']) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}
	:global(.toolbar-button) {
		min-width: 2.75rem;
		min-height: 2.75rem;
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
		box-shadow: var(--shadow-raised);
	}
	:global(.toolbar-button[aria-pressed='true']) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow: var(--shadow-inset);
	}
	:global(
		.toolbar-button:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			)
	) {
		box-shadow: var(--shadow-hover);
	}
	:global(.toolbar-button:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.toolbar-button:disabled) {
		opacity: 0.55;
		cursor: not-allowed;
	}

	:global(.toolbar-button:active:not(:disabled):not([data-disabled])) {
		box-shadow: var(--shadow-inset);
	}
</style>
