import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="mt-16">
      <h2 id={headingId} className="mb-5 font-semibold">
        {title}
      </h2>
      {children}
    </section>
  );
}
