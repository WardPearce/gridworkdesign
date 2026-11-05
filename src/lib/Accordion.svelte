<script lang="ts">
	import { Accordion as BitsAccordion } from 'bits-ui';
	import { Minus, Plus } from '@lucide/svelte';

	type AccordionItem = {
		value: string;
		title: string;
		content: string;
		disabled?: boolean;
	};

	let {
		items,
		type = 'single'
	}: {
		items: AccordionItem[];
		type?: 'single' | 'multiple';
	} = $props();
</script>

<BitsAccordion.Root {type} class="accordion">
	{#each items as item (item.value)}
		<BitsAccordion.Item value={item.value} disabled={item.disabled} class="accordion-item">
			<BitsAccordion.Header class="accordion-heading">
				<BitsAccordion.Trigger class="accordion-trigger">
					<span>{item.title}</span>
					<span class="accordion-icon" aria-hidden="true">
						<Plus size={18} class="accordion-plus" />
						<Minus size={18} class="accordion-minus" />
					</span>
				</BitsAccordion.Trigger>
			</BitsAccordion.Header>
			<BitsAccordion.Content class="accordion-content">
				<p>{item.content}</p>
			</BitsAccordion.Content>
		</BitsAccordion.Item>
	{/each}
</BitsAccordion.Root>

<style>
	:global(.accordion) {
		width: 100%;
	}

	:global(.accordion-item) {
		border: 2px solid var(--text);
		border-bottom: 0;
	}

	:global(.accordion-item:last-child) {
		border-bottom: 2px solid var(--text);
	}

	:global(.accordion-heading) {
		margin: 0;
	}

	:global(.accordion-trigger) {
		display: flex;
		width: 100%;
		min-height: 3.25rem;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.75rem 1rem;
		border: 0;
		background: transparent;
		color: var(--text);
		font: inherit;
		font-weight: 700;
		text-align: left;
		cursor: pointer;
	}

	:global(.accordion-item:has(.accordion-trigger:hover)) {
		border-style: dashed;
	}

	:global(.accordion-trigger:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: -5px;
	}

	:global(.accordion-trigger:disabled) {
		cursor: not-allowed;
		opacity: 0.55;
	}

	:global(.accordion-icon) {
		display: inline-flex;
		flex: 0 0 auto;
	}
	:global(.accordion-minus) {
		display: none;
	}
	:global(.accordion-trigger[aria-expanded='true'] .accordion-plus) {
		display: none;
	}
	:global(.accordion-trigger[aria-expanded='true'] .accordion-minus) {
		display: block;
	}

	:global(.accordion-content) {
		padding: 0 1rem 1rem;
		color: var(--text);
	}

	:global(.accordion-content p) {
		margin: 0;
	}
</style>
