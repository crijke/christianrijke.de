export interface Link {
  label: string;
  href: string;
}

export const profile = {
  name: 'Christian Rijke',
  role: 'Software Engineer',
  location: 'Berlin',
  email: 'hello@christianrijke.de',
  url: 'https://christianrijke.de',
  description:
    'Software engineer in Berlin. Twenty years of building software, most of it for the web: TypeScript, React, Node.js, APIs and SQL, frontend architecture and design systems.',
  links: {
    github: { label: 'GitHub', href: 'https://github.com/crijke' },
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christian-rijke/' },
    xing: { label: 'Xing', href: 'https://www.xing.com/profile/Christian_Rijke' },
  },
  source: 'https://github.com/crijke/christianrijke.de',
  portraitCredit: { label: 'Studio 23', href: 'https://www.bewerbungsfotos-friedrichshain.com/' },
} as const satisfies {
  links: Record<string, Link>;
  [key: string]: unknown;
};
