<script lang="ts">
	import { Button as BitsButton } from 'bits-ui';
	let { variant = 'primary', children, ...rest }: { variant?: 'primary' | 'alternate'; children: import('svelte').Snippet } = $props();
</script>

<BitsButton.Root class={`button ${variant === 'alternate' ? 'alternate' : ''}`} {...rest}>{@render children()}</BitsButton.Root>

<style>
	:global(.button) { display: inline-flex; min-height: 2.75rem; align-items: center; justify-content: center; padding: 0.55rem 0.9rem; border: 2px solid var(--text); background: transparent; color: var(--text); box-shadow: 3px 3px 0 var(--text); font: inherit; text-decoration: none; cursor: pointer; }
	:global(.button.alternate) { background: var(--background-darker); color: var(--white); }
	:global(.button:hover:not(:disabled)) { border-style: dashed; }
	:global(.button:focus-visible) { outline: 2px dashed var(--text); outline-offset: 3px; }
	:global(.button:active:not(:disabled)) { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--text); }
	:global(.button:disabled) { opacity: 0.55; cursor: not-allowed; }
</style>
