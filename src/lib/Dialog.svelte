<script lang="ts">
	import { Dialog as BitsDialog } from 'bits-ui';
	import { X } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	let {
		trigger = 'Open dialog',
		title,
		description,
		children
	}: {
		trigger?: string;
		title: string;
		description?: string;
		children?: Snippet;
	} = $props();
</script>

<BitsDialog.Root>
	<BitsDialog.Trigger class="ui-button">{trigger}</BitsDialog.Trigger>
	<BitsDialog.Portal>
		<BitsDialog.Overlay class="dialog-overlay ui-motion-enter" />
		<BitsDialog.Content class="dialog-content ui-motion-enter">
			<div class="dialog-heading">
				<BitsDialog.Title class="dialog-title">{title}</BitsDialog.Title>
				<BitsDialog.Close class="dialog-close" aria-label="Close dialog"
					><X size={18} aria-hidden="true" /></BitsDialog.Close
				>
			</div>
			{#if description}<BitsDialog.Description class="dialog-description"
					>{description}</BitsDialog.Description
				>{/if}
			<div class="dialog-body">{@render children?.()}</div>
		</BitsDialog.Content>
	</BitsDialog.Portal>
</BitsDialog.Root>

<style>
	:global(.ui-button),
	:global(.dialog-close) {
		min-height: 2.75rem;
		padding: 0.5rem 0.875rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
		box-shadow: 3px 3px var(--text);
	}
	:global(.ui-button:hover),
	:global(.dialog-close:hover) {
		border-style: dashed;
	}
	:global(.ui-button:focus-visible),
	:global(.dialog-close:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}
	:global(.dialog-overlay) {
		position: fixed;
		inset: 0;
		z-index: 50;
		background: color-mix(in srgb, var(--text) 55%, transparent);
	}
	:global(.dialog-content) {
		position: fixed;
		z-index: 51;
		top: 50%;
		left: 50%;
		width: min(32rem, calc(100vw - 2rem));
		max-height: calc(100dvh - 2rem);
		overflow: auto;
		transform: translate(-50%, -50%);
		padding: 1.25rem;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 4px 4px var(--text);
	}
	.dialog-heading {
		display: flex;
		justify-content: space-between;
		align-items: start;
		gap: 1rem;
	}
	:global(.dialog-title) {
		margin: 0;
		font-size: 1.125rem;
	}
	:global(.dialog-description) {
		display: block;
		margin-top: 0.5rem;
	}
	:global(.dialog-close) {
		display: inline-flex;
		min-width: 2.75rem;
		min-height: 2.75rem;
		align-items: center;
		justify-content: center;
		padding: 0;
		font-size: 1.25rem;
		line-height: 1;
		box-shadow: none;
	}
	.dialog-body {
		margin-top: 1rem;
	}
</style>
