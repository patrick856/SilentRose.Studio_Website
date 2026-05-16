export type ContactFormPayload = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

function getFormspreeEndpoint(): string | null {
  const id = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim();
  if (!id) return null;
  return `https://formspree.io/f/${id}`;
}

export function isFormspreeConfigured(): boolean {
  return getFormspreeEndpoint() !== null;
}

export async function submitToFormspree(payload: ContactFormPayload): Promise<void> {
  const endpoint = getFormspreeEndpoint();
  if (!endpoint) {
    throw new Error('FORMSPREE_NOT_CONFIGURED');
  }

  const body = {
    _subject: `SilentRose inquiry — ${payload.name} (${payload.service})`,
    _replyto: payload.email,
    name: payload.name,
    email: payload.email,
    service: payload.service,
    budget: payload.budget,
    message: payload.message || '(No message provided)',
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    throw new Error(data?.error ?? `Formspree returned ${res.status}`);
  }
}
