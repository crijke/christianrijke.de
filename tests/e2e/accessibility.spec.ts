import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = ['/', '/imprint', '/privacy', '/404'];

for (const colorScheme of ['light', 'dark'] as const) {
  test.describe(`${colorScheme} theme`, () => {
    test.use({ colorScheme });

    for (const path of pages) {
      test(`${path} has no detectable accessibility violations`, async ({ page }) => {
        await page.goto(path);
        // Check final states, not mid-animation ones (e.g. contrast during a fade-in).
        await page.emulateMedia({ reducedMotion: 'reduce' });

        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
          .analyze();

        expect(results.violations).toEqual([]);
      });
    }
  });
}
