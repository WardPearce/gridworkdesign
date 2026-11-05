<script lang="ts">
	import { DateRangePicker as BitsPicker } from 'bits-ui';
	import { CalendarDays, ChevronLeft, ChevronRight } from '@lucide/svelte';
	import type { DateRange } from 'bits-ui';
	let { label = 'Choose dates', value = $bindable() }: { label?: string; value?: DateRange } =
		$props();
	const inputTypes = ['start', 'end'] as const;
</script>

<BitsPicker.Root bind:value weekdayFormat="short" fixedWeeks class="range-picker">
	<BitsPicker.Label class="range-label">{label}</BitsPicker.Label>
	<div class="range-inputs">
		{#each inputTypes as type (type)}
			<BitsPicker.Input {type} class="range-input">
				{#snippet children({ segments })}
					{#each segments as { part, value: segmentValue }, index (`${part}-${index}`)}
						<BitsPicker.Segment {part} class="range-segment">{segmentValue}</BitsPicker.Segment>
					{/each}
				{/snippet}
			</BitsPicker.Input>
			{#if type === 'start'}<span aria-hidden="true">–</span>{/if}
		{/each}
		<BitsPicker.Trigger class="range-trigger" aria-label="Open date range calendar"
			><CalendarDays size={18} aria-hidden="true" /></BitsPicker.Trigger
		>
	</div>
	<BitsPicker.Content class="range-content ui-motion-enter" sideOffset={4}>
		<BitsPicker.Calendar class="range-calendar">
			{#snippet children({ months, weekdays })}
				<BitsPicker.Header class="calendar-header">
					<BitsPicker.PrevButton class="calendar-nav" aria-label="Previous month"
						><ChevronLeft size={18} aria-hidden="true" /></BitsPicker.PrevButton
					>
					<BitsPicker.Heading class="calendar-heading" />
					<BitsPicker.NextButton class="calendar-nav" aria-label="Next month"
						><ChevronRight size={18} aria-hidden="true" /></BitsPicker.NextButton
					>
				</BitsPicker.Header>
				{#each months as month (month.value)}
					<BitsPicker.Grid class="calendar-grid">
						<BitsPicker.GridHead
							><BitsPicker.GridRow class="calendar-row">
								{#each weekdays as day (day)}<BitsPicker.HeadCell class="calendar-weekday"
										>{day}</BitsPicker.HeadCell
									>{/each}
							</BitsPicker.GridRow></BitsPicker.GridHead
						>
						<BitsPicker.GridBody>
							{#each month.weeks as week (week)}
								<BitsPicker.GridRow class="calendar-row">
									{#each week as date (date)}
										<BitsPicker.Cell {date} month={month.value} class="calendar-cell"
											><BitsPicker.Day class="calendar-day">{date.day}</BitsPicker.Day
											></BitsPicker.Cell
										>
									{/each}
								</BitsPicker.GridRow>
							{/each}
						</BitsPicker.GridBody>
					</BitsPicker.Grid>
				{/each}
			{/snippet}
		</BitsPicker.Calendar>
	</BitsPicker.Content>
</BitsPicker.Root>

<style>
	:global(.range-picker) {
		display: grid;
		gap: 0.35rem;
		color: var(--text);
	}
	:global(.range-label) {
		font-weight: 700;
	}
	.range-inputs {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.35rem;
	}
	:global(.range-input) {
		display: flex;
		min-height: 2.75rem;
		align-items: center;
		gap: 0.1rem;
		padding: 0.35rem 0.5rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
	}
	:global(.range-input:focus-within) {
		border-style: dashed;
	}
	:global(.range-segment[data-focused]) {
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.range-trigger),
	:global(.calendar-nav) {
		display: inline-flex;
		min-width: 2.5rem;
		min-height: 2.5rem;
		align-items: center;
		justify-content: center;
		padding: 0;
		border: 1px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
	}
	:global(.calendar-nav:hover:not(:disabled)) {
		border-style: dashed;
	}
	:global(.range-content) {
		z-index: 50;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 3px 3px 0 var(--text);
	}
	:global(.range-calendar) {
		padding: 1rem;
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
		min-width: 2.5rem;
		min-height: 2.5rem;
		border: 1px solid transparent;
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
	}
	:global(.calendar-day[data-selected]),
	:global(.calendar-day[data-selection-start]),
	:global(.calendar-day[data-selection-end]) {
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.calendar-day[data-selected]:hover:not([data-disabled])),
	:global(.calendar-day[data-selection-start]:hover:not([data-disabled])),
	:global(.calendar-day[data-selection-end]:hover:not([data-disabled])) {
		border-color: var(--background);
		border-style: dashed;
	}
	:global(.calendar-day[data-highlighted]) {
		outline: 1px dashed var(--text);
	}
	:global(.calendar-day[data-today]) {
		border-color: var(--text);
	}
	:global(.calendar-day:focus-visible),
	:global(.calendar-nav:focus-visible),
	:global(.range-trigger:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 2px;
	}
</style>
