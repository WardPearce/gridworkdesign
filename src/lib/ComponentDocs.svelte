<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import Sidebar from './Sidebar.svelte';
	export type Prop = {
		name: string;
		type: string;
		required?: boolean;
		defaultValue?: string;
		description: string;
	};
	const slugs = [
		'foundations',
		'accordion',
		'alert-dialog',
		'aspect-ratio',
		'avatar',
		'button',
		'card',
		'calendar',
		'checkbox',
		'collapsible',
		'combobox-field',
		'command-menu',
		'context-menu',
		'date-field',
		'date-picker',
		'date-range-field',
		'date-range-picker',
		'dialog',
		'dial',
		'dial-board',
		'dropdown-menu',
		'inline-list',
		'input',
		'label',
		'link-preview',
		'menu',
		'menubar',
		'meter',
		'navigation-menu',
		'nav',
		'pagination',
		'pin-input',
		'popover',
		'progress',
		'radio-choices',
		'range-calendar',
		'rating',
		'rating-group',
		'scroll-area',
		'search',
		'select-field',
		'separator',
		'sidebar',
		'slider-field',
		'switch',
		'tabs',
		'theme-selector',
		'time-field',
		'time-range-field',
		'toggle',
		'toggle-group',
		'toolbar',
		'tooltip'
	];
	const items = slugs.map((slug) => ({
		label: slug
			.split('-')
			.map((part) => (part === 'pin' ? 'PIN' : part[0].toUpperCase() + part.slice(1)))
			.join(' '),
		href: `/components/${slug}`
	}));
	let {
		name,
		summary,
		props = [],
		example,
		usage
	}: { name: string; summary: string; props: Prop[]; example: Snippet; usage: string } = $props();
</script>

<svelte:head
	><title>{name} · Svelte UI</title><meta name="description" content={summary} /></svelte:head
>
<div class="docs-layout">
	<Sidebar title="Components" {items} currentPath={page.url.pathname} />
	<main class="docs">
		<a href="/">← All components</a>
		<p class="eyebrow">COMPONENT GUIDE</p>
		<h1>{name}</h1>
		<p class="intro">{summary}</p>
		<section>
			<h2>Example</h2>
			<div class="preview">{@render example()}</div>
			<pre><code>{usage}</code></pre>
		</section>
		<section>
			<h2>Props</h2>
			{#if props.length}<div class="table-wrap">
					<table>
						<thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead
						><tbody
							>{#each props as prop (prop.name)}<tr
									><th
										>{prop.name}{#if prop.required}<span class="required"> required</span>{/if}</th
									><td><code>{prop.type}</code></td><td>{prop.defaultValue ?? '—'}</td><td
										>{prop.description}</td
									></tr
								>{/each}</tbody
						>
					</table>
				</div>{:else}<p>This component has no additional configuration props.</p>{/if}
		</section>
		<section>
			<h2>Configuration</h2>
			<p>
				Pass props to configure labels, options, and behavior. Bind state when your screen needs to
				read or update a value; omit the binding for a self-managed control.
			</p>
			<pre><code>{usage}</code></pre>
		</section>
		<section>
			<h2>Accessibility and theming</h2>
			<p>
				Give controls descriptive labels and preserve visible keyboard focus. The component follows
				the active theme tokens from <code>theme.css</code>.
			</p>
		</section>
	</main>
</div>

<style>
	.docs-layout {
		display: flex;
		align-items: flex-start;
		min-height: calc(100vh - 3.5rem);
	}
	.docs {
		flex: 1;
		min-width: 0;
	}
	@media (max-width: 760px) {
		.docs-layout {
			display: block;
		}
		.docs {
			padding-top: 1.25rem;
		}
	}
	.docs {
		max-width: 900px;
		margin: auto;
		padding: 2rem 1.5rem 6rem;
		color: var(--text);
	}
	.docs a {
		color: inherit;
	}
	.eyebrow {
		margin-top: 2.5rem;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.12em;
	}
	h1 {
		font-size: clamp(2.5rem, 7vw, 4rem);
		margin: 0.4rem 0;
	}
	.intro {
		font-size: 1.25rem;
	}
	section {
		margin-top: 2.5rem;
	}
	.preview {
		padding: 1.5rem;
		border: 2px dashed var(--text);
	}
	pre {
		overflow: auto;
		padding: 1rem;
		background: var(--background-darker);
		color: var(--white);
		border: 2px solid var(--text);
	}
	table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}
	th,
	td {
		padding: 0.75rem;
		border: 1px solid var(--text);
		vertical-align: top;
	}
	.required {
		font-size: 0.7rem;
	}
	.table-wrap {
		overflow: auto;
	}
</style>
