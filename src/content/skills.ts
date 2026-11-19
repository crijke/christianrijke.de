export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'TypeScript',
      'React',
      'Next.js (SSR & static)',
      'React Router / Remix',
      'TanStack Query',
      'Astro',
      'HTML & CSS',
      'Tailwind CSS',
      'MUI',
      'Vite',
    ],
  },
  {
    title: 'Backend & data',
    items: [
      'Node.js',
      'Express',
      'REST & GraphQL APIs',
      'Next.js API routes',
      'PostgreSQL',
      'SQL schema design & migrations',
      'Knex & Kysely',
      'Java & Spring Boot',
      'JPA / Hibernate',
    ],
  },
  {
    title: 'Architecture',
    items: [
      'Micro-frontends (Module Federation)',
      'Design systems & component libraries',
      'SPA architecture',
      'API design',
      'Accessibility (WCAG)',
      'Internationalisation',
      'Headless CMS integration (Prismic, AEM)',
    ],
  },
  {
    title: 'Cloud & delivery',
    items: [
      'AWS (Lambda, CloudFormation, DynamoDB)',
      'Docker',
      'GitHub Actions',
      'Bitbucket',
      'Jenkins',
    ],
  },
  {
    title: 'Testing',
    items: ['Vitest', 'Jest', 'React Testing Library', 'Playwright', 'Cypress', 'JUnit'],
  },
  {
    title: 'AI-assisted engineering',
    items: [
      'Claude Code',
      'Agentic coding workflows',
      'Agent skills',
      'LLM-ready knowledge bases',
      'LLM feature prototypes',
    ],
  },
];
