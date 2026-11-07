<script lang="ts">
	import { AlertDialog as BitsAlert } from 'bits-ui';
	let {
		trigger = 'Delete item',
		title = 'Confirm action',
		description,
		confirmLabel = 'Continue',
		onConfirm
	}: {
		trigger?: string;
		title?: string;
		description: string;
		confirmLabel?: string;
		onConfirm?: () => void;
	} = $props();
</script>

<BitsAlert.Root>
	<BitsAlert.Trigger class="alert-trigger">{trigger}</BitsAlert.Trigger>
	<BitsAlert.Portal>
		<BitsAlert.Overlay class="alert-overlay ui-motion-enter" />
		<BitsAlert.Content class="alert-content ui-motion-enter">
			<BitsAlert.Title class="alert-title">{title}</BitsAlert.Title>
			<BitsAlert.Description class="alert-description">{description}</BitsAlert.Description>
			<div class="alert-actions">
				<BitsAlert.Cancel class="alert-button">Cancel</BitsAlert.Cancel>
				<BitsAlert.Action class="alert-button alert-confirm" onclick={onConfirm}
					>{confirmLabel}</BitsAlert.Action
				>
			</div>
		</BitsAlert.Content>
	</BitsAlert.Portal>
</BitsAlert.Root>

<style>
	:global(.alert-trigger),
	:global(.alert-button) {
		min-height: 2.75rem;
		padding: 0.5rem 0.875rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
	}
	:global(.alert-trigger:hover:not(:disabled)),
	:global(.alert-button:hover:not(:disabled)) {
		border-style: dashed;
	}
	:global(.alert-trigger:focus-visible),
	:global(.alert-button:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}
	:global(.alert-overlay) {
		position: fixed;
		inset: 0;
		z-index: 50;
		background: color-mix(in srgb, var(--text) 55%, transparent);
	}
	:global(.alert-content) {
		position: fixed;
		z-index: 51;
		top: 50%;
		left: 50%;
		width: min(28rem, calc(100vw - 2rem));
		height: auto;
		min-height: 0;
		max-height: calc(100dvh - 2rem);
		overflow: auto;
		transform: translate(-50%, -50%);
		padding: 1.25rem;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 4px 4px var(--text);
	}
	:global(.alert-title) {
		margin: 0;
		font-size: 1.125rem;
	}
	:global(.alert-description) {
		display: block;
		margin-top: 0.5rem;
	}
	.alert-actions {
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1.25rem;
	}
	:global(.alert-confirm) {
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.alert-confirm:hover:not(:disabled)) {
		border-color: var(--background);
	}
</style>
