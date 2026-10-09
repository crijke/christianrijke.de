export interface Role {
  start: number;
  end?: number;
  organisation: string;
  title: string;
  summary: string;
}

export interface Era {
  id: string;
  title: string;
  roles: Role[];
}

/** Career history grouped into eras, newest first. */
export const eras: Era[] = [
  {
    id: 'frontend-platforms',
    title: 'Frontend platforms & architecture',
    roles: [
      {
        start: 2023,
        end: 2026,
        organisation: 'Haufe · Lexware Office',
        title: 'Senior Frontend Engineer',
        summary:
          'Frontend platform team: design system, micro-frontend architecture with a shared app shell, frontend standards, and agentic coding workflows across engineering.',
      },
      {
        start: 2023,
        organisation: 'Netzwerk Solidarische Landwirtschaft',
        title: 'Full-Stack Engineer',
        summary:
          'New React frontend for Ernte Teilen, email campaign API and UI, and user account management.',
      },
      {
        start: 2021,
        end: 2022,
        organisation: 'Scout24',
        title: 'Full-Stack Engineer',
        summary:
          'Account migration SPA, company-wide Okta rollout, API usage reporting and a self-service portal for B2B customers.',
      },
      {
        start: 2020,
        end: 2021,
        organisation: 'IBM iX Berlin',
        title: 'Frontend Architect & Engineer',
        summary:
          'Frontend architecture for EDEKA’s assortment planning application; relaunch of the Basler Versicherungen corporate websites.',
      },
      {
        start: 2019,
        end: 2020,
        organisation: 'Datenguide',
        title: 'Full-Stack Engineer',
        summary:
          'GraphQL and REST APIs for official statistics, a React query UI and the project website.',
      },
      {
        start: 2019,
        organisation: 'XING Marketing Solutions',
        title: 'Frontend Engineer',
        summary:
          'Unified employer profile pages with company news and native ads, including ad preview components.',
      },
      {
        start: 2018,
        end: 2019,
        organisation: 'Sparwelt (RTL Group)',
        title: 'Frontend Engineer',
        summary:
          'Company-wide design system in Vue.js and the first e-commerce products relaunched on it.',
      },
      {
        start: 2017,
        end: 2018,
        organisation: 'IBM Hamburg',
        title: 'Frontend Engineer',
        summary:
          'React platform and design system for a major German airline, integrated into Adobe Experience Manager.',
      },
    ],
  },
  {
    id: 'full-stack',
    title: 'Full-stack & services',
    roles: [
      {
        start: 2017,
        organisation: 'Lautsprecher Teufel',
        title: 'Full-Stack Engineer',
        summary:
          'Test automation DSL for QA on top of the device APIs, and REST APIs for low-level hardware features.',
      },
      {
        start: 2016,
        end: 2017,
        organisation: 'Springer Nature',
        title: 'Full-Stack Engineer',
        summary:
          'Migrated a monolithic J2EE shop and publishing platform to containerised services, with UI tests, performance testing and monitoring.',
      },
      {
        start: 2014,
        end: 2016,
        organisation: 'Lautsprecher Teufel',
        title: 'Full-Stack Developer',
        summary:
          'Service architecture for the Raumfeld Wi-Fi speakers: update and media servers, analytics, internal dashboards and a desktop streaming app.',
      },
      {
        start: 2012,
        end: 2013,
        organisation: 'Finn GmbH · OpenProject',
        title: 'Full-Stack Developer',
        summary:
          'Plugin architecture on Ruby on Rails, an AngularJS frontend prototype and performance analysis for the open-source project management suite.',
      },
    ],
  },
  {
    id: 'java-enterprise',
    title: 'Java enterprise & payments',
    roles: [
      {
        start: 2009,
        end: 2012,
        organisation: 'SIX Group',
        title: 'Application Engineer',
        summary:
          'SEPA payment processing and batch performance for a European card acquiring platform; CI, releases and deployment automation.',
      },
      {
        start: 2008,
        end: 2009,
        organisation: 'NICTA',
        title: 'Software Engineer',
        summary:
          'Eclipse-based IDE for the Goanna static analysis and verification tool, built remotely for the research team in Sydney.',
      },
      {
        start: 2006,
        end: 2008,
        organisation: 'BSI',
        title: 'Software Engineer',
        summary:
          'Point-of-sale and CRM clients for Swiss Federal Railways, PostFinance and Swiss Life.',
      },
    ],
  },
];

export function formatPeriod({ start, end }: Pick<Role, 'start' | 'end'>): string {
  return end && end !== start ? `${start}–${end}` : String(start);
}
