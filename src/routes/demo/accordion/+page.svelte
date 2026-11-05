<script lang="ts">
	import Accordion from '../../../lib/Accordion.svelte';

	const faqItems = [
		{
			value: 'built-on-bits',
			title: 'What powers this accordion?',
			content:
				'Bits UI provides the accessible accordion behavior, including keyboard navigation, expanded state, and the relationships between each trigger and its content.'
		},
		{
			value: 'single-open',
			title: 'Can more than one section stay open?',
			content:
				'Yes. Set type="multiple" to allow several sections to remain open. The default type is single, which keeps the content focused.'
		},
		{
			value: 'themes',
			title: 'How does it adapt to themes?',
			content:
				'The component uses the shared --text token for its boundaries and content, and leaves the surface transparent so the page background shows through.'
		},
		{
			value: 'disabled',
			title: 'Can an item be disabled?',
			content: 'Set disabled: true on an item to keep it visible while preventing it from opening.'
		},
		{
			value: 'disabled-example',
			title: 'Disabled example',
			content: 'This item is disabled to demonstrate its inactive state.',
			disabled: true
		}
	];
</script>

<svelte:head>
	<title>Accordion · Component demo</title>
	<meta
		name="description"
		content="A reusable, themeable accordion built on Bits UI."
	/>
</svelte:head>

<main>
	<p class="eyebrow">COMPONENT / 01</p>
	<h1>Accordion</h1>
	<p class="intro">Expandable sections with Bits UI behavior and the shared design system styles.</p>

	<section aria-labelledby="example-heading">
		<h2 id="example-heading">Frequently asked</h2>
		<Accordion items={faqItems} />
	</section>

	<section aria-labelledby="multiple-heading">
		<h2 id="multiple-heading">Multiple sections</h2>
		<p class="section-note">Open more than one section at a time.</p>
		<Accordion items={faqItems.slice(0, 3)} type="multiple" />
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		background: var(--background, #b6b4b4);
		color: var(--text, #383838);
		font-family: 'FragmentMono', 'SFMono-Regular', Consolas, monospace;
		font-size: 0.875rem;
		line-height: 1.5rem;
		letter-spacing: 0.015em;
	}

	main {
		width: min(100% - 2rem, 48rem);
		margin: 4rem auto;
	}

	.eyebrow {
		margin: 0 0 0.5rem;
		font-size: 0.75rem;
		letter-spacing: 0.12em;
	}

	h1 {
		margin: 0;
		font-size: clamp(2rem, 7vw, 3.5rem);
		line-height: 1.1;
	}

	.intro {
		max-width: 38rem;
		margin: 1rem 0 3rem;
	}

	section + section {
		margin-top: 3rem;
	}

	h2 {
		margin: 0 0 0.75rem;
		font-size: 1rem;
	}

	.section-note {
		margin: -0.4rem 0 0.75rem;
	}
</style>
