import { expect, test } from '@playwright/test';

test('legal pages are linked from the footer and kept out of search results', async ({ page }) => {
  await page.goto('/');
  const footer = page.getByRole('contentinfo');

  await footer.getByRole('link', { name: 'Imprint' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Impressum');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');

  await footer.getByRole('link', { name: 'Privacy' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Datenschutzerklärung');
});

test('other pages link back to the home page', async ({ page }) => {
  await page.goto('/imprint');

  await page.getByRole('banner').getByRole('link', { name: 'Christian Rijke' }).click();

  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Christian Rijke');
});
