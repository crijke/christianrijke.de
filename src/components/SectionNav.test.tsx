import { act, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { homeSections as sections } from '../content/home';
import { SectionNav } from './SectionNav';

type Callback = (entries: Partial<IntersectionObserverEntry>[]) => void;

let observerCallback: Callback | undefined;

class MockIntersectionObserver {
  constructor(callback: Callback) {
    observerCallback = callback;
  }
  observe() {}
  disconnect() {}
}

function intersect(id: string, isIntersecting: boolean) {
  const target = document.getElementById(id);
  if (!target) throw new Error(`No section with id "${id}"`);
  act(() => {
    observerCallback?.([{ target, isIntersecting }]);
  });
}

describe('SectionNav', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
    for (const { id } of sections) {
      const section = document.createElement('section');
      section.id = id;
      document.body.append(section);
    }
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    observerCallback = undefined;
    document.querySelectorAll('section').forEach((section) => section.remove());
  });

  it('links to every section', () => {
    render(<SectionNav />);
    const nav = screen.getByRole('navigation', { name: 'Sections' });

    for (const section of sections) {
      expect(screen.getByRole('link', { name: section.label })).toHaveAttribute(
        'href',
        `#${section.id}`,
      );
    }
    expect(nav.querySelectorAll('a')).toHaveLength(sections.length);
  });

  it('prefixes links on other pages', () => {
    render(<SectionNav basePath="/" />);

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/#about');
  });

  it('marks the section in view as current', () => {
    render(<SectionNav />);
    expect(screen.queryByRole('link', { current: true })).not.toBeInTheDocument();

    // Independent of which sections the home page config enables.
    const [first, second] = sections;

    intersect(first.id, true);
    expect(screen.getByRole('link', { current: true })).toHaveTextContent(first.label);

    intersect(first.id, false);
    intersect(second.id, true);
    expect(screen.getByRole('link', { current: true })).toHaveTextContent(second.label);

    intersect(second.id, false);
    expect(screen.queryByRole('link', { current: true })).not.toBeInTheDocument();
  });

  it('marks the last section as current once the page is scrolled to the bottom', () => {
    render(<SectionNav />);
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: window.innerHeight,
    });

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(screen.getByRole('link', { current: true })).toHaveTextContent(
      sections[sections.length - 1].label,
    );
  });
});
