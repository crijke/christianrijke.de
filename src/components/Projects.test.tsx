import { render, screen, within } from '@testing-library/react';
import { projects } from '../content/projects';
import { Projects } from './Projects';

describe('Projects', () => {
  it('renders every project as a linked heading in its own section', () => {
    render(<Projects />);
    const section = screen.getByRole('region', { name: 'Projects' });

    for (const project of projects) {
      const heading = within(section).getByRole('heading', { level: 3, name: project.name });
      expect(within(heading).getByRole('link')).toHaveAttribute('href', project.href);
    }
  });
});
