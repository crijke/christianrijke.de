import type { Project } from '../content/work';
import { ExternalLink } from './ExternalLink';

interface ProjectCardProps {
  project: Project;
  /** Depends on where the card sits in the document outline. */
  headingLevel: 3 | 4;
}

export function ProjectCard({ project, headingLevel }: ProjectCardProps) {
  const Heading = `h${headingLevel}` as const;

  return (
    <article className="reveal flex h-full flex-col rounded-2xl bg-surface p-6 sm:p-8">
      <p className="eyebrow">
        {project.role} · {project.period}
      </p>
      <Heading className="mt-3 text-lg font-semibold">
        <ExternalLink href={project.href}>{project.name}</ExternalLink>
      </Heading>
      <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
      {project.stack && (
        <ul aria-label="Technologies" className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full bg-paper px-3 py-1 font-mono text-xs text-muted">
              {tech}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
