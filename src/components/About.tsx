import { facts, focusAreas } from '../content/profile';
import { Section } from './Section';

interface AboutProps {
  showFocusAreas?: boolean;
}

export function About({ showFocusAreas = true }: AboutProps) {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-20 xl:grid-cols-[1fr_24rem]">
        <div className="max-w-prose space-y-5 text-lg leading-relaxed">
          <p>
            I studied computer science at ETH Zürich and started out in Java enterprise software:
            point-of-sale systems for Swiss Federal Railways and PostFinance, then payment
            processing at SIX Group. In 2013 I moved to Berlin, worked on open-source project
            management software and built the service backend for a line of Wi-Fi speakers.
          </p>
          <p>
            Since then I’ve mostly built web applications in TypeScript, often across the whole
            stack: React and Next.js frontends, Node.js and Express services, REST and GraphQL APIs,
            SQL databases with Knex or Kysely, and infrastructure on AWS. In Java projects I work
            with Spring Boot and JPA.
          </p>
          <p>
            My deepest expertise is on the frontend: applications with real complexity, the design
            systems behind them, and architectures that let several teams ship into one product.
            Most recently I spent three years working with the frontend platform team of Lexware
            Office.
          </p>
          <p>
            I like owning a feature from the data model to the UI, and agentic AI tools have become
            a normal part of how I build software.
          </p>
        </div>
        <dl className="h-fit divide-y divide-line rounded-2xl bg-surface px-6 py-2">
          {facts.map((fact) => (
            <div key={fact.term} className="py-4">
              <dt className="eyebrow">{fact.term}</dt>
              <dd className="mt-1">{fact.details}</dd>
            </div>
          ))}
        </dl>
      </div>

      {showFocusAreas && (
        <>
          <h3 className="mt-20 text-xl font-semibold tracking-tight">What I focus on</h3>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {focusAreas.map((area) => (
              <li key={area.title} className="bg-paper p-6 sm:p-8">
                <h4 className="font-semibold">{area.title}</h4>
                <p className="mt-2 leading-relaxed text-muted">{area.description}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}
