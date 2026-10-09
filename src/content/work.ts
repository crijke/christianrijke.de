export interface CaseStudy {
  id: string;
  title: string;
  organisation: string;
  period: string;
  context: string;
  contribution: string;
  outcome: string;
  stack: string[];
}

export interface Project {
  name: string;
  period: string;
  role: string;
  description: string;
  href: string;
  stack?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'lexware-micro-frontends',
    title: 'From separate apps to one product',
    organisation: 'Haufe · Lexware Office',
    period: '2023–2026',
    context:
      'Lexware Office was made up of separate, linked single-page apps owned by different teams. Users noticed every boundary between them.',
    contribution:
      'Validated the approach with proofs of concept, designed a micro-frontend architecture based on Module Federation with a shared app shell, and drove the migration together with the feature teams. Maintained and modernised the MUI-based design system those teams build on.',
    outcome:
      'Teams share runtime components and ship one coherent product instead of visible app boundaries.',
    stack: ['TypeScript', 'React', 'Module Federation', 'MUI', 'AWS'],
  },
  {
    id: 'scout24-identity',
    title: 'Personal accounts for B2B customers',
    organisation: 'Scout24',
    period: '2021–2022',
    context:
      'B2B customers shared logins across their employees, which no longer met current security standards.',
    contribution:
      'Defined the frontend architecture of the single-page app that moves customers to individual accounts with 2FA. On the backend, helped introduce Okta as the company-wide identity platform: integration with the API gateway, auth server and SSO service, plus batch and real-time migration services for all user accounts.',
    outcome:
      'One identity platform across the company, and personal, 2FA-secured accounts for every employee of a B2B customer.',
    stack: ['TypeScript', 'React', 'Java', 'Spring Boot', 'DynamoDB', 'AWS'],
  },
  {
    id: 'edeka-assortment-planning',
    title: 'Assortment planning for EDEKA',
    organisation: 'IBM iX',
    period: '2020–2021',
    context:
      'A data-heavy planning application had grown out of a prototype with architectural and performance problems, and two teams were about to build on it.',
    contribution:
      'Fixed the critical issues, specified a new frontend architecture for both teams, implemented the application layer and defined the application-level API with the backend team. Improved automated and manual testing practices.',
    outcome:
      'Both teams worked on a shared, documented architecture with a clear contract to the backend.',
    stack: ['JavaScript', 'React', 'Redux', 'Material UI'],
  },
  {
    id: 'lufthansa-platform',
    title: 'A shared frontend platform for lufthansa.com',
    organisation: 'IBM',
    period: '2017–2018',
    context:
      'Lufthansa rewrote its legacy web platform as a common React frontend and design system for lufthansa.com and its Star Alliance partner airlines.',
    contribution:
      'Specified and implemented the integration of React components into Adobe Experience Manager. Led architecture improvements such as common API error handling, schema-based validation and wrappers for legacy components, and implemented WCAG accessibility requirements.',
    outcome:
      'One accessible component platform for lufthansa.com and partner airline sites, integrated into the existing CMS.',
    stack: ['JavaScript', 'React', 'Redux', 'Adobe Experience Manager'],
  },
];

export const projects: Project[] = [
  {
    name: 'Ernte Teilen',
    period: 'Since 2013',
    role: 'Co-initiator & maintainer',
    description:
      'A map that connects people with community-supported agriculture farms across Germany. I’m currently relaunching the frontend, built end-to-end with agentic AI workflows.',
    href: 'https://ernte-teilen.org',
    stack: ['TypeScript', 'React', 'TanStack Query', 'Tailwind CSS', 'Node.js', 'Express'],
  },
  {
    name: 'Datenguide',
    period: '2019',
    role: 'Full-stack engineer',
    description:
      'Made official German statistics accessible to journalists and the public: a GraphQL and REST API on top of Federal Statistical Office data, and a web UI for queries. Funded by the Prototype Fund.',
    href: 'https://github.com/datenguide',
    stack: ['GraphQL', 'Node.js', 'React', 'Next.js', 'Gatsby', 'Material UI'],
  },
];
