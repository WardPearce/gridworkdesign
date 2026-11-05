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
	}
	:global(.toolbar-button[aria-pressed='true']) {
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.toolbar-button:hover) {
		border-style: dashed;
	}
	:global(.toolbar-button:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 2px;
	}
	:global(.toolbar-button:disabled) {
		opacity: 0.55;
		cursor: not-allowed;
	}
</style>
