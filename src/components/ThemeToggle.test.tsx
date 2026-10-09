import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { THEME_STORAGE_KEY } from '../lib/theme';
import { ThemeToggle } from './ThemeToggle';

function mockSystemDarkMode(dark: boolean) {
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query: string) =>
      ({
        matches: query === '(prefers-color-scheme: dark)' && dark,
        media: query,
        addEventListener: () => {},
        removeEventListener: () => {},
      }) as unknown as MediaQueryList,
  );
}

describe('ThemeToggle', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('reflects the system preference when no theme was chosen', () => {
    mockSystemDarkMode(true);
    render(<ThemeToggle />);

    expect(screen.getByRole('button', { name: 'Dark theme' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('prefers an explicit choice over the system preference', () => {
    mockSystemDarkMode(true);
    document.documentElement.dataset.theme = 'light';
    render(<ThemeToggle />);

    expect(screen.getByRole('button', { name: 'Dark theme' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
  });

  it('switches the theme and remembers the choice', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const toggle = screen.getByRole('button', { name: 'Dark theme' });

    await user.click(toggle);
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');

    await user.click(toggle);
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
  });

  it('stays in sync when the theme changes elsewhere', async () => {
    render(<ThemeToggle />);

    await act(async () => {
      document.documentElement.dataset.theme = 'dark';
      // MutationObserver callbacks are delivered as microtasks.
      await Promise.resolve();
    });

    expect(screen.getByRole('button', { name: 'Dark theme' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });
});
