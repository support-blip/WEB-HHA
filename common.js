/* ============================================================
   HHA — common.js
   Lógica compartida por TODAS las páginas del sitio:
   header, menú móvil, reveal-on-scroll, acordeón FAQ.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- PRELOADER: TELÓN BLANCO ENTRE PÁGINAS ---------- */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const CURTAIN_DURATION = 650; // ms — debe coincidir con la transición en CSS

    function setCurtain(transform, animate) {
      if (!animate) preloader.classList.add('no-transition');
      preloader.style.transform = transform;
      if (!animate) {
        void preloader.offsetHeight; // fuerza reflow para que el próximo cambio sí anime
        preloader.classList.remove('no-transition');
      }
    }

    let revealed = false;
    function revealCurrentPage() {
      if (revealed) return; // asegura que el telón se ejecute UNA sola vez
      revealed = true;
      setCurtain('translateY(0)', false); // punto de partida: cubriendo, sin animar
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setCurtain('translateY(100%)', true); // el telón sigue bajando y sale, revelando el contenido
          setTimeout(() => {
            setCurtain('translateY(-100%)', false); // se reposiciona arriba (oculto) para la próxima transición
          }, CURTAIN_DURATION + 50);
        });
      });
    }

    if (document.readyState === 'complete') {
      revealCurrentPage();
    } else {
      window.addEventListener('load', revealCurrentPage);
    }
    setTimeout(revealCurrentPage, 1600); // red de seguridad (solo actúa si 'load' nunca disparó)

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      if (link.hasAttribute('download') || link.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
      let url;
      try { url = new URL(href, window.location.href); } catch (err) { return; }
      if (url.origin !== window.location.origin) return; // enlace externo: navegación normal
      if (url.pathname === window.location.pathname && url.search === window.location.search) return; // ancla en la misma página

      e.preventDefault();
      setCurtain('translateY(0)', true); // el telón baja desde arriba cubriendo la pantalla
      setTimeout(() => { window.location.href = url.href; }, CURTAIN_DURATION);
    });
  }

  /* ---------- HEADER SCROLL STATE ---------- */
  const header = document.getElementById('site-header');
  if (header) {
    function updateHeader() {
      if (window.scrollY > 60) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ---------- MOBILE MENU ---------- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  /* ---------- ACTIVE NAV LINK (highlight current page) ---------- */
  const navLinks = document.querySelectorAll('.header-menu > a, #mobile-menu > a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (!href.startsWith('#')) {
      link.classList.remove('active');
    }
  });

  /* ---------- GENERIC SCROLL REVEAL (IntersectionObserver) ---------- */
  const revealSelectors = [
    '.reveal-on-scroll',
    '.reveal-fade-up',
    '.reveal-fade-in',
    '.reveal-left',
    '.reveal-right',
    '.reveal-scalex',
    '.about-card',
    '.faq-card',
    '.practice-item',
    '.service-card',
    '.bankruptcy-card',
    '.injury-card',
    '.humanitarian-card',
    '.guide-block'
  ];
  const revealEls = document.querySelectorAll(revealSelectors.join(','));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay ? parseFloat(el.dataset.delay) * 1000 : 0;
        setTimeout(() => el.classList.add('in-view'), delay);
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- FAQ ACCORDION (generic, works on any page) ---------- */
  document.querySelectorAll('.faq-card').forEach(card => {
    const question = card.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      // Close siblings within the same faq-list (optional accordion behavior)
      card.classList.toggle('open', !isOpen);
    });
  });

  /* ---------- PANEL ACCORDION (Real Estate style, single-open) ---------- */
  document.querySelectorAll('.panel-accordion').forEach(group => {
    const panels = group.querySelectorAll('.panel-item');
    panels.forEach(panel => {
      const header = panel.querySelector('.panel-header');
      if (!header) return;
      header.addEventListener('click', () => {
        const isOpen = panel.classList.contains('open');
        panels.forEach(p => p.classList.remove('open'));
        if (!isOpen) panel.classList.add('open');
      });
    });
  });

});
