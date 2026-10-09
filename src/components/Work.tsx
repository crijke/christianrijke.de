import { caseStudies, projects, type CaseStudy } from '../content/work';
import { ExternalLink } from './ExternalLink';
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

export function Work() {
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

      <h3 className="mt-20 text-xl font-semibold tracking-tight">Open source</h3>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name} className="reveal rounded-2xl bg-surface p-6 sm:p-8">
            <p className="eyebrow">
              {project.role} · {project.period}
            </p>
            <h4 className="mt-3 text-lg font-semibold">
              <ExternalLink href={project.href}>{project.name}</ExternalLink>
            </h4>
            <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
