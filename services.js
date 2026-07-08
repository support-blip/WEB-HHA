/* ============================================================
   services.js — Motor de renderizado de páginas de Servicios
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  const params = new URLSearchParams(window.location.search);
  const serviceKey = params.get('service') || 'inmigracion';
  const data = SERVICES_DATA[serviceKey] || SERVICES_DATA['inmigracion'];

  document.title = data.title + ' | Hector Hernandez & Associates, P.A.';
  document.getElementById('page-title').textContent = document.title;
  document.getElementById('svc-hero-title').textContent = data.title;
  document.getElementById('svc-hero-message').textContent = data.heroMessage;
  document.getElementById('svc-section-title').textContent = data.sectionTitle;
  document.getElementById('svc-section-text').textContent = data.sectionText;

  /* ---------- PRACTICE AREAS LIST ---------- */
  const practiceList = document.getElementById('svc-practice-list');
  data.practiceAreas.forEach((area, i) => {
    const item = document.createElement('div');
    item.className = 'service-practice-item reveal-fade-up';
    item.dataset.delay = (i * 0.15).toFixed(2);
    item.innerHTML = `<span class="service-practice-number">${String(i + 1).padStart(2, '0')}</span><p class="service-practice-text">${area}</p>`;
    practiceList.appendChild(item);
  });

  /* ---------- UNIQUE CONTENT PER SERVICE ---------- */
  const uniqueWrap = document.getElementById('svc-unique-content');
  let uniqueHTML = '';

  if (data.guideSections) {
    uniqueHTML += `
      <section class="guide-intro-section">
        <h2 class="guide-intro-title reveal-fade-up">${data.guideTitle}</h2>
        <div class="deco-line-orange-short"></div>
        <p class="guide-intro-text reveal-fade-up" data-delay="0.2">${data.guideIntro}</p>
      </section>
    `;
    data.guideSections.forEach((section) => {
      uniqueHTML += `
        <section class="guide-block-section">
          <div class="guide-block-grid">
            <div class="guide-block-nav">
              <span class="guide-block-number">${section.number}</span>
              <h3 class="guide-block-title">${section.title}</h3>
            </div>
            <div class="guide-block-content">
              ${section.blocks.map((b, bi) => `
                <div class="guide-block-item reveal-fade-up" data-delay="${(bi * 0.15).toFixed(2)}">
                  <h4 class="guide-block-item-title">${b.title}</h4>
                  <p class="guide-block-item-text">${b.text}</p>
                  ${bi < section.blocks.length - 1 ? '<div class="guide-block-divider"></div>' : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    });
  }

  if (data.humanitarian) {
    uniqueHTML += `
      <section class="humanitarian-section">
        <h2 class="humanitarian-title reveal-fade-up">${data.humanitarian.title}</h2>
        <div class="humanitarian-cards">
          ${data.humanitarian.cards.map((c, i) => `
            <div class="humanitarian-card reveal-fade-up" data-delay="${(i * 0.15).toFixed(2)}">
              <div class="humanitarian-icon">⚖</div>
              <h3 class="humanitarian-card-title">${c.title}</h3>
              <p class="humanitarian-card-text">${c.text}</p>
              <span class="humanitarian-subtitle">Ventajas</span>
              <ul class="humanitarian-list">
                ${c.benefits.map(b => `<li>${b}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  if (data.solutions) {
    uniqueHTML += `
      <section class="solutions-section">
        <h2 class="solutions-title reveal-fade-up">${data.solutionsTitle}</h2>
        <div class="deco-line-orange-short center"></div>
        <div class="solutions-cards">
          ${data.solutions.map((s, i) => `
            <div class="bankruptcy-card" data-delay="${(i * 0.15).toFixed(2)}">
              <div class="bankruptcy-icon">${s.icon}</div>
              <h3 class="bankruptcy-card-title">${s.title}</h3>
              <p class="bankruptcy-card-text">${s.text}</p>
              <ul class="bankruptcy-benefits">
                ${s.benefits.map(b => `<li>${b}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  if (data.compensation) {
    uniqueHTML += `
      <section class="compensation-section">
        <h2 class="compensation-title reveal-fade-up">${data.compensationTitle}</h2>
        <div class="deco-line-orange-short center"></div>
        <div class="compensation-cards">
          ${data.compensation.map((c, i) => `
            <div class="injury-card" data-delay="${(i * 0.15).toFixed(2)}">
              <span class="injury-number">${c.number}</span>
              <h3 class="injury-card-title">${c.title}</h3>
              <p class="injury-card-subtitle">${c.subtitle}</p>
              <ul class="injury-card-items">
                ${c.items.map(it => `<li>${it}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
        <div class="compensation-closing reveal-fade-up">
          <h3 class="compensation-closing-title">${data.closing.title}</h3>
          <p class="compensation-closing-text">${data.closing.text}</p>
          <p class="compensation-closing-message">${data.closing.message}</p>
        </div>
      </section>
    `;
  }

  if (data.accordionPanels) {
    uniqueHTML += `
      <section class="realestate-accordion-section">
        <h2 class="realestate-accordion-title reveal-fade-up">${data.accordionTitle}</h2>
        <div class="panel-accordion">
          ${data.accordionPanels.map((p, i) => `
            <div class="panel-item ${p.open ? 'open' : ''}">
              <div class="panel-header">
                <span class="panel-icon">${i === 0 ? '⚖' : '🏠'}</span>
                <h3 class="panel-title">${p.title}</h3>
                <span class="panel-chevron">⌄</span>
              </div>
              <div class="panel-body"><p>${p.text}</p></div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  uniqueWrap.innerHTML = uniqueHTML;

  /* ---------- FAQ LIST ---------- */
  const faqList = document.getElementById('svc-faq-list');
  data.faq.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'faq-card';
    card.innerHTML = `
      <div class="faq-question">
        <span class="faq-number">${String(i + 1).padStart(2, '0')}.</span>
        <span class="faq-question-text">${item.q}</span>
        <span class="faq-chevron">⌄</span>
      </div>
      <div class="faq-answer"><p>${item.a}</p></div>
    `;
    faqList.appendChild(card);
  });

  /* ---------- PRESELECT SERVICE IN CONTACT FORM ---------- */
  const svcSelect = document.getElementById('svc-select');
  if (svcSelect) {
    const labelMap = {
      'inmigracion': 'Inmigración', 'bancarrota': 'Bancarrota',
      'lesiones-personales': 'Lesiones Personales', 'bienes-raices': 'Bienes Raíces'
    };
    Array.from(svcSelect.options).forEach(opt => {
      if (opt.textContent === labelMap[serviceKey]) opt.selected = true;
    });
  }

  /* ---------- VIDEO SCROLL EXPANSION (70% -> 100%) ---------- */
  const videoSection = document.querySelector('.service-video-section');
  const videoContainer = document.getElementById('svc-video-container');
  if (videoSection && videoContainer) {
    function updateVideo() {
      const rect = videoSection.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height * 0.6)));
      const width = 70 + progress * 30;
      const radius = 24 - progress * 12;
      const scale = 0.85 + progress * 0.15;
      videoContainer.style.width = width + '%';
      videoContainer.style.borderRadius = radius + 'px';
      videoContainer.style.transform = `scale(${scale})`;
    }
    window.addEventListener('scroll', updateVideo, { passive: true });
    window.addEventListener('resize', updateVideo);
    updateVideo();
  }

  /* ---------- RUN REVEAL OBSERVER FOR DYNAMICALLY INJECTED CONTENT ---------- */
  const dynamicSelectors = [
    '.reveal-fade-up', '.reveal-fade-in', '.reveal-left', '.reveal-right',
    '.faq-card', '.humanitarian-card', '.bankruptcy-card', '.injury-card', '.guide-block-item'
  ];
  const dynamicEls = document.querySelectorAll(dynamicSelectors.join(','));
  const dynObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay ? parseFloat(el.dataset.delay) * 1000 : 0;
        setTimeout(() => el.classList.add('in-view'), delay);
        dynObserver.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  dynamicEls.forEach(el => dynObserver.observe(el));

  /* ---------- FAQ ACCORDION TOGGLE (dynamic content) ---------- */
  faqList.querySelectorAll('.faq-card').forEach(card => {
    const q = card.querySelector('.faq-question');
    q.addEventListener('click', () => card.classList.toggle('open'));
  });

  /* ---------- PANEL ACCORDION TOGGLE (Real Estate, dynamic content) ---------- */
  uniqueWrap.querySelectorAll('.panel-accordion').forEach(group => {
    const panels = group.querySelectorAll('.panel-item');
    panels.forEach(panel => {
      const header = panel.querySelector('.panel-header');
      header.addEventListener('click', () => {
        const isOpen = panel.classList.contains('open');
        panels.forEach(p => p.classList.remove('open'));
        if (!isOpen) panel.classList.add('open');
      });
    });
  });

});
