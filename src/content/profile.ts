export interface Link {
  label: string;
  href: string;
}

export const profile = {
  name: 'Christian Rijke',
  role: 'Senior Software Engineer',
  email: 'hello@christianrijke.de',
  url: 'https://christianrijke.de',
  description:
    'Senior software engineer with 20 years of experience. Frontend architecture, design systems and complex web applications, plus the full stack behind them.',
  links: {
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christian-rijke/' },
    github: { label: 'GitHub', href: 'https://github.com/crijke' },
    xing: { label: 'Xing', href: 'https://www.xing.com/profile/Christian_Rijke' },
  },
  source: 'https://github.com/crijke/christianrijke.de',
  portraitCredit: { label: 'Studio 23', href: 'https://www.bewerbungsfotos-friedrichshain.com/' },
} as const satisfies {
  links: Record<string, Link>;
  [key: string]: unknown;
};

/** Every section the home page can show, in page order. */
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof sections)[number]['id'];

export interface Fact {
  term: string;
  details: string;
}

export const facts: Fact[] = [
  { term: 'Experience', details: '20 years in software engineering' },
  { term: 'Education', details: 'MSc Computer Science, ETH Zürich' },
  { term: 'Languages', details: 'German & Swiss German (native), English (C1), Dutch (B1)' },
  { term: 'Citizenship', details: 'Swiss & Dutch' },
];

export interface FocusArea {
  title: string;
  description: string;
}

export const focusAreas: FocusArea[] = [
  {
    title: 'Frontend architecture',
    description:
      'Application structure, state and data flow, micro-frontends with Module Federation, and migrating legacy frontends without stopping feature work.',
  },
  {
    title: 'Design systems',
    description:
      'Component libraries that feature teams actually adopt, with accessibility, internationalisation and documentation built in from the start.',
  },
  {
    title: 'Full-stack delivery',
    description:
      'APIs, Node.js and Java services, AWS infrastructure. I’m comfortable owning a feature from the data model to the UI.',
  },
  {
    title: 'AI-assisted engineering',
    description:
      'Agentic coding workflows, shared agent skills and LLM-ready documentation in day-to-day engineering, and prototypes of AI features in the product.',
  },
];
