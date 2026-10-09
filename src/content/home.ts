import { sections, type SectionId } from './profile';

/**
 * Variants of the home page, for comparing layouts. The section navigation is derived from
 * these flags, so it never links to a section that isn't on the page.
 */
export const home = {
  /** Show the "What I focus on" grid in About. */
  showFocusAreas: false,
  /** Show the "Selected work" case studies. */
  showWork: false,
  /**
   * Show open-source projects as their own section. When false, they appear at the end of
   * "Selected work" instead (if that is shown).
   */
  showProjects: true,
  /** Show the reading-progress strip along the bottom of the header (on every page). */
  showScrollProgress: true,
};

const hidden = new Set<SectionId>([
  ...(home.showWork ? [] : (['work'] as const)),
  ...(home.showProjects ? [] : (['projects'] as const)),
]);

/** The sections on the home page, in page order. */
export const homeSections = sections.filter((section) => !hidden.has(section.id));
