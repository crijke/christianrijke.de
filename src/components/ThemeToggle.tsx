import { useSyncExternalStore } from 'react';
import { getTheme, setTheme, subscribeToTheme } from '../lib/theme';

export function ThemeToggle() {
  // The server can't know the theme; React re-renders with the client value after hydration.
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => null);
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-pressed={theme === null ? undefined : isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="-m-2 grid size-9 place-items-center rounded-full text-muted transition-colors hover:text-ink"
    >
      <span className="sr-only">Dark theme</span>
      {/* Icons switch in CSS so they're correct before hydration. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4 dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.5 14.1A8.5 8.5 0 1 1 9.9 3.5a6.6 6.6 0 0 0 10.6 10.6Z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="hidden size-4 dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
      </svg>
    </button>
  );
}
