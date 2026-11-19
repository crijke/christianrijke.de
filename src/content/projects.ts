export interface Project {
  name: string;
  period: string;
  description: string;
  href: string;
}

export const projects: Project[] = [
  {
    name: 'Ernte Teilen',
    period: 'since 2013',
    description:
      'An interactive map that connects people with community-supported agriculture farms across Germany, Austria and Switzerland, run together with partner organisations like Netzwerk Solidarische Landwirtschaft, FRACP and Solawi Leben. I co-initiated it and still maintain it.',
    href: 'https://ernte-teilen.org',
  },
  {
    name: 'Datenguide',
    period: '2019',
    description:
      'Made official German statistics accessible to journalists and the public: a GraphQL and REST API on top of Federal Statistical Office data, and a web UI for queries. Funded by the Prototype Fund.',
    href: 'https://github.com/datenguide',
  },
];
