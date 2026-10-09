import { expect, type Page } from '@playwright/test';

/** Waits until every Astro island on the page has hydrated. */
export async function waitForHydration(page: Page) {
  await expect(page.locator('astro-island[ssr]')).toHaveCount(0);
}
