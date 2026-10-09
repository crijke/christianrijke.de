import type { ReactNode } from 'react';
import { profile } from '../content/profile';
import { ExternalLink } from './ExternalLink';

interface HeroProps {
  /** Rendered by Astro so the image is optimised at build time. */
  portrait?: ReactNode;
}

export function Hero({ portrait }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="container-page pt-10 pb-20 sm:pt-20 lg:pt-28 lg:pb-32"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_20rem] lg:gap-20 xl:grid-cols-[1fr_24rem]">
        <div>
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-heading" className="mt-4 text-display font-semibold">
            {profile.name}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl sm:leading-relaxed">
            I build <span className="text-ink">web applications and products</span> and the{' '}
            <span className="text-ink">frontend platforms</span> behind them, from architecture and
            design systems to the services they run on.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a href="#contact" className="button">
              Get in touch
            </a>
            <ul aria-label="Profiles" className="flex gap-6">
              {[profile.links.linkedin, profile.links.github].map((link) => (
                <li key={link.href}>
                  <ExternalLink href={link.href}>{link.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {portrait && (
          <div className="-order-1 size-28 overflow-hidden rounded-full bg-surface sm:size-36 lg:order-none lg:aspect-4/5 lg:size-auto lg:rounded-2xl [&_img]:size-full [&_img]:object-cover [&_img]:object-[50%_15%]">
            {portrait}
          </div>
        )}
      </div>
    </section>
  );
}
