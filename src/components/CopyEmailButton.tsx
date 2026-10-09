import { useEffect, useState } from 'react';

type Status = 'idle' | 'copied' | 'failed';

const announcements: Record<Status, string> = {
  idle: '',
  copied: 'Email address copied to the clipboard.',
  failed: 'Couldn’t copy the email address. Please copy it manually.',
};

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (status === 'idle') return;
    const timeout = setTimeout(() => setStatus('idle'), 2500);
    return () => clearTimeout(timeout);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
  }

  return (
    <>
      <button type="button" onClick={copy} className="button-secondary">
        {status === 'copied' ? 'Copied' : 'Copy address'}
      </button>
      <span role="status" className="sr-only">
        {announcements[status]}
      </span>
    </>
  );
}
