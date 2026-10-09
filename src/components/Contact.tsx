import type { ReactNode } from 'react';
import { profile } from '../content/profile';
import { ExternalLink } from './ExternalLink';
import { Section } from './Section';

interface ContactProps {
  /** Interactive controls next to the email address, hydrated by Astro. */
  actions?: ReactNode;
}

export function Contact({ actions }: ContactProps) {
  return (
    <Section
      id="contact"
      title="Contact"
      intro="Want to talk about a team you’re building, a software project, or anything on this page? I’m happy to hear from you. Email works best."
    >
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={`mailto:${profile.email}`}
          className="text-2xl font-semibold tracking-tight break-all decoration-accent decoration-2 underline-offset-8 hover:underline sm:text-4xl lg:text-5xl"
        >
          {profile.email}
        </a>
        {actions}
      </div>

      <ul aria-label="Profiles" className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-lg">
        {Object.values(profile.links).map((link) => (
          <li key={link.href}>
            <ExternalLink href={link.href}>{link.label}</ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
