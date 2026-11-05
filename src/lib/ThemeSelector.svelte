<script lang="ts">
	import { ChevronDown, Sun } from '@lucide/svelte';
	import { Select } from 'bits-ui';

	export type Theme = 'IBM' | 'NewsPaper' | 'BurntWood' | 'Hacker' | 'PurpleDaydream' | 'BloodRed';
	type Mode = 'rotate' | 'dropdown';
	const themes: Theme[] = ['IBM', 'NewsPaper', 'BurntWood', 'Hacker', 'PurpleDaydream', 'BloodRed'];
	const themeLabels: Record<Theme, string> = {
		IBM: 'IBM',
		NewsPaper: 'NewsPaper',
		BurntWood: 'BurntWood',
		Hacker: 'Hacker',
		PurpleDaydream: 'PurpleDaydream',
		BloodRed: 'BloodRed'
	};

	let {
		value = $bindable<Theme>('IBM'),
		name,
		mode = 'rotate'
	}: { value?: Theme; name?: string; mode?: Mode } = $props();

	const applyTheme = (theme: Theme) => {
		if (typeof document !== 'undefined') document.documentElement.dataset.theme = theme;
	};
	const rotateTheme = () => {
		value = themes[(themes.indexOf(value) + 1) % themes.length];
		applyTheme(value);
	};
	const selectTheme = (next: string | undefined) => {
		if (!next || !themes.includes(next as Theme)) return;
		value = next as Theme;
		applyTheme(value);
	};
</script>

{#if mode === 'rotate'}
	<button
		class="theme-rotate"
		type="button"
		aria-label={`Change theme, currently ${themeLabels[value]}`}
		onclick={rotateTheme}
	>
		<Sun size={16} aria-hidden="true" />
		<span>{themeLabels[value]}</span>
	</button>
{/if}

{#if mode === 'dropdown'}
	<Select.Root type="single" {value} onValueChange={selectTheme} {name}>
		<Select.Trigger class="theme-trigger" aria-label="Choose theme">
			<span>{themeLabels[value]}</span><ChevronDown size={16} aria-hidden="true" />
		</Select.Trigger>
		<Select.Portal>
			<Select.Content class="theme-content" sideOffset={4}>
				<Select.Viewport>
					{#each themes as theme (theme)}
						<Select.Item class="theme-item" value={theme}>{themeLabels[theme]}</Select.Item>
					{/each}
				</Select.Viewport>
			</Select.Content>
		</Select.Portal>
	</Select.Root>
{/if}

<style>
	.theme-rotate,
	:global(.theme-trigger) {
		display: inline-flex;
		min-height: 2.75rem;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		padding: 0.5rem 0.75rem;
		border: 2px solid var(--text);
		background: transparent;
		color: var(--text);
		font: inherit;
		cursor: pointer;
	}
	.theme-rotate:hover,
	:global(.theme-trigger:hover) {
		border-style: dashed;
	}
	.theme-rotate:focus-visible,
	:global(.theme-trigger:focus-visible) {
		outline: 2px dashed var(--text);
		outline-offset: 3px;
	}
	:global(.theme-content) {
		z-index: 50;
		min-width: 12rem;
		max-height: min(18rem, var(--bits-select-content-available-height));
		overflow: auto;
		border: 2px solid var(--text);
		background: var(--background);
		color: var(--text);
		box-shadow: 3px 3px 0 var(--text);
	}
	:global(.theme-item) {
		min-height: 2.75rem;
		padding: 0.6rem 0.75rem;
		cursor: pointer;
	}
	:global(.theme-item[data-highlighted]) {
		outline: 1px dashed var(--text);
		outline-offset: -4px;
	}
</style>
