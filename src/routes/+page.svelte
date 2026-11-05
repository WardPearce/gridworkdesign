<script lang="ts">
	import Accordion from '../lib/Accordion.svelte';
	import AlertDialog from '../lib/AlertDialog.svelte';
	import AspectRatio from '../lib/AspectRatio.svelte';
	import Avatar from '../lib/Avatar.svelte';
	import Button from '../lib/Button.svelte';
	import Calendar from '../lib/Calendar.svelte';
	import Checkbox from '../lib/Checkbox.svelte';
	import Collapsible from '../lib/Collapsible.svelte';
	import ComboboxField from '../lib/ComboboxField.svelte';
	import CommandMenu from '../lib/CommandMenu.svelte';
	import ContextMenu from '../lib/ContextMenu.svelte';
	import DateField from '../lib/DateField.svelte';
	import DatePicker from '../lib/DatePicker.svelte';
	import DateRangeField from '../lib/DateRangeField.svelte';
	import DateRangePicker from '../lib/DateRangePicker.svelte';
	import Dialog from '../lib/Dialog.svelte';
	import DropdownMenu from '../lib/DropdownMenu.svelte';
	import Label from '../lib/Label.svelte';
	import LinkPreview from '../lib/LinkPreview.svelte';
	import Menu from '../lib/Menu.svelte';
	import Menubar from '../lib/Menubar.svelte';
	import Meter from '../lib/Meter.svelte';
	import NavigationMenu from '../lib/NavigationMenu.svelte';
	import Pagination from '../lib/Pagination.svelte';
	import PinInput from '../lib/PinInput.svelte';
	import Popover from '../lib/Popover.svelte';
	import Progress from '../lib/Progress.svelte';
	import RatingGroup from '../lib/RatingGroup.svelte';
	import RangeCalendar from '../lib/RangeCalendar.svelte';
	import Rating from '../lib/Rating.svelte';
	import RadioChoices from '../lib/RadioChoices.svelte';
	import SelectField from '../lib/SelectField.svelte';
	import Separator from '../lib/Separator.svelte';
	import ScrollArea from '../lib/ScrollArea.svelte';
	import SliderField from '../lib/SliderField.svelte';
	import Switch from '../lib/Switch.svelte';
	import Tabs from '../lib/Tabs.svelte';
	import Toggle from '../lib/Toggle.svelte';
	import ToggleGroup from '../lib/ToggleGroup.svelte';
	import Toolbar from '../lib/Toolbar.svelte';
	import TimeField from '../lib/TimeField.svelte';
	import TimeRangeField from '../lib/TimeRangeField.svelte';
	import Tooltip from '../lib/Tooltip.svelte';

	let accepted = $state(true);
	let notifications = $state(false);
	let selectedRadio = $state('plain');
	let selectedToggle = $state('left');
	let pin = $state('');

	const items = [
		{
			value: 'accessible',
			title: 'Accessible interactions',
			content:
				'Built on Bits UI to provide keyboard navigation, expanded state, and accessible trigger and panel relationships.'
		},
		{
			value: 'themes',
			title: 'Shared theme tokens',
			content:
				'The accordion uses the shared text token for borders and copy. Its transparent surface adapts to the current page background.'
		},
		{
			value: 'multiple',
			title: 'Single or multiple open items',
			content:
				'Choose single mode to keep one section open, or multiple mode when readers need to compare several sections.'
		},
		{
			value: 'disabled',
			title: 'Disabled item example',
			content: 'Disabled items stay visible and cannot be opened.',
			disabled: true
		}
	];

	const choices = [
		{ value: 'plain', label: 'Plain text' },
		{ value: 'formatted', label: 'Formatted' },
		{ value: 'disabled', label: 'Unavailable', disabled: true }
	];
	const options = [
		{ value: 'north', label: 'North' },
		{ value: 'south', label: 'South' },
		{ value: 'east', label: 'East' }
	];
	const menuItems = [
		{ label: 'Copy link' },
		{ label: 'Archive item' },
		{ label: 'Unavailable', disabled: true }
	];
</script>

<svelte:head>
	<title>Component library</title>
	<meta name="description" content="Interactive examples from the Svelte UI component library." />
