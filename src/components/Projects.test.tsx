import { render, screen, within } from '@testing-library/react';
import { projects } from '../content/work';
import { Projects } from './Projects';
import { Work } from './Work';

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

describe('Work', () => {
  it('lists open-source projects below the case studies by default', () => {
    render(<Work />);

    expect(screen.getByRole('heading', { level: 3, name: 'Open source' })).toBeInTheDocument();
    for (const project of projects) {
      expect(screen.getByRole('heading', { level: 4, name: project.name })).toBeInTheDocument();
    }
  });

  it('leaves projects out when they have their own section', () => {
    render(<Work showProjects={false} />);

    expect(screen.queryByRole('heading', { name: 'Open source' })).not.toBeInTheDocument();
    for (const project of projects) {
      expect(screen.queryByRole('heading', { name: project.name })).not.toBeInTheDocument();
    }
  });
});
