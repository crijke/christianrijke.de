import { render, screen, within } from '@testing-library/react';
import { eras, formatPeriod } from '../content/experience';
import { Experience } from './Experience';

describe('formatPeriod', () => {
  it('formats single years and ranges', () => {
    expect(formatPeriod({ start: 2019 })).toBe('2019');
    expect(formatPeriod({ start: 2019, end: 2019 })).toBe('2019');
    expect(formatPeriod({ start: 2021, end: 2022 })).toBe('2021–2022');
  });
});

describe('Experience', () => {
  it('renders one labelled list of roles per era', () => {
    render(<Experience />);

    for (const era of eras) {
      const list = screen.getByRole('list', { name: new RegExp(era.title) });
      expect(within(list).getAllByRole('listitem')).toHaveLength(era.roles.length);
    }
  });

  it('derives the era period from its roles', () => {
    render(<Experience />);

    expect(screen.getByRole('heading', { name: /Java enterprise & payments/ })).toHaveTextContent(
      '2006–2012',
    );
  });
});

describe('experience content', () => {
  const roles = eras.flatMap((era) => era.roles);

  it('lists roles newest first', () => {
    const starts = roles.map((role) => role.start);
    expect(starts).toEqual([...starts].sort((a, b) => b - a));
  });

  it('has no role ending before it starts', () => {
    for (const role of roles) {
      expect(role.end ?? role.start).toBeGreaterThanOrEqual(role.start);
    }
  });
});
