<script lang="ts">
	let { label = 'Loading' }: { label?: string } = $props();
</script>

<span class="loading" role="status"><span class="spinner" aria-hidden="true"></span>{label}</span>

<style>
	.loading {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--text);
	}
	.spinner {
		width: 1rem;
		height: 1rem;
		border: 2px solid currentColor;
		border-right-color: transparent;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.spinner {
			animation: none;
		}
	}
</style>
