import { page } from 'vitest/browser';
import { expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Sidebar from './Sidebar.svelte';

it('filters navigation and preserves readable links when collapsed', async () => {
	render(Sidebar, {
		title: 'Components',
		currentPath: '/button',
		items: [
			{ label: 'Button', href: '/button' },
			{ label: 'Calendar', href: '/calendar' }
		]
	});
	const mobile = document.querySelector<HTMLButtonElement>('.mobile-toggle');
	if (mobile?.checkVisibility()) mobile.click();
	await expect
		.element(page.getByRole('link', { name: 'Button', exact: true }))
		.toHaveAttribute('aria-current', 'page');
	await page.getByRole('searchbox', { name: 'Filter components' }).fill('calendar');
	await expect
		.element(page.getByRole('link', { name: 'Button', exact: true }))
		.not.toBeInTheDocument();
	await expect.element(page.getByRole('link', { name: 'Calendar', exact: true })).toBeVisible();
	await page.getByRole('button', { name: 'Clear filter' }).click();
	if (mobile?.checkVisibility()) {
		mobile.click();
		await expect
			.element(page.getByRole('button', { name: 'Browse' }))
			.toHaveAttribute('aria-expanded', 'false');
		return;
	}
	await page.getByRole('button', { name: 'Collapse sidebar' }).click();
	await expect.element(page.getByRole('link', { name: 'Calendar', exact: true })).toBeVisible();
	await expect
		.element(page.getByRole('button', { name: 'Expand sidebar' }))
		.toHaveAttribute('aria-expanded', 'false');
});
