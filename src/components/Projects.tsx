import { projects } from '../content/projects';
import { ExternalLink } from './ExternalLink';
import { Section } from './Section';

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.name}>
            <h3 className="inline font-medium">
              <ExternalLink href={project.href}>{project.name}</ExternalLink>
            </h3>{' '}
            <span className="text-sm text-muted">{project.period}</span>
            <p className="mt-1 text-muted">{project.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
