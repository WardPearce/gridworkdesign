<script lang="ts">
	const library = [{ name: 'Accordion', slug: 'accordion' }, { name: 'Alert dialog', slug: 'alert-dialog' }, { name: 'Aspect ratio', slug: 'aspect-ratio' }, { name: 'Avatar', slug: 'avatar' }, { name: 'Button', slug: 'button' }, { name: 'Card', slug: 'card' }, { name: 'Calendar', slug: 'calendar' }, { name: 'Checkbox', slug: 'checkbox' }, { name: 'Collapsible', slug: 'collapsible' }, { name: 'Combobox field', slug: 'combobox-field' }, { name: 'Command menu', slug: 'command-menu' }, { name: 'Context menu', slug: 'context-menu' }, { name: 'Date field', slug: 'date-field' }, { name: 'Date picker', slug: 'date-picker' }, { name: 'Date range field', slug: 'date-range-field' }, { name: 'Date range picker', slug: 'date-range-picker' }, { name: 'Dialog', slug: 'dialog' }, { name: 'Dial', slug: 'dial' }, { name: 'Dropdown menu', slug: 'dropdown-menu' }, { name: 'Inline list', slug: 'inline-list' }, { name: 'Input', slug: 'input' }, { name: 'Label', slug: 'label' }, { name: 'Link preview', slug: 'link-preview' }, { name: 'Menu', slug: 'menu' }, { name: 'Menubar', slug: 'menubar' }, { name: 'Meter', slug: 'meter' }, { name: 'Navigation menu', slug: 'navigation-menu' }, { name: 'Pagination', slug: 'pagination' }, { name: 'PIN input', slug: 'pin-input' }, { name: 'Popover', slug: 'popover' }, { name: 'Progress', slug: 'progress' }, { name: 'Radio choices', slug: 'radio-choices' }, { name: 'Range calendar', slug: 'range-calendar' }, { name: 'Rating', slug: 'rating' }, { name: 'Rating group', slug: 'rating-group' }, { name: 'Scroll area', slug: 'scroll-area' }, { name: 'Sidebar', slug: 'sidebar' }, { name: 'Search', slug: 'search' }, { name: 'Select field', slug: 'select-field' }, { name: 'Separator', slug: 'separator' }, { name: 'Slider field', slug: 'slider-field' }, { name: 'Switch', slug: 'switch' }, { name: 'Tabs', slug: 'tabs' }, { name: 'Theme selector', slug: 'theme-selector' }, { name: 'Time field', slug: 'time-field' }, { name: 'Time range field', slug: 'time-range-field' }, { name: 'Toggle', slug: 'toggle' }, { name: 'Toggle group', slug: 'toggle-group' }, { name: 'Toolbar', slug: 'toolbar' }, { name: 'Tooltip', slug: 'tooltip' }];
</script>

<svelte:head>
	<title>Components · Svelte UI</title>
	<meta name="description" content="Component documentation and usage examples for Svelte UI." />
</svelte:head>

<main class="docs-home">
	<header>
		<p class="eyebrow">SVELTE / UI · DOCUMENTATION</p>
		<h1>Components</h1>
		<p class="intro">Accessible, themed Svelte components with practical examples and API guidance.</p>
		<p>Install from this project and import the components you need:</p>
		<pre><code>import &#123; Button, Checkbox &#125; from '$lib';</code></pre>
	</header>
	<section aria-labelledby="components-title">
		<h2 id="components-title">Components</h2>
		<div class="component-grid">
			{#each library as item (item.slug)}
				<a class="component-card" href={`/components/${item.slug}`}>
					<strong>{item.name}</strong><span class="arrow">Read documentation →</span>
				</a>
			{/each}
		</div>
	</section>
</main>

<style>
	.docs-home { max-width: 1100px; margin: 0 auto; padding: 3rem 1.5rem 6rem; color: var(--text); }
	header { max-width: 720px; margin-bottom: 3rem; }
	.eyebrow { font-size: .8rem; font-weight: 700; letter-spacing: .12em; }
	h1 { margin: .5rem 0; font-size: clamp(2.5rem, 7vw, 4.5rem); }
	.intro { font-size: 1.25rem; }
	pre { overflow-x: auto; padding: 1rem; border: 2px solid var(--text); background: var(--background-darker); color: var(--white); }
	section { margin-top: 3rem; }
	.component-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(220px,1fr)); gap: 1rem; }
	.component-card { display: grid; gap: .55rem; min-height: 120px; padding: 1rem; border: 2px solid var(--text); color: inherit; text-decoration: none; }
	.component-card:hover { border-style: dashed; }
	.component-card strong { font-size: 1.15rem; }
	.component-card span { line-height: 1.4; }
	.arrow { font-size: .85rem; font-weight: 700; }
</style>
