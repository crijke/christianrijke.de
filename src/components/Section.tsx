import type { ReactNode } from 'react';
import type { SectionId } from '../content/profile';

interface SectionProps {
  id: SectionId;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}

export function Section({ id, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line">
      <div className="container-page py-20 sm:py-28">
        <header className="mb-12 max-w-2xl sm:mb-16">
          <h2 id={headingId} className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
