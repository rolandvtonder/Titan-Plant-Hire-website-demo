import {clamp, lockScroll, onFrame, startScroll} from '../lib/scroll';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
startScroll(reduced);

/* ---------------------------------------------------------------- Menu --
 * Three slabs wipe in from the right one after another (ink, orange,
 * paper); the paper one holds the links. Hovering a link ripples it like
 * heat haze off hot tar — an SVG turbulence + displacement filter animated
 * per frame only while something is hovered. */
function initMenu() {
  const root = document.querySelector<HTMLElement>('[data-menu]');
  const toggles = document.querySelectorAll<HTMLButtonElement>('[data-menu-toggle]');
  if (!root || !toggles.length) return;
  const nav = root.querySelector<HTMLElement>('nav')!;
  const links = [...root.querySelectorAll<HTMLAnchorElement>('[data-menu-link]')];
  const turb = root.querySelector<SVGFETurbulenceElement>('feTurbulence');
  const disp = root.querySelector<SVGFEDisplacementMapElement>('feDisplacementMap');
  let open = false;
  let opener: HTMLElement | null = null;

  const set = (next: boolean) => {
    open = next;
    root.classList.toggle('is-open', open);
    root.toggleAttribute('inert', !open);
    root.setAttribute('aria-hidden', String(!open));
    document.documentElement.classList.toggle('menu-open', open);
    toggles.forEach((t) => {
      t.setAttribute('aria-expanded', String(open));
      const label = t.querySelector('[data-menu-label]');
      if (label) label.textContent = open ? 'Close' : 'Menu';
    });
    lockScroll(open);
    if (open) window.setTimeout(() => links[0]?.focus({preventScroll: true}), 420);
    else opener?.focus({preventScroll: true});
  };

  toggles.forEach((t) =>
    t.addEventListener('click', () => {
      opener = t;
      set(!open);
    }),
  );
  root.querySelector('[data-menu-close]')?.addEventListener('click', () => set(false));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) set(false);
    // Keep Tab inside the open menu.
    if (e.key === 'Tab' && open) {
      const f = [...nav.querySelectorAll<HTMLElement>('a,button')];
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Heat-haze ripple
  let raf = 0;
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
    links.forEach((l) => {
      l.style.filter = 'none';
      l.classList.remove('is-dim');
    });
  };
  const start = (active: HTMLAnchorElement) => {
    links.forEach((l) => {
      l.style.filter = l === active && !reduced ? 'url(#haze)' : 'none';
      l.classList.toggle('is-dim', l !== active);
    });
    if (reduced || raf) return;
    let t = 0;
    let amp = 0;
    const loop = () => {
      t += 0.016;
      amp = Math.min(1, amp + 0.08);
      turb?.setAttribute('baseFrequency', `${(0.012 + Math.sin(t * 2.1) * 0.004).toFixed(4)} ${(0.06 + Math.cos(t * 1.7) * 0.02).toFixed(4)}`);
      turb?.setAttribute('seed', String(Math.floor(t * 12) % 50));
      disp?.setAttribute('scale', (amp * 8).toFixed(2));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
  };
  links.forEach((l) => {
    l.addEventListener('mouseenter', () => start(l));
    l.addEventListener('focus', () => start(l));
  });
  nav.querySelector('ul')?.addEventListener('mouseleave', stop);
  nav.addEventListener('focusout', (e) => {
    if (!nav.contains(e.relatedTarget as Node)) stop();
  });
}

/* ---------------------------------------------------------------- Hero --
 * As you scroll past, the hero photo blurs, dims and pulls back — a camera
 * move rather than a fade. */
function initHeroes() {
  document.querySelectorAll<HTMLElement>('[data-hero]').forEach((el) => {
    const stage = el.querySelector<HTMLElement>('[data-hero-stage]');
    if (!stage || reduced) return;
    onFrame(() => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -50) return;
      const p = clamp(-r.top / Math.max(1, r.height));
      stage.style.transform = `translate3d(0, ${(p * r.height * 0.45).toFixed(1)}px, 0) scale(${(1 - p * 0.08).toFixed(4)})`;
      stage.style.filter = p > 0.01 ? `blur(${(p * 16).toFixed(1)}px) brightness(${(1 - p * 0.5).toFixed(3)})` : 'none';
    });
  });
}

/* ------------------------------------------------------------- Reveals -- */
function initReveals() {
  const els = document.querySelectorAll('[data-reveal]');
  if (reduced) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }),
    {rootMargin: '0px 0px -8% 0px'},
  );
  els.forEach((el) => io.observe(el));
}

/* -------------------------------------------------------------- Panels --
 * The fleet: tall panels slide in from the right one after another the
 * first time the section is a quarter on screen. */
function initPanels() {
  document.querySelectorAll<HTMLElement>('[data-panels]').forEach((el) => {
    if (reduced) {
      el.classList.add('is-shown');
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        el.classList.add('is-shown');
        io.disconnect();
      },
      {threshold: 0.2},
    );
    io.observe(el);
  });
}

