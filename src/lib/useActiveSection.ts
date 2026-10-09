import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently crossing a horizontal line at 40% of the viewport
 * height, or null if none does (e.g. while the hero is in view). Once the page is scrolled to
 * the very bottom, the last section counts as active even if it's too short to reach the line.
 *
 * `ids` must be referentially stable.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (elements.length === 0 || !('IntersectionObserver' in window)) return;

    const intersecting = new Set<string>();
    let atBottom = false;

    const update = () => {
      setActive(atBottom ? ids[ids.length - 1] : (ids.find((id) => intersecting.has(id)) ?? null));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        }
        update();
      },
      { rootMargin: '-40% 0px -59% 0px' },
    );
    elements.forEach((element) => observer.observe(element));

    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (scrolledToBottom !== atBottom) {
        atBottom = scrolledToBottom;
        update();
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [ids]);

  return active;
}
