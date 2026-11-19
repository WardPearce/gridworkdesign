<script lang="ts">
	import Dial from './Dial.svelte';

	export type DialBoardItem = {
		id: string;
		label: string;
		value: number;
		min?: number;
		max?: number;
		step?: number;
		mode?: 'endless' | 'notch' | 'fill';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		showValue?: boolean;
		disabled?: boolean;
	};

	let { dials = $bindable(), class: className = '' }: {
		dials: DialBoardItem[];
		class?: string;
	} = $props();
	const helpId = $props.id();
	let dragging = $state<string | null>(null);
	let announcement = $state('');
	let pointerId: number | null = null;
	let activeBoard: HTMLElement | null = null;

	function move(id: string, target: number) {
		const from = dials.findIndex((dial) => dial.id === id);
		if (from < 0 || target < 0 || target >= dials.length || from === target) return;
		const reordered = [...dials];
		const [item] = reordered.splice(from, 1);
		reordered.splice(target, 0, item);
		dials = reordered;
		announcement = `${item.label} moved to position ${target + 1} of ${dials.length}.`;
	}

	function onMoveKey(event: KeyboardEvent, id: string) {
		const index = dials.findIndex((dial) => dial.id === id);
		if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') move(id, index - 1);
		else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') move(id, index + 1);
		else return;
		event.preventDefault();
	}

	function startDrag(event: PointerEvent, id: string) {
		if (event.button !== 0 || dragging) return;
		event.preventDefault();
		dragging = id;
		pointerId = event.pointerId;
		activeBoard = (event.currentTarget as HTMLElement).closest('.dial-board');
	}

	function drag(event: PointerEvent) {
		if (!dragging || event.pointerId !== pointerId) return;
		const target = document.elementFromPoint(event.clientX, event.clientY)?.closest<HTMLElement>('[data-dial-id]');
		if (target && activeBoard?.contains(target)) move(dragging, dials.findIndex((dial) => dial.id === target.dataset.dialId));
	}

	function endDrag(event: PointerEvent) {
		if (event.pointerId !== pointerId) return;
		dragging = null;
		pointerId = null;
		activeBoard = null;
	}

</script>

<svelte:window onpointermove={drag} onpointerup={endDrag} onpointercancel={endDrag} />

<div class={['dial-board', className]}>
	<div class="deck-header"><span>CONTROL DECK</span><span>{dials.length} MODULES</span></div>
	<p class="instructions">Drag a handle to rearrange. Use arrow keys to move a focused module.</p>
	<div class="modules">
		{#each dials as dial, index (dial.id)}
			<div class={['module', { dragging: dragging === dial.id }]} data-dial-id={dial.id}>
				<div class="module-header">
					<span class="module-number">{String(index + 1).padStart(2, '0')}</span>
					<button type="button" class="handle" aria-label={`Move ${dial.label}`} aria-describedby={helpId}
						onpointerdown={(event) => startDrag(event, dial.id)} onkeydown={(event) => onMoveKey(event, dial.id)}>
						<span aria-hidden="true">⠿</span> MOVE
					</button>
				</div>
				<Dial label={dial.label} bind:value={dial.value} min={dial.min} max={dial.max}
					step={dial.step} mode={dial.mode} size={dial.size} showValue={dial.showValue} disabled={dial.disabled} />
			</div>
		{/each}
	</div>
	<span id={helpId} class="sr-only">Drag to rearrange, or press arrow keys to move this module.</span>
	<span class="sr-only" aria-live="polite">{announcement}</span>
</div>

<style>
	.dial-board { padding: 1rem; border: 2px solid var(--text); background: var(--background); color: var(--text); font-family: 'FragmentMono', monospace; }
	.deck-header { display: flex; justify-content: space-between; gap: 1rem; font-size: .75rem; letter-spacing: .1em; }
	.instructions { margin: .75rem 0 1rem; font-size: .75rem; line-height: 1.5; }
	.modules { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); gap: .75rem; }
	.module { display: flex; flex-direction: column; align-items: center; min-width: 0; padding: .75rem .5rem 1rem; border: 2px solid var(--text); background: color-mix(in srgb, var(--background) 88%, var(--text)); }
	.module.dragging { border-style: dashed; outline: 2px solid var(--text); outline-offset: -5px; }
	.module-header { display: flex; align-items: center; justify-content: space-between; align-self: stretch; margin-bottom: .5rem; font-size: .7rem; }
	.module-number { opacity: .7; }
	.handle { padding: .3rem .5rem; border: 1px solid currentColor; background: transparent; color: inherit; font: inherit; cursor: grab; touch-action: none; }
	.handle:active { cursor: grabbing; }
	.handle:focus-visible { outline: 2px dashed var(--text); outline-offset: 3px; }
	.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
</style>
