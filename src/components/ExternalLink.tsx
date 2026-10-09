import type { AnchorHTMLAttributes } from 'react';

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> & {
  href: string;
};

/** A link to another site. Opens in the same tab and marks the external target visually. */
export function ExternalLink({ children, className = 'link', ...props }: ExternalLinkProps) {
  return (
    <a className={className} rel="noopener" {...props}>
      {children}
      <span aria-hidden="true" className="ml-0.5 inline-block text-[0.85em] text-muted">
        ↗
      </span>
    </a>
  );
}
