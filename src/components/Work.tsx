import { caseStudies, projects, type CaseStudy } from '../content/work';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const headingId = `work-${study.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="reveal flex flex-col rounded-2xl border border-line p-6 sm:p-8"
    >
      <p className="eyebrow">
        {study.organisation} · {study.period}
      </p>
      <h3 id={headingId} className="mt-3 text-xl font-semibold tracking-tight">
        {study.title}
      </h3>
      <dl className="mt-6 space-y-4 leading-relaxed">
        <div>
          <dt className="text-sm font-medium text-muted">Context</dt>
          <dd className="mt-1">{study.context}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-muted">What I did</dt>
          <dd className="mt-1">{study.contribution}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-muted">Outcome</dt>
          <dd className="mt-1">{study.outcome}</dd>
        </div>
      </dl>
      <ul aria-label="Technologies" className="mt-auto flex flex-wrap gap-2 pt-6">
        {study.stack.map((tech) => (
          <li key={tech} className="rounded-full bg-surface px-3 py-1 font-mono text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

interface WorkProps {
  /** List open-source projects below the case studies. */
  showProjects?: boolean;
}

export function Work({ showProjects = true }: WorkProps) {
  return (
    <Section
      id="work"
      title="Selected work"
      intro="A few projects that show the kind of problems I like to work on."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>

      {showProjects && (
        <>
          <h3 className="mt-20 text-xl font-semibold tracking-tight">Open source</h3>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.name}>
                <ProjectCard project={project} headingLevel={4} />
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}
