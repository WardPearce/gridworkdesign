<script lang="ts">
	let {
		label,
		value = $bindable(50),
		min = 0,
		max = 100,
		step = 1,
		mode = 'notch',
		size = 'md',
		showValue = false,
		disabled = false
	}: {
		label: string;
		value?: number;
		min?: number;
		max?: number;
		step?: number;
		mode?: 'endless' | 'notch' | 'fill';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		showValue?: boolean;
		disabled?: boolean;
	} = $props();

	let dragging = $state(false);
	let previousPointerAngle = 0;
	let endlessRemainder = 0;
	const notchCount = 24;
	const notches = Array.from({ length: notchCount }, (_, index) => {
		const angle = ((index / notchCount) * 360 - 90) * (Math.PI / 180);
		return { index, x: 84 + Math.cos(angle) * 76, y: 84 + Math.sin(angle) * 76 };
	});
	const clampedValue = $derived(Math.min(max, Math.max(min, value)));
	const progress = $derived(max === min ? 0 : (clampedValue - min) / (max - min));
	const selectedNotch = $derived(
		mode === 'endless'
			? ((Math.round(value / step) % notchCount) + notchCount) % notchCount
			: Math.round(progress * (notchCount - 1))
	);

	function pointerAngle(event: PointerEvent, dial: HTMLButtonElement) {
		const bounds = dial.getBoundingClientRect();
		const centerX = bounds.left + bounds.width / 2;
		const centerY = bounds.top + bounds.height / 2;
		return (Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180) / Math.PI;
	}

	function updateFromPointer(event: PointerEvent, dial: HTMLButtonElement) {
		const angle = pointerAngle(event, dial);
		if (mode === 'endless') {
			let delta = angle - previousPointerAngle;
			if (delta > 180) delta -= 360;
			if (delta < -180) delta += 360;
			endlessRemainder += (delta / 15) * step;
			const wholeSteps = Math.trunc(endlessRemainder / step);
			if (wholeSteps !== 0) {
				value += wholeSteps * step;
				endlessRemainder -= wholeSteps * step;
			}
			previousPointerAngle = angle;
			return;
		}
		let degrees = ((((angle + 90 + 180) % 360) + 360) % 360) - 180;
		const normalized = Math.min(1, Math.max(0, (degrees + 135) / 270));
		const rawValue = min + normalized * (max - min);
		value = Math.min(max, Math.max(min, min + Math.round((rawValue - min) / step) * step));
	}

	function onPointerDown(event: PointerEvent) {
		if (disabled || event.button !== 0) return;
		const dial = event.currentTarget as HTMLButtonElement;
		dragging = true;
		previousPointerAngle = pointerAngle(event, dial);
		endlessRemainder = 0;
		dial.setPointerCapture(event.pointerId);
		updateFromPointer(event, dial);
	}

	function onPointerMove(event: PointerEvent) {
		if (dragging) updateFromPointer(event, event.currentTarget as HTMLButtonElement);
	}

	function onPointerUp() {
		dragging = false;
	}

	function onKeyDown(event: KeyboardEvent) {
		let next = clampedValue;
		if (event.key === 'ArrowRight' || event.key === 'ArrowUp') next += step;
		else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') next -= step;
		else if (event.key === 'PageUp') next += step * 10;
		else if (event.key === 'PageDown') next -= step * 10;
		else if (event.key === 'Home' && mode !== 'endless') next = min;
		else if (event.key === 'End' && mode !== 'endless') next = max;
		else return;
		event.preventDefault();
		value = mode === 'endless' ? next : Math.min(max, Math.max(min, next));
	}
</script>

