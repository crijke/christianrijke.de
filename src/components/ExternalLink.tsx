import type { AnchorHTMLAttributes } from 'react';

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> & {
  href: string;
};

/** A link to another site. Opens in the same tab. */
export function ExternalLink({ children, className = 'link', ...props }: ExternalLinkProps) {
  return (
    <a className={className} rel="noopener" {...props}>
      {children}
    </a>
  );
}
