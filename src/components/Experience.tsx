import { eras, formatPeriod, type Era } from '../content/experience';
import { Section } from './Section';

function eraPeriod(era: Era) {
  const years = era.roles.flatMap((role) => [role.start, role.end ?? role.start]);
  return formatPeriod({ start: Math.min(...years), end: Math.max(...years) });
}

/*
 * The timeline is a single vertical track that runs through all eras. On large screens the
 * era headings sit in a sticky left column and the track starts after it, so the track offset
 * is the column width (16rem) plus the gap (3rem).
 */
const trackOffset = 'left-[5px] lg:left-[calc(16rem+3rem+5px)]';

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Twenty years in roughly three chapters. Between 2016 and 2026, most of these were contract engagements as an independent engineer."
    >
      <div className="timeline relative">
        <span aria-hidden="true" className={`absolute inset-y-0 w-px bg-line ${trackOffset}`} />
        <span
          aria-hidden="true"
          className={`timeline-fill absolute inset-y-0 w-px origin-top bg-accent ${trackOffset}`}
        />

        <div className="space-y-16 lg:space-y-24">
          {eras.map((era) => (
            <div key={era.id} className="grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-12">
              <div className="pl-8 lg:pl-0">
                <h3
                  id={`era-${era.id}`}
                  className="text-lg font-semibold tracking-tight lg:sticky lg:top-[calc(var(--header-height)+2rem)]"
                >
                  {era.title}
                  <span className="mt-1 block font-mono text-sm font-normal text-muted">
                    {eraPeriod(era)}
                  </span>
                </h3>
              </div>

              <ol aria-labelledby={`era-${era.id}`} className="space-y-10">
                {era.roles.map((role) => (
                  <li key={`${role.organisation}-${role.start}`} className="reveal relative pl-8">
                    <span
                      aria-hidden="true"
                      className="timeline-dot absolute top-1.5 left-0 size-[11px] rounded-full border-2 border-accent bg-accent"
                    />
                    <p className="font-mono text-sm text-muted">{formatPeriod(role)}</p>
                    <h4 className="mt-1 font-semibold">{role.organisation}</h4>
                    <p className="text-muted">{role.title}</p>
                    <p className="mt-2 max-w-prose leading-relaxed">{role.summary}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
