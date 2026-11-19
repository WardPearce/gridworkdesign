<script lang="ts">
	import { DatePicker as BitsDatePicker } from 'bits-ui';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import type { DateValue } from '@internationalized/date';
	let { label = 'Choose date', value = $bindable() }: { label?: string; value?: DateValue } =
		$props();
</script>

<BitsDatePicker.Root bind:value weekdayFormat="short" fixedWeeks>
	<BitsDatePicker.Label class="date-label">{label}</BitsDatePicker.Label>
	<BitsDatePicker.Input class="date-input">
		{#snippet children({ segments })}
			{#each segments as { part, value: segmentValue }, index (`${part}-${index}`)}
				<BitsDatePicker.Segment {part} class="date-segment">{segmentValue}</BitsDatePicker.Segment>
			{/each}
		{/snippet}
	</BitsDatePicker.Input>
	<BitsDatePicker.Content class="date-content ui-motion-enter" sideOffset={4}>
		<BitsDatePicker.Calendar class="date-calendar">
			{#snippet children({ months, weekdays })}
				<BitsDatePicker.Header class="calendar-header">
					<BitsDatePicker.PrevButton class="calendar-nav" aria-label="Previous month"
						><ChevronLeft size={18} aria-hidden="true" /></BitsDatePicker.PrevButton
					>
					<BitsDatePicker.Heading class="calendar-heading" />
					<BitsDatePicker.NextButton class="calendar-nav" aria-label="Next month"
						><ChevronRight size={18} aria-hidden="true" /></BitsDatePicker.NextButton
					>
				</BitsDatePicker.Header>
				{#each months as month (month.value)}
					<BitsDatePicker.Grid class="calendar-grid">
						<BitsDatePicker.GridHead
							><BitsDatePicker.GridRow class="calendar-row">
								{#each weekdays as day (day)}<BitsDatePicker.HeadCell class="calendar-weekday"
										>{day}</BitsDatePicker.HeadCell
									>{/each}
							</BitsDatePicker.GridRow></BitsDatePicker.GridHead
						>
						<BitsDatePicker.GridBody>
							{#each month.weeks as week (week)}
								<BitsDatePicker.GridRow class="calendar-row">
									{#each week as date (date)}
										<BitsDatePicker.Cell {date} month={month.value} class="calendar-cell"
											><BitsDatePicker.Day class="calendar-day">{date.day}</BitsDatePicker.Day
											></BitsDatePicker.Cell
										>
									{/each}
								</BitsDatePicker.GridRow>
							{/each}
						</BitsDatePicker.GridBody>
					</BitsDatePicker.Grid>
				{/each}
			{/snippet}
		</BitsDatePicker.Calendar>
	</BitsDatePicker.Content>
</BitsDatePicker.Root>

<style>
	:global(.date-label) {
		display: block;
		margin-bottom: 0.35rem;
		color: var(--text);
		font-weight: 700;
	}
	:global(.date-input) {
		display: flex;
		flex-wrap: wrap;
		width: fit-content;
		min-height: 2.75rem;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4rem 0.65rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
	}
	:global(.date-input:focus-within) {
		border-style: dashed;
	}
	:global(.date-segment[data-focused]) {
		background: var(--background-darker);
		color: var(--white);
	}
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
	:global(.date-content) {
		z-index: var(--layer-popup);
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 3px 3px 0 var(--text);
	}
	:global(.date-calendar) {
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
	:global(.calendar-day[data-selected]) {
		background: var(--background-darker);
		color: var(--white);
	}
	:global(.calendar-day[data-selected]:hover:not([data-disabled])) {
		border-color: var(--background);
		border-style: dashed;
	}
	:global(.calendar-day[data-today]) {
		border-color: var(--text);
	}
	:global(.calendar-day:focus-visible),
	:global(.calendar-nav:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}
</style>
