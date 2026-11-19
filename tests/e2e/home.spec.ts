import { expect, test } from '@playwright/test';
import { waitForHydration } from './helpers';

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForHydration(page);
  });

  test('presents the profile', async ({ page }) => {
    await expect(page).toHaveTitle('Christian Rijke · Software Engineer');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Christian Rijke');
    await expect(page.getByRole('img', { name: 'Portrait of Christian Rijke' })).toBeVisible();
  });

  test('gives every section a heading', async ({ page }) => {
    const sections = page.locator('main section[id]');
    await expect(sections).not.toHaveCount(0);
    for (const section of await sections.all()) {
      await expect(section.getByRole('heading', { level: 2 })).toHaveCount(1);
    }
  });

  test('offers ways to get in touch', async ({ page }) => {
    const contact = page.locator('#contact');
    await expect(contact.getByRole('link', { name: 'hello@christianrijke.de' })).toHaveAttribute(
      'href',
      'mailto:hello@christianrijke.de',
    );
    await expect(contact.getByRole('link', { name: /LinkedIn/ })).toBeVisible();
    await expect(contact.getByRole('link', { name: /GitHub/ })).toBeVisible();
  });

  test('skip link moves focus to the main content', async ({ page }) => {
    await page.keyboard.press('Tab');
    const skipLink = page.getByRole('link', { name: 'Skip to content' });
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();

    await page.keyboard.press('Enter');
    await expect(page.locator('main')).toBeFocused();
  });

  test('does not scroll horizontally', async ({ page }) => {
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBe(0);
  });

  test('describes itself to search engines and link previews', async ({ page }) => {
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://christianrijke.de/',
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      /^https:\/\/christianrijke\.de\/_astro\/.+\.jpg$/,
    );

    const schema = JSON.parse(
      (await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}',
    );
    expect(schema).toMatchObject({ '@type': 'Person', name: 'Christian Rijke' });
  });

  test('loads no third-party resources', async ({ page, baseURL }) => {
    const origins = new Set<string>();
    page.on('request', (request) => origins.add(new URL(request.url()).origin));
    await page.reload();
    await page.waitForLoadState('networkidle');

    expect([...origins]).toEqual([new URL('/', baseURL).origin]);
  });
});
