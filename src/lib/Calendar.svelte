<script lang="ts">
	import { Calendar } from 'bits-ui';
	import type { DateValue } from '@internationalized/date';
	let { value = $bindable(), label = 'Choose a date' }: { value?: DateValue; label?: string } = $props();
</script>

<Calendar.Root type="single" bind:value weekdayFormat="short" fixedWeeks class="calendar-root" aria-label={label}>
	{#snippet children({ months, weekdays })}
		<Calendar.Header class="calendar-header">
			<Calendar.PrevButton class="calendar-nav" aria-label="Previous month">←</Calendar.PrevButton>
			<Calendar.Heading class="calendar-heading" />
			<Calendar.NextButton class="calendar-nav" aria-label="Next month">→</Calendar.NextButton>
		</Calendar.Header>
		{#each months as month (month.value)}
			<Calendar.Grid class="calendar-grid">
				<Calendar.GridHead><Calendar.GridRow class="calendar-row">
					{#each weekdays as day (day)}<Calendar.HeadCell class="calendar-weekday">{day}</Calendar.HeadCell>{/each}
				</Calendar.GridRow></Calendar.GridHead>
				<Calendar.GridBody>
					{#each month.weeks as week (week)}
						<Calendar.GridRow class="calendar-row">
							{#each week as date (date)}
								<Calendar.Cell {date} month={month.value} class="calendar-cell"><Calendar.Day class="calendar-day">{date.day}</Calendar.Day></Calendar.Cell>
							{/each}
						</Calendar.GridRow>
					{/each}
				</Calendar.GridBody>
			</Calendar.Grid>
		{/each}
	{/snippet}
</Calendar.Root>

<style>
	:global(.calendar-root) { width: fit-content; padding: 1rem; border: 2px solid var(--text); color: var(--text); }
	:global(.calendar-header) { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 0.75rem; }
	:global(.calendar-heading) { font-weight: 700; }
	:global(.calendar-nav), :global(.calendar-day) { min-width: 2.5rem; min-height: 2.5rem; border: 1px solid var(--text); background: transparent; color: var(--text); font: inherit; cursor: pointer; }
	:global(.calendar-grid) { border-collapse: collapse; }
	:global(.calendar-row) { display: flex; }
	:global(.calendar-weekday), :global(.calendar-cell) { width: 2.5rem; height: 2.5rem; text-align: center; }
	:global(.calendar-weekday) { font-size: 0.75rem; }
	:global(.calendar-day) { border-color: transparent; }
	:global(.calendar-day:hover:not([data-disabled])) { outline: 1px dashed var(--text); }
	:global(.calendar-day[data-selected]) { background: var(--background-darker); color: var(--white); }
	:global(.calendar-day[data-today]) { border: 1px solid var(--text); }
	:global(.calendar-day:focus-visible), :global(.calendar-nav:focus-visible) { outline: 2px dashed var(--text); outline-offset: 2px; }
	:global(.calendar-day[data-disabled]), :global(.calendar-day[data-outside-month]) { opacity: 0.45; }
</style>
