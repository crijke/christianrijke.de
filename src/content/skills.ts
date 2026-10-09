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
      'React Router / Remix',
      'TanStack Query',
      'Next.js',
      'Astro',
      'HTML & CSS',
      'Tailwind CSS',
      'MUI',
      'Vite',
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
    ],
  },
  {
    title: 'Testing',
    items: ['Vitest', 'Jest', 'React Testing Library', 'Playwright', 'Cypress', 'JUnit'],
  },
  {
    title: 'Backend & cloud',
    items: [
      'Node.js',
      'Express',
      'AWS (Lambda, CloudFormation, DynamoDB)',
      'Docker',
      'PostgreSQL',
      'Java & Spring Boot',
    ],
  },
  {
    title: 'AI-assisted engineering',
    items: [
      'Agentic coding workflows',
      'Agent skills',
      'LLM-ready knowledge bases',
      'LLM feature prototypes',
    ],
  },
];
