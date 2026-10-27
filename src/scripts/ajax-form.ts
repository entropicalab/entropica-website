// ============================================================
// formspree forms, submitted in place
// ------------------------------------------------------------
// the site is static, so the page can't read ?sent=1 after a
// redirect, and formspree only honours custom redirects on paid
// plans. instead: post with fetch, swap the form for the on-page
// confirmation, and log a ga4 lead only once formspree accepts it.
// without js the form still posts normally and formspree shows
// its own thank-you page, so no inquiry is lost either way.
//
// markup contract:
//   <form data-ajax data-sent="<id>" data-lead-type="<type>">
//     ... <p data-form-error hidden>...</p>
//   </form>
//   <div id="<id>" hidden tabindex="-1">confirmation</div>
// ============================================================

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

document.querySelectorAll<HTMLFormElement>('form[data-ajax]').forEach((form) => {
  const sent = form.dataset.sent ? document.getElementById(form.dataset.sent) : null;
  const error = form.querySelector<HTMLElement>('[data-form-error]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button) button.disabled = true;
    if (error) error.hidden = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(`formspree ${res.status}`);

      form.hidden = true;
      if (sent) {
        sent.hidden = false;
        sent.focus();
      }
      window.gtag?.('event', 'generate_lead', { lead_type: form.dataset.leadType ?? 'general' });
    } catch {
      if (error) error.hidden = false;
      if (button) button.disabled = false;
    }
  });
});

export {};
