import { homeSections } from '../content/home';
import { useActiveSection } from '../lib/useActiveSection';

const sectionIds = homeSections.map((section) => section.id);

interface SectionNavProps {
  /** Prefix for the anchor links, e.g. "/" on pages other than the home page. */
  basePath?: string;
  className?: string;
}

export function SectionNav({ basePath = '', className }: SectionNavProps) {
  const active = useActiveSection(sectionIds);

  return (
    <nav aria-label="Sections" className={className}>
      <ul className="-mx-1 flex justify-between overflow-x-auto text-sm sm:mx-0 sm:justify-start sm:gap-1">
        {homeSections.map((section) => (
          <li key={section.id}>
            <a
              href={`${basePath}#${section.id}`}
              aria-current={active === section.id ? 'true' : undefined}
              className="block rounded-full px-1 py-1.5 whitespace-nowrap text-muted transition-colors hover:text-ink aria-[current]:text-ink sm:px-3 sm:aria-[current]:bg-surface"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
