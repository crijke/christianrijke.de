import { skillGroups } from '../content/skills';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <div key={group.title}>
            <h3 id={`skills-${index}`} className="font-semibold">
              {group.title}
            </h3>
            <ul aria-labelledby={`skills-${index}`} className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