<div class={['dial-field', `dial-field-${size}`]}>
	<span class="dial-label">{label}</span>
	<svg class="notch-ring" viewBox="0 0 168 168" aria-hidden="true">
		{#each notches as notch (notch.index)}
			<circle
				class={[
					'dial-notch',
					{ active: mode === 'fill' ? notch.index <= selectedNotch : notch.index === selectedNotch }
				]}
				cx={notch.x}
				cy={notch.y}
				r="5"
			/>
		{/each}
	</svg>
	<button
		class={['dial', { dragging }]}
		type="button"
		role={mode === 'endless' ? 'spinbutton' : 'slider'}
		aria-label={label}
		aria-valuemin={mode === 'endless' ? undefined : min}
		aria-valuemax={mode === 'endless' ? undefined : max}
		aria-valuenow={clampedValue}
		aria-valuetext={`${clampedValue}`}
		aria-disabled={disabled}
		{disabled}
		onpointerdown={onPointerDown}
		onpointermove={onPointerMove}
		onpointerup={onPointerUp}
		onpointercancel={onPointerUp}
		onkeydown={onKeyDown}
	>
		{#if showValue}<span class="dial-value" aria-hidden="true"
				>{mode === 'endless' ? value : clampedValue}</span
			>{/if}
	</button>
</div>

<style>
	.dial-field {
		position: relative;
		display: inline-grid;
		width: var(--dial-field-size);
		grid-template-rows: 1.5rem var(--dial-field-size);
		justify-items: center;
		gap: 0.5rem;
		color: var(--text);
		font-family: 'FragmentMono', monospace;
		--dial-notch-shadow: drop-shadow(0 1px 1px color-mix(in srgb, var(--text) 35%, transparent));
		--dial-active-notch-shadow: drop-shadow(
			0 0 3px color-mix(in srgb, var(--white) 42%, transparent)
		);
		--dial-shadow:
			inset 0 2px 2px color-mix(in srgb, var(--white) 14%, transparent),
			inset 0 -5px 7px color-mix(in srgb, var(--text) 55%, transparent),
			0 10px 16px color-mix(in srgb, var(--text) 60%, transparent);
	}
	:global(:root[data-theme='BurntWood']) .dial-field,
	:global(:root[data-theme='Hacker']) .dial-field,
	:global(:root[data-theme='PurpleDaydream']) .dial-field,
	:global(:root[data-theme='BloodRed']) .dial-field {
		--dial-notch-shadow: drop-shadow(0 1px 1px color-mix(in srgb, var(--text) 12%, transparent));
		--dial-active-notch-shadow: drop-shadow(
			0 0 1px color-mix(in srgb, var(--white) 18%, transparent)
		);
		--dial-shadow: var(--shadow-raised);
	}
	.dial-field-xs {
		--dial-field-size: 7rem;
	}
	.dial-field-sm {
		--dial-field-size: 8.75rem;
	}
	.dial-field-md {
		--dial-field-size: 10.5rem;
	}
	.dial-field-lg {
		--dial-field-size: 12.25rem;
	}
	.dial-field-xl {
		--dial-field-size: 14rem;
	}

	.dial-label {
		align-self: end;
		font-size: 0.875rem;
	}
	.notch-ring {
		position: absolute;
		top: 2rem;
		left: 0;
		width: var(--dial-field-size);
		height: var(--dial-field-size);
		overflow: visible;
		pointer-events: none;
	}
	.dial-notch {
		fill: color-mix(in srgb, var(--text) 38%, var(--background));
		filter: var(--dial-notch-shadow);
	}
	.dial-notch.active {
		fill: var(--white);
		filter: var(--dial-active-notch-shadow);
	}
	.dial {
		position: relative;
		z-index: 1;
		align-self: center;
		justify-self: center;
		width: 76%;
		height: 76%;
		padding: 0;
		border: 2px solid color-mix(in srgb, var(--text) 72%, var(--background-darker));
		border-radius: 50%;
		background: var(--background-darker);
		color: var(--text);
		box-shadow: var(--dial-shadow);
		touch-action: none;
		user-select: none;
		cursor: grab;
	}
	.dial:hover:not(:disabled):not([data-disabled]):not([aria-disabled='true']):not(
			[data-disabled] *
		) {
		box-shadow: var(--shadow-hover);
	}
	.dial:focus-visible {
		outline: var(--focus-ring);
		outline-offset: var(--focus-ring-offset);
	}
	.dial:active,
	.dial.dragging {
		cursor: grabbing;
	}
	.dial:disabled {
		opacity: 0.55;
		cursor: not-allowed;
	}
	.dial-value {
		color: var(--white);
		font: inherit;
		font-size: 1.125rem;
	}
	.dial::before {
		position: absolute;
		inset: 0.22rem;
		border: 2px solid color-mix(in srgb, var(--text) 48%, var(--background-darker));
		border-radius: 50%;
		box-shadow:
			inset 0 2px 2px color-mix(in srgb, var(--white) 9%, transparent),
			0 2px 2px color-mix(in srgb, var(--white) 8%, transparent);
		content: '';
		pointer-events: none;
	}
	@media (prefers-reduced-motion: reduce) {
		.dial {
			transition: none;
		}
	}
</style>
