import { render, screen, within } from '@testing-library/react';
import { formatPeriod, roles } from '../content/work';
import { Work } from './Work';

describe('formatPeriod', () => {
  it('formats single years and ranges', () => {
    expect(formatPeriod({ start: 2019 })).toBe('2019');
    expect(formatPeriod({ start: 2019, end: 2019 })).toBe('2019');
    expect(formatPeriod({ start: 2021, end: 2022 })).toBe('2021–2022');
  });
});

describe('Work', () => {
  it('lists every role with its period', () => {
    render(<Work />);
    const items = within(screen.getByRole('list')).getAllByRole('listitem');

    expect(items).toHaveLength(roles.length);
    expect(items[0]).toHaveTextContent(formatPeriod(roles[0]));
    expect(items[0]).toHaveTextContent(roles[0].organisation);
  });
});

describe('work content', () => {
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
