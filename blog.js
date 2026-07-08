/* ============================================================
   blog.js — Carrusel de artículos
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  const articles = [
    {
      category: 'DEPORTACIÓN',
      title: 'Tengo una orden de deportación final en Miami: ¿todavía hay algo que pueda hacer?',
      date: 'mayo 25, 2026',
      excerpt: 'Si estás leyendo esto, probablemente alguien te dijo que ya no hay nada que hacer, que la orden es final o que tu proceso terminó.',
      url: 'https://hhalaw.com/2026/05/25/orden-deportacion-final-opciones-legales-miami/',
      color: '#1c3a5e'
    },
    {
      category: 'FAMILIA',
      title: 'Peticiones familiares siendo residente permanente en Miami: lo que puedes hacer, lo que no puedes y los tiempos reales de espera',
      date: 'mayo 18, 2026',
      excerpt: 'Llevas años construyendo tu vida en Miami con tu green card. Tienes trabajo, tienes un hogar y tienes raíces. Pero tu familia sigue del otro lado.',
      url: 'https://hhalaw.com/2026/05/18/peticion-familiar-residente-permanente-miami/',
      color: '#2f4a3a'
    },
    {
      category: 'IMPUESTOS',
      title: '¿Puedes eliminar tu deuda con el IRS declarando bancarrota en Florida?',
      date: 'mayo 11, 2026',
      excerpt: 'Abril terminó y los taxes están presentados. Eso significa que, para muchas familias hispanas en Miami, los números que aparecieron en esa declaración no traen buenas noticias.',
      url: 'https://hhalaw.com/2026/05/11/deuda-irs-bancarrota-abogado-miami/',
      color: '#4a4032'
    },
    {
      category: 'INMIGRACIÓN',
      title: 'Notice to Appear (NTA): qué significa recibirlo y cuáles son tus próximos pasos',
      date: 'mayo 4, 2026',
      excerpt: 'Recibir un Notice to Appear puede sentirse abrumador, pero entender el proceso es el primer paso para proteger tus derechos.',
      url: 'https://hhalaw.com/2026/05/04/notice-to-appear-nta-abogado-miami/',
      color: '#2538A5'
    },
    {
      category: 'INMIGRACIÓN',
      title: '¿Qué es ICE y el Servicio de Inmigración y Aduanas?',
      date: 'abril 22, 2026',
      excerpt: 'Entender las funciones y los límites de esta agencia puede ayudarte a saber cómo actuar y a quién acudir en caso de necesitarlo.',
      url: 'https://hhalaw.com/2026/04/22/que-es-ice-servicio-inmigracion-aduanas/',
      color: '#08254A'
    },
    {
      category: 'INMIGRACIÓN',
      title: 'Fianza de inmigración, ICE y habeas corpus: obtenerlos después de una detención',
      date: 'abril 15, 2026',
      excerpt: 'Cuando una persona es detenida por autoridades migratorias, una de las principales preocupaciones es saber si existe una forma de salir mientras continúa el proceso.',
      url: 'https://hhalaw.com/2026/04/15/fianza-inmigracion-ice-habeas-corpus/',
      color: '#5a3030'
    }
  ];

  const track = document.getElementById('carousel-track');
  const dotsWrap = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (!track) return;

  articles.forEach((a, i) => {
    const card = document.createElement('a');
    card.href = a.url;
    card.target = '_blank';
    card.rel = 'noopener';
    card.className = 'article-card reveal-fade-up';
    card.dataset.delay = (i * 0.1).toFixed(1);
    card.innerHTML = `
      <div class="article-image" style="background:linear-gradient(150deg, ${a.color}, #05101c);"></div>
      <div class="article-body">
        <span class="article-category">${a.category}</span>
        <h3 class="article-title">${a.title}</h3>
        <span class="article-date">${a.date}</span>
        <p class="article-excerpt">${a.excerpt}</p>
        <span class="article-readmore">Leer más →</span>
      </div>
    `;
    track.appendChild(card);
  });

  // Re-run reveal observer for dynamically injected cards
  const revealEls = track.querySelectorAll('.reveal-fade-up');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay ? parseFloat(el.dataset.delay) * 1000 : 0;
        setTimeout(() => el.classList.add('in-view'), delay);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => obs.observe(el));

  // Carousel navigation
  let cardsPerView = window.innerWidth > 1100 ? 4 : window.innerWidth > 700 ? 2 : 1;
  let currentIndex = 0;

  function getCardWidth() {
    const card = track.querySelector('.article-card');
    if (!card) return 0;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap || style.columnGap || 30);
    return card.getBoundingClientRect().width + gap;
  }

  function maxIndex() {
    return Math.max(0, articles.length - cardsPerView);
  }

  function updateDots() {
    dotsWrap.innerHTML = '';
    const dotsCount = maxIndex() + 1;
    for (let i = 0; i < dotsCount; i++) {
      const dot = document.createElement('span');
      dot.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');
      dot.addEventListener('click', () => { currentIndex = i; render(); });
      dotsWrap.appendChild(dot);
    }
  }

  function render() {
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex()));
    const offset = -currentIndex * getCardWidth();
    track.style.transform = `translateX(${offset}px)`;
    updateDots();
  }

  prevBtn.addEventListener('click', () => { currentIndex--; render(); });
  nextBtn.addEventListener('click', () => { currentIndex++; render(); });

  window.addEventListener('resize', () => {
    cardsPerView = window.innerWidth > 1100 ? 4 : window.innerWidth > 700 ? 2 : 1;
    render();
  });

  setTimeout(render, 50);
});