</svelte:head>

<main>
	<header>
		<p class="eyebrow">S V E L T E / U I</p>
		<h1>Component library</h1>
		<p class="intro">
			A collection of reusable interface pieces, built with accessible behavior and a shared visual
			language.
		</p>
	</header>

	<section aria-labelledby="accordion-title">
		<div class="section-heading">
			<div>
				<p class="eyebrow">01 / DISCLOSURE</p>
				<h2 id="accordion-title">Accordion</h2>
			</div>
			<a href="/demo/accordion">Open full example ↗</a>
		</div>

		<div class="examples">
			<article>
				<h3>Single open</h3>
				<p class="description">Only one section can be expanded at a time.</p>
				<Accordion {items} />
			</article>

			<article>
				<h3>Multiple open</h3>
				<p class="description">Several sections can stay expanded together.</p>
				<Accordion {items} type="multiple" />
			</article>
		</div>
	</section>

	<section class="catalogue" aria-labelledby="catalogue-title">
		<div class="section-heading">
			<div>
				<p class="eyebrow">02 / COMPONENTS</p>
				<h2 id="catalogue-title">Interactive primitives</h2>
			</div>
			<p class="catalogue-note">Each example uses Bits UI behavior and the shared theme tokens.</p>
		</div>

		<div class="component-grid">
			<article>
				<h3>Checkbox</h3>
				<p class="description">A labeled, keyboard-operable choice.</p>
				<Checkbox label="Accept the terms" bind:checked={accepted} />
			</article>
			<article>
				<h3>Button</h3>
				<p class="description">Primary and alternate outlined actions.</p>
				<div class="control-row">
					<Button>Save changes</Button><Button variant="alternate">Cancel</Button>
				</div>
			</article>
			<article>
				<h3>Label</h3>
				<p class="description">A reusable label for a form control.</p>
				<Label for="example-email">Email address</Label>
				<input id="example-email" class="sample-input" type="email" value="reader@example.com" />
			</article>
			<article>
				<h3>Radio group</h3>
				<p class="description">Choose one format.</p>
				<RadioChoices {choices} bind:value={selectedRadio} />
			</article>
			<article>
				<h3>Select</h3>
				<p class="description">A compact menu of options.</p>
				<SelectField label="Region" {options} />
			</article>
			<article>
				<h3>Combobox</h3>
				<p class="description">Search and choose a region.</p>
				<ComboboxField label="Search region" {options} />
			</article>
			<article>
				<h3>Slider</h3>
				<p class="description">Adjust a measurable value.</p>
				<SliderField label="Volume" value={42} />
			</article>
			<article>
				<h3>Switch</h3>
				<p class="description">Turn a setting on or off.</p>
				<Switch label="Notifications" bind:checked={notifications} />
			</article>
			<article>
				<h3>Toggle</h3>
				<p class="description">A single pressed state.</p>
				<Toggle label="Pin item" />
			</article>
			<article>
				<h3>Toggle group</h3>
				<p class="description">Choose one aligned option.</p>
				<ToggleGroup
					options={[
						{ value: 'left', label: 'Left' },
						{ value: 'center', label: 'Center' },
						{ value: 'right', label: 'Right' }
					]}
					bind:value={selectedToggle}
				/>
			</article>
			<article>
				<h3>PIN input</h3>
				<p class="description">Enter a four digit code.</p>
				<PinInput label="Verification code" bind:value={pin} />
			</article>
			<article>
				<h3>Command menu</h3>
				<p class="description">Filter and choose from a short command list.</p>
				<CommandMenu
					items={[
						{ value: 'new', label: 'Create new file' },
						{ value: 'open', label: 'Open recent file' },
						{ value: 'settings', label: 'Open settings' }
					]}
				/>
			</article>
			<article>
				<h3>Tabs</h3>
				<p class="description">Switch between related panels.</p>
				<Tabs
					items={[
						{ value: 'one', label: 'First', content: 'The first panel.' },
						{ value: 'two', label: 'Second', content: 'The second panel.' }
					]}
				/>
			</article>
			<article>
				<h3>Command menu</h3>
				<p class="description">Filter and choose a command.</p>
				<CommandMenu
					items={[
						{ value: 'new', label: 'Create new file' },
						{ value: 'open', label: 'Open recent file' },
						{ value: 'settings', label: 'Open settings' }
					]}
				/>
			</article>
			<article>
				<h3>Collapsible</h3>
				<p class="description">Reveal supporting information.</p>
				<Collapsible title="More information"
					><p>Content stays in the document and is revealed on demand.</p></Collapsible
				>
			</article>
			<article>
				<h3>Progress</h3>
				<p class="description">A measurable task status.</p>
				<Progress label="Upload progress" value={64} />
			</article>
			<article>
				<h3>Rating</h3>
				<p class="description">An accessible five-point rating input.</p>
				<Rating label="Rate this example" />
			</article>
			<article>
				<h3>Calendar</h3>
				<p class="description">Select a date from a navigable month.</p>
				<Calendar />
			</article>
			<article>
				<h3>Range calendar</h3>
				<p class="description">Choose a start and end date.</p>
				<RangeCalendar />
			</article>
			<article>
				<h3>Date field</h3>
				<p class="description">Edit date segments directly.</p>
				<DateField />
			</article>
			<article>
				<h3>Date range field</h3>
				<p class="description">Enter the start and end date.</p>
				<DateRangeField />
			</article>
			<article>
				<h3>Date picker</h3>
				<p class="description">Open a calendar from a field.</p>
				<DatePicker />
			</article>
			<article>
				<h3>Date range picker</h3>
				<p class="description">Pick a date interval from a calendar.</p>
				<DateRangePicker />
			</article>
			<article>
				<h3>Time field</h3>
				<p class="description">Edit time segments directly.</p>
				<TimeField />
			</article>
			<article>
				<h3>Time range field</h3>
				<p class="description">Enter a start and end time.</p>
				<TimeRangeField />
			</article>
			<article>
				<h3>Separator</h3>
				<p class="description">A quiet structural divider.</p>
				<span>Above</span><Separator /><span>Below</span>
			</article>
			<article>
				<h3>Avatar</h3>
				<p class="description">Fallback initials while the image loads.</p>
				<Avatar alt="Ada Lovelace" initials="AL" />
			</article>
			<article>
				<h3>Aspect ratio</h3>
				<p class="description">A bounded media region.</p>
				<AspectRatio><div class="ratio-placeholder">16:9 media</div></AspectRatio>
			</article>
			<article>
				<h3>Dialog</h3>
				<p class="description">A modal panel with managed focus.</p>
				<Dialog title="Save changes" description="Your edits are ready to save."
					><p>Dialog content lives here.</p></Dialog
				>
			</article>
			<article>
				<h3>Popover</h3>
				<p class="description">Show contextual content beside a trigger.</p>
				<Popover trigger="Show details"><p>Additional information appears here.</p></Popover>
			</article>
			<article>
				<h3>Tooltip</h3>
				<p class="description">A brief hint for an action.</p>
				<Tooltip label="This action saves your current work."
					><span class="tooltip-sample">Hover or focus for a hint</span></Tooltip
				>
			</article>
			<article>
				<h3>Dropdown menu</h3>
				<p class="description">Keyboard navigable action list.</p>
				<DropdownMenu items={menuItems} />
			</article>
			<article>
				<h3>Context menu</h3>
				<p class="description">Right-click or keyboard-open the target.</p>
				<ContextMenu items={menuItems}><span>Right-click this area for actions</span></ContextMenu>
			</article>
			<article>
				<h3>Alert dialog</h3>
				<p class="description">Confirm a consequential action.</p>
				<AlertDialog description="This action cannot be undone." />
			</article>
			<article>
				<h3>Menu</h3>
				<p class="description">A compact menu with keyboard navigation.</p>
				<Menu items={menuItems} />
			</article>
			<article>
				<h3>Menubar</h3>
				<p class="description">A grouped set of related menus.</p>
				<Menubar
					menus={[
						{ label: 'File', items: menuItems },
						{ label: 'Edit', items: [{ label: 'Undo' }, { label: 'Redo' }] }
					]}
				/>
			</article>
			<article>
				<h3>Navigation menu</h3>
				<p class="description">A keyboard-friendly set of destinations.</p>
				<NavigationMenu
					items={[
						{ label: 'Overview', href: '/' },
						{ label: 'Accordion', href: '/demo/accordion' }
					]}
				/>
			</article>
			<article>
				<h3>Toolbar</h3>
				<p class="description">Related actions with keyboard navigation.</p>
				<Toolbar actions={[{ label: 'B' }, { label: 'I' }, { label: 'U' }]} />
			</article>
			<article>
				<h3>Meter</h3>
				<p class="description">Show a value within a known range.</p>
				<Meter label="Storage used" value={68} />
			</article>
			<article>
				<h3>Rating group</h3>
				<p class="description">A compact rating control.</p>
				<RatingGroup label="Rate this item" />
			</article>
			<article>
				<h3>Link preview</h3>
				<p class="description">Preview a destination on hover or focus.</p>
				<LinkPreview
					href="/demo/accordion"
					title="Accordion demo"
					description="See the disclosure component in a full example."
				/>
			</article>
			<article>
				<h3>Scroll area</h3>
				<p class="description">Content with a visible custom scrollbar.</p>
				<ScrollArea maxHeight="8rem"
					><p>
						Scrollable content stays within its region. This paragraph demonstrates the viewport
						behavior in a compact panel.
					</p></ScrollArea
				>
			</article>
			<article>
				<h3>Pagination</h3>
				<p class="description">Move through a known set of pages.</p>
				<Pagination count={42} perPage={10} />
			</article>
		</div>
	</section>

	<footer>
		<p>Components are built from accessible primitives and the shared design tokens.</p>
	</footer>
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
		width: min(100% - 2rem, 68rem);
		margin: 4rem auto;
	}

	header {
		max-width: 46rem;
		margin-bottom: 4rem;
	}

	.eyebrow {
		margin: 0 0 0.5rem;
		font-size: 0.75rem;
		letter-spacing: 0.12em;
	}

	h1 {
		margin: 0;
		font-size: clamp(2.25rem, 7vw, 4rem);
		line-height: 1.1;
	}

	.intro {
		max-width: 38rem;
		margin: 1rem 0 0;
	}

	.section-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px dotted var(--text);
	}

	.section-heading .eyebrow {
		margin-bottom: 0.25rem;
	}

	h2,
	h3 {
		margin: 0;
		font-size: 1rem;
	}

	.section-heading a {
		color: inherit;
		text-underline-offset: 0.2em;
	}

	.section-heading a:hover {
		text-decoration-style: dashed;
	}

	.examples {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2rem;
	}

	.catalogue {
		margin-top: 4rem;
	}

	.catalogue-note {
		max-width: 25rem;
		margin: 0;
	}

	.component-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 2rem 1.5rem;
	}

	.component-grid article {
		min-width: 0;
		padding-top: 0.75rem;
		border-top: 1px dotted var(--text);
	}

	.control-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.sample-input {
		box-sizing: border-box;
		width: 100%;
		min-height: 2.75rem;
		margin-top: 0.4rem;
		padding: 0.5rem 0.75rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
	}

	.sample-input:focus-visible {
		border-style: dotted;
		outline: none;
	}

	.ratio-placeholder {
		display: grid;
		width: 100%;
		height: 100%;
		min-height: 8rem;
		place-items: center;
		background: var(--background-darker);
		color: var(--white);
	}

	.tooltip-sample {
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	article {
		min-width: 0;
	}

	h3 {
		margin-bottom: 0.25rem;
	}

	.description {
		min-height: 3rem;
		margin: 0 0 0.75rem;
	}

	footer {
		margin-top: 4rem;
		padding-top: 1rem;
		border-top: 1px dotted var(--text);
	}

	footer p {
		margin: 0;
	}

	@media (max-width: 44rem) {
		main {
			margin: 2rem auto;
		}

		header {
			margin-bottom: 3rem;
		}

		.examples {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.component-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.description {
			min-height: 0;
		}
	}

	@media (max-width: 30rem) {
		.section-heading {
			align-items: flex-start;
			flex-direction: column;
		}

		.component-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
