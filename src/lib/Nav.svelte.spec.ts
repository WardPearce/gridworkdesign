import { page } from 'vitest/browser';
import { expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Nav from './Nav.svelte';

it('marks a matching section active without matching a sibling prefix', async () => {
	render(Nav, {
		placement: 'bottom',
		currentPath: '/settings/profile',
		items: [
			{ label: 'Settings', href: '/settings', match: 'prefix' },
			{ label: 'Other', href: '/setting', match: 'prefix' },
			{ label: 'Home', href: '/', match: 'prefix' }
		]
	});
	await expect
		.element(page.getByRole('link', { name: 'Settings' }))
		.toHaveAttribute('aria-current', 'page');
	await expect
		.element(page.getByRole('link', { name: 'Other' }))
		.not.toHaveAttribute('aria-current');
	await expect
		.element(page.getByRole('link', { name: 'Home' }))
		.not.toHaveAttribute('aria-current');
});
