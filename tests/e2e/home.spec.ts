import { expect, test } from '@playwright/test';
import { waitForHydration } from './helpers';

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForHydration(page);
  });

  test('presents the profile', async ({ page }) => {
    await expect(page).toHaveTitle('Christian Rijke · Senior Software Engineer');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Christian Rijke');
    await expect(page.getByRole('img', { name: 'Portrait of Christian Rijke' })).toBeVisible();
  });

  test('navigation links every section on the page, in page order', async ({ page }) => {
    const linkedIds = await page
      .getByRole('navigation', { name: 'Sections' })
      .getByRole('link')
      .evaluateAll((links) => links.map((link) => link.getAttribute('href')?.replace('#', '')));
    const sectionIds = await page
      .locator('main > section[id]')
      .evaluateAll((sections) => sections.map((section) => section.id));

    expect(linkedIds).toEqual(sectionIds);
    for (const id of sectionIds) {
      await expect(page.locator(`#${id} h2`)).toHaveCount(1);
    }
  });

  test('navigates to sections and marks the current one', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Sections' });

    await nav.getByRole('link', { name: 'Experience' }).click();
    await expect(page).toHaveURL(/#experience$/);
    await expect(page.locator('#experience')).toBeInViewport();
    await expect(nav.getByRole('link', { name: 'Experience' })).toHaveAttribute(
      'aria-current',
      'true',
    );

    await nav.getByRole('link', { name: 'Contact' }).click();
    await expect(nav.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'aria-current',
      'true',
    );
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

  test('copies the email address', async ({ page, context, browserName }) => {
    test.skip(browserName !== 'chromium', 'Clipboard permissions are Chromium-only');
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);

    await page.getByRole('button', { name: 'Copy address' }).click();

    await expect(page.getByRole('button', { name: 'Copied' })).toBeVisible();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
      'hello@christianrijke.de',
    );
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
