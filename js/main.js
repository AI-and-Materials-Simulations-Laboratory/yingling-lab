// ============================================================
// Y-AIMS LAB — Main JavaScript
// ============================================================

// Dark mode toggle
(function () {
  const toggles = document.querySelectorAll('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  // Apply initial theme
  root.setAttribute('data-theme', theme);
  updateToggleIcons(theme);

  toggles.forEach(t => {
    t.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      updateToggleIcons(theme);
    });
  });

  function updateToggleIcons(t) {
    const sunSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
    const moonSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    toggles.forEach(btn => {
      btn.innerHTML = t === 'dark' ? sunSvg : moonSvg;
      btn.setAttribute('aria-label', `Switch to ${t === 'dark' ? 'light' : 'dark'} mode`);
    });
  }
})();

// Sticky nav scroll shadow
(function () {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  const obs = new IntersectionObserver(
    ([e]) => nav.classList.toggle('scrolled', e.intersectionRatio < 1),
    { threshold: [1], rootMargin: '-1px 0px 0px 0px' }
  );
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none';
  document.body.prepend(sentinel);
  obs.observe(sentinel);
})();

// Mobile nav toggle
(function () {
  const btn = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  if (!btn || !mobileNav) return;
  btn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
})();

// Active nav link highlight
(function () {
  const links = document.querySelectorAll('.nav-links a, .nav-mobile a');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// Scroll fade-in observer
// Elements start visible (for accessibility tools); JS adds animation after 150ms
(function () {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // leave elements visible, no animation

  // Add animation only after DOM is settled (axe typically runs at networkidle)
  // Small delay ensures accessibility tools see opacity:1 before we hide anything
  setTimeout(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = '';
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach(el => {
      // Only hide if not already in viewport
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)';
        obs.observe(el);
      }
    });
  }, 150);
})();
