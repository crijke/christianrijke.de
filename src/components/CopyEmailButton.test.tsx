import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { CopyEmailButton } from './CopyEmailButton';

const email = 'hello@example.com';

describe('CopyEmailButton', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('copies the address and announces it', async () => {
    const user = userEvent.setup();
    render(<CopyEmailButton email={email} />);

    await user.click(screen.getByRole('button', { name: 'Copy address' }));

    await expect(navigator.clipboard.readText()).resolves.toBe(email);
    expect(screen.getByRole('button', { name: 'Copied' })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Email address copied');
  });

  it('tells the user when copying fails', async () => {
    const user = userEvent.setup();
    render(<CopyEmailButton email={email} />);
    vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(new Error('denied'));

    await user.click(screen.getByRole('button', { name: 'Copy address' }));

    expect(screen.getByRole('status')).toHaveTextContent('Couldn’t copy');
    expect(screen.getByRole('button', { name: 'Copy address' })).toBeInTheDocument();
  });
});
