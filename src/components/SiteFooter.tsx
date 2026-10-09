import { profile } from '../content/profile';
import { ExternalLink } from './ExternalLink';

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Astro, React and Tailwind CSS.{' '}
          <ExternalLink href={profile.source} className="link text-muted">
            Source on GitHub
          </ExternalLink>
        </p>
        <ul aria-label="Legal" className="flex gap-6">
          <li>
            <a href="/imprint" className="hover:text-ink">
              Imprint
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:text-ink">
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
