import { projects } from '../content/work';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Open-source projects I started or worked on alongside client work."
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} headingLevel={3} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
