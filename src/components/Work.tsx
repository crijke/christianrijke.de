import { formatPeriod, roles } from '../content/work';
import { Section } from './Section';

export function Work() {
  return (
    <Section id="work" title="Work">
      <p className="mb-6 text-muted">
        Between 2016 and 2026, most of these were contract engagements as an independent engineer.
      </p>
      <ol className="space-y-5">
        {roles.map((role) => (
          <li
            key={`${role.organisation}-${role.start}`}
            className="grid gap-x-6 sm:grid-cols-[6.5rem_1fr]"
          >
            <p className="text-sm text-muted tabular-nums sm:pt-0.5">{formatPeriod(role)}</p>
            <div>
              <h3>
                <span className="font-medium">{role.organisation}</span>
                <span className="text-muted">
                  {/* Keeps the separator on the organisation's line when the title wraps. */}
                  {' · '}
                  {role.title}
                </span>
              </h3>
              <p className="mt-0.5 text-sm/6 text-muted">{role.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
