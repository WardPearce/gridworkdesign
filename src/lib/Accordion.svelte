<script lang="ts">
	import { Accordion as BitsAccordion } from 'bits-ui';

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
					<span class="accordion-icon" aria-hidden="true"></span>
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

	:global(.accordion-trigger:hover) {
		outline: 1px dashed var(--text);
		outline-offset: -5px;
	}

	:global(.accordion-trigger:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: -5px;
	}

	:global(.accordion-trigger:disabled) {
		cursor: not-allowed;
		opacity: 0.55;
	}

	:global(.accordion-icon::before) {
		content: '+';
		display: block;
		font-size: 1.25rem;
		line-height: 1;
	}

	:global(.accordion-trigger[aria-expanded='true'] .accordion-icon::before) {
		content: '−';
	}

	:global(.accordion-content) {
		padding: 0 1rem 1rem;
		color: var(--text);
	}

	:global(.accordion-content p) {
		margin: 0;
	}
</style>