/* ------------------------------------------------------------ Parallax --
 * Images drift a little against their frame while on screen. */
function initParallax() {
  if (reduced) return;
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((img) => {
    const frame = img.parentElement!;
    const k = parseFloat(img.dataset.parallax || '0.12');
    onFrame(() => {
      const r = frame.getBoundingClientRect();
      const h = window.innerHeight;
      if (r.bottom < 0 || r.top > h) return;
      const p = (r.top + r.height / 2 - h / 2) / h;
      img.style.transform = `translate3d(0, ${(-p * r.height * k).toFixed(1)}px, 0) scale(${1 + k * 1.6})`;
    });
  });
}

/* ------------------------------------------------------------- Fit text --
 * Sizes one line of text so it spans its parent's content box exactly. */
function initFit() {
  document.querySelectorAll<HTMLElement>('[data-fit]').forEach((el) => {
    const parent = el.parentElement!;
    const PROBE = 100;
    const fit = () => {
      el.style.fontSize = `${PROBE}px`;
      const s = getComputedStyle(parent);
      const avail = parent.clientWidth - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight);
      const natural = el.offsetWidth;
      if (natural > 0) el.style.fontSize = `${(PROBE * avail) / natural}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    new ResizeObserver(fit).observe(parent);
  });
}

/* ---------------------------------------------------------- Before/after --
 * A native range input drives the split, so it works with keyboard,
 * mouse and touch without any custom drag code. */
function initBeforeAfter() {
  document.querySelectorAll<HTMLElement>('[data-ba]').forEach((el) => {
    const input = el.querySelector<HTMLInputElement>('input[type=range]')!;
    const apply = () => el.style.setProperty('--split', `${input.value}%`);
    input.addEventListener('input', apply);
    apply();
  });
}

/* ----------------------------------------------------------- Quote form --
 * No server needed: the form builds a WhatsApp message to the office
 * number and opens it, so quotes land where the team already works. */
function initQuoteForms() {
  document.querySelectorAll<HTMLFormElement>('[data-quote-form]').forEach((form) => {
    const number = form.dataset.whatsapp!;
    const status = form.querySelector<HTMLElement>('[data-form-status]');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fields = [...form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[name]')];
      let firstBad: HTMLElement | null = null;
      fields.forEach((f) => {
        const err = form.querySelector<HTMLElement>(`[data-error-for="${f.name}"]`);
        const bad = !f.checkValidity();
        f.setAttribute('aria-invalid', String(bad));
        if (err) err.hidden = !bad;
        if (bad && !firstBad) firstBad = f;
      });
      if (firstBad) {
        (firstBad as HTMLElement).focus();
        if (status) status.textContent = 'Please fix the highlighted fields.';
        return;
      }
      const data = new FormData(form);
      const lines = [
        'Hi Titan Plant Hire, I would like a quote.',
        `Name: ${data.get('name')}`,
        `Phone: ${data.get('phone')}`,
        `Service: ${data.get('service')}`,
        data.get('suburb') ? `Area / suburb: ${data.get('suburb')}` : '',
        data.get('date') ? `Date needed: ${data.get('date')}` : '',
        data.get('details') ? `Details: ${data.get('details')}` : '',
      ].filter(Boolean);
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
      if (status) status.textContent = 'WhatsApp has opened with your request — just press send.';
    });
    form.querySelectorAll<HTMLInputElement>('[name]').forEach((f) =>
      f.addEventListener('blur', () => {
        if (f.getAttribute('aria-invalid') !== 'true') return;
        const ok = f.checkValidity();
        f.setAttribute('aria-invalid', String(!ok));
        const err = form.querySelector<HTMLElement>(`[data-error-for="${f.name}"]`);
        if (err) err.hidden = ok;
      }),
    );
  });
}

/* ------------------------------------------------------------ Lightbox --
 * Gallery tiles are plain links to the large photo; with JS they open in a
 * native <dialog> instead (Esc and focus return handled by the browser). */
function initLightbox() {
  const dlg = document.querySelector<HTMLDialogElement>('[data-lightbox-dialog]');
  if (!dlg) return;
  const img = dlg.querySelector('img')!;
  const cap = dlg.querySelector('figcaption')!;
  document.querySelectorAll<HTMLAnchorElement>('[data-lightbox]').forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      img.src = a.href;
      img.alt = a.dataset.caption || '';
      cap.textContent = a.dataset.caption || '';
      dlg.showModal();
      lockScroll(true);
    }),
  );
  dlg.querySelector('[data-lightbox-close]')?.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) dlg.close();
  });
  dlg.addEventListener('close', () => lockScroll(false));
}

initMenu();
initLightbox();
initHeroes();
initReveals();
initPanels();
initParallax();
initFit();
initBeforeAfter();
initQuoteForms();
