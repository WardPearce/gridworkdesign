<script lang="ts">
	import { RangeCalendar } from 'bits-ui';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import type { DateRange } from 'bits-ui';
	let {
		value = $bindable(),
		label = 'Choose a date range'
	}: { value?: DateRange; label?: string } = $props();
</script>

<RangeCalendar.Root
	bind:value
	weekdayFormat="short"
	fixedWeeks
	class="calendar-root"
	aria-label={label}
>
	{#snippet children({ months, weekdays })}
		<RangeCalendar.Header class="calendar-header">
			<RangeCalendar.PrevButton class="calendar-nav" aria-label="Previous month"
				><ChevronLeft size={18} aria-hidden="true" /></RangeCalendar.PrevButton
			>
			<RangeCalendar.Heading class="calendar-heading" />
			<RangeCalendar.NextButton class="calendar-nav" aria-label="Next month"
				><ChevronRight size={18} aria-hidden="true" /></RangeCalendar.NextButton
			>
		</RangeCalendar.Header>
		{#each months as month (month.value)}
			<RangeCalendar.Grid class="calendar-grid">
				<RangeCalendar.GridHead
					><RangeCalendar.GridRow class="calendar-row">
						{#each weekdays as day (day)}<RangeCalendar.HeadCell class="calendar-weekday"
								>{day}</RangeCalendar.HeadCell
							>{/each}
					</RangeCalendar.GridRow></RangeCalendar.GridHead
				>
				<RangeCalendar.GridBody>
					{#each month.weeks as week (week)}
						<RangeCalendar.GridRow class="calendar-row">
							{#each week as date (date)}
								<RangeCalendar.Cell {date} month={month.value} class="calendar-cell"
									><RangeCalendar.Day class="calendar-day">{date.day}</RangeCalendar.Day
									></RangeCalendar.Cell
								>
							{/each}
						</RangeCalendar.GridRow>
					{/each}
				</RangeCalendar.GridBody>
			</RangeCalendar.Grid>
		{/each}
	{/snippet}
</RangeCalendar.Root>

<style>
	:global(.calendar-root) {
		width: fit-content;
		padding: 1rem;
		border: 2px solid var(--text);
		color: var(--text);
		box-shadow: var(--shadow-raised);
	}
	:global(.calendar-header) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.75rem;
	}
	:global(.calendar-heading) {
		font-weight: 700;
	}
	:global(.calendar-nav),
	:global(.calendar-day) {
		min-width: 2.5rem;
		min-height: 2.5rem;
		border: 1px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
		box-shadow: var(--shadow-raised);
	}
	:global(.calendar-nav) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}
	:global(
		.calendar-nav:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			):not(:disabled)
	) {
		box-shadow: var(--shadow-hover);
	}
	:global(.calendar-grid) {
		border-collapse: collapse;
	}
	:global(.calendar-row) {
		display: flex;
	}
	:global(.calendar-weekday),
	:global(.calendar-cell) {
		width: 2.5rem;
		height: 2.5rem;
		text-align: center;
	}
	:global(.calendar-weekday) {
		font-size: 0.75rem;
	}
	:global(.calendar-day) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		border-color: transparent;
	}
	:global(
		.calendar-day:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
				[data-disabled] *
			):not([data-disabled])
	) {
		border-color: var(--text);
		box-shadow: var(--shadow-hover);
	}
	:global(
		.calendar-day[data-selected]:hover:not(:disabled):not([data-disabled]):not(
				[aria-disabled='true']
			):not([data-disabled] *):not([data-disabled])
	),
	:global(
		.calendar-day[data-selection-start]:hover:not(:disabled):not([data-disabled]):not(
				[aria-disabled='true']
			):not([data-disabled] *):not([data-disabled])
	),
	:global(
		.calendar-day[data-selection-end]:hover:not(:disabled):not([data-disabled]):not(
				[aria-disabled='true']
			):not([data-disabled] *):not([data-disabled])
	) {
		border-color: var(--background);
	}
	:global(.calendar-day[data-selected]) {
		background: var(--background-darker);
		color: var(--white);
		box-shadow: var(--shadow-inset);
	}
	:global(.calendar-day[data-selection-start]),
	:global(.calendar-day[data-selection-end]) {
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.calendar-day:focus-visible),
	:global(.calendar-nav:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	:global(.calendar-day[data-disabled]),
	:global(.calendar-day[data-outside-month]) {
		opacity: 0.45;
	}
</style>
