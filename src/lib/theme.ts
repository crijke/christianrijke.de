export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

const darkQuery = '(prefers-color-scheme: dark)';

function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark';
}

/** The effective theme: an explicit choice if there is one, the OS setting otherwise. */
export function getTheme(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (isTheme(explicit)) return explicit;
  return window.matchMedia(darkQuery).matches ? 'dark' : 'light';
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (e.g. blocked cookies); the choice then lasts for this page view.
  }
}

/** Notifies on explicit theme changes and on OS-level color scheme changes. */
export function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  const media = window.matchMedia(darkQuery);
  media.addEventListener('change', onChange);

  return () => {
    observer.disconnect();
    media.removeEventListener('change', onChange);
  };
}

/**
 * Inlined into <head> so a stored theme applies before first paint. Kept dependency-free
 * because it is serialised as a string.
 */
export const themeInitScript = `try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;
