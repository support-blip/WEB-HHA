/* ============================================================
   HHA — script.js (SOLO PARA index.html / Home)
   Hero cinematográfico, zoom de "TEAM" y directorio del equipo.
   El header, menú móvil y reveal-on-scroll viven en common.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  function clamp01(v) { return Math.max(0, Math.min(1, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }

  /* ---------- HERO: CINEMATIC SCROLL EXPANSION ---------- */
  const heroWrapper = document.getElementById('hero-wrapper');
  const heroHH = document.getElementById('hero-hh');
  const heroMessage = document.getElementById('hero-message');
  const heroVideo = document.getElementById('hero-video');

  if (heroWrapper && heroHH && heroMessage && heroVideo) {
    heroVideo.style.transformOrigin = 'left center';

    let heroVideoBaseLeft = 0;
    function measureHeroVideoBaseLeft() {
      const prevTransform = heroVideo.style.transform;
      const prevMargin = heroVideo.style.marginLeft;
      heroVideo.style.transform = 'none';
      heroVideo.style.marginLeft = '0px';
      heroVideoBaseLeft = heroVideo.getBoundingClientRect().left;
      heroVideo.style.transform = prevTransform;
      heroVideo.style.marginLeft = prevMargin;
    }

    function updateHero() {
      const rect = heroWrapper.getBoundingClientRect();
      const total = heroWrapper.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = clamp01(-rect.top / total);

      const fadeProgress = clamp01(scrolled / 0.35);
      const fadeOpacity = 1 - fadeProgress;
      heroHH.style.opacity = fadeOpacity;
      heroHH.style.transform = `translateY(${lerp(0, -40, fadeProgress)}px)`;
      heroMessage.style.opacity = fadeOpacity;
      heroMessage.style.transform = `translateY(${lerp(0, -30, fadeProgress)}px)`;

      const growProgress = clamp01((scrolled - 0.15) / 0.7);
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const startW = Math.min(650, vw * 0.9);
      const startH = 380;
      const scaleX = lerp(1, vw / startW, growProgress);
      const scaleY = lerp(1, vh / startH, growProgress);
      const radius = lerp(16, 0, growProgress);

      heroVideo.style.transform = `scale(${scaleX}, ${scaleY})`;
      heroVideo.style.borderRadius = radius + 'px';
      heroVideo.style.marginLeft = lerp(0, -heroVideoBaseLeft, growProgress) + 'px';
    }
    function handleResize() {
      measureHeroVideoBaseLeft();
      updateHero();
    }
    window.addEventListener('scroll', updateHero, { passive: true });
    window.addEventListener('resize', handleResize);
    measureHeroVideoBaseLeft();
    updateHero();
  }

  /* ---------- SERVICES INTRO: EFECTO MÁQUINA DE ESCRIBIR ---------- */
  const twTitle = document.querySelector('.services-intro-title');
  if (twTitle) {
    const fullText = twTitle.innerHTML.replace(/<br\s*\/?>/gi, '\n').trim();
    twTitle.innerHTML = '<span class="tw-caret"></span>';
    let typed = false;
    function typeWriter() {
      let i = 0;
      const speed = 45;
      (function step() {
        const slice = fullText.slice(0, i);
        twTitle.innerHTML = slice.replace(/\n/g, '<br>') + '<span class="tw-caret"></span>';
        if (i < fullText.length) { i++; setTimeout(step, speed); }
      })();
    }
    const twObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !typed) {
          typed = true;
          typeWriter();
          twObserver.unobserve(twTitle);
        }
      });
    }, { threshold: 0.4 });
    twObserver.observe(twTitle);
  }

  /* ---------- TEAM INTRO: ZOOM TEXT ---------- */
  const teamIntroWrapper = document.getElementById('team-intro-wrapper');
  const teamGiant = document.getElementById('team-giant');

  if (teamIntroWrapper && teamGiant) {
    function updateTeamIntro() {
      const rect = teamIntroWrapper.getBoundingClientRect();
      const total = teamIntroWrapper.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = clamp01(-rect.top / total);
      const scale = lerp(1, 5, scrolled);
      // "TEAM" no se desvanece: llega a su tamaño final y queda fijo/visible,
      // sin dejar un tramo de scroll con la sección vacía.
      teamGiant.style.transform = `translateX(-50%) scale(${scale})`;
    }
    window.addEventListener('scroll', updateTeamIntro, { passive: true });
    window.addEventListener('resize', updateTeamIntro);
    updateTeamIntro();
  }

  /* ---------- TEAM DIRECTORY ---------- */
  const teamMembers = [
    { name: 'Hector Hernandez', role: 'Abogado Fundador', color: '#2538A5', photo: 'img/hectorHernandez.jpg' },
    { name: 'Eduardo Alvares', role: 'Abogado de Inmigración', color: '#08254A', photo: 'img/eduardoAlvarez.jpg' },
    { name: 'H. Jose Hernandez', role: 'Gerente de Relaciones al Cliente', color: '#1c3a5e', photo: 'img/joseHernandez.jpg' },
    { name: 'Eli Garcia', role: 'Paralegal Bienes Raíces', color: '#2f4a3a', photo: 'img/eliGarcia.jpg' },
    { name: 'Dailyn Gonzalez', role: 'Paralegal de Inmigración', color: '#4a4032', photo: 'img/dailynGonzalez.jpg' },
    { name: 'Horaline Disla', role: 'Paralegal de Inmigración', color: '#5a3030', photo: 'img/harolineDisla.jpg' },
    { name: 'Rocio Izquierdo', role: 'Paralegal de Inmigración', color: '#2538A5', photo: 'img/rocioIzquierdo.jpg' },
    { name: 'Claudia Ricardo', role: 'Servicio al Cliente', color: '#08254A', photo: 'img/claudiaRicardo.jpg' },
    { name: 'Adriana Hernandez', role: 'Servicio al Cliente', color: '#1c3a5e', photo: 'img/adrianHernandez.jpg' },
    { name: 'Marlene Ramirez', role: 'Lesiones Personales', color: '#2f4a3a', photo: 'img/marleneRamirez.jpg' },
    { name: 'Alexandra Colon', role: 'Asistente Legal', color: '#4a4032', photo: 'img/alexandraColon.jpg' },
    { name: 'Jorge Pino', role: 'Contador', color: '#5a3030', photo: 'img/jorgePino.jpg' },
  ];

  const gallery = document.getElementById('team-gallery');
  const featurePhoto = document.getElementById('team-feature-photo');
  const featureName = document.getElementById('team-feature-name');
  const featureRole = document.getElementById('team-feature-role');

  if (gallery && featurePhoto) {
    // Aplica una persona a la columna izquierda destacada
    function setFeature(member, animate) {
      const apply = () => {
        featurePhoto.style.background = `url('${member.photo}') center top / cover no-repeat`;
        featureName.textContent = member.name.toUpperCase();
        featureRole.textContent = member.role;
        featurePhoto.style.opacity = '1';
      };
      if (animate) {
        featurePhoto.style.opacity = '0';
        setTimeout(apply, 120);
      } else {
        apply();
      }
    }

    // Construye las tarjetas pequeñas (solo foto)
    teamMembers.forEach((member, idx) => {
      const el = document.createElement('div');
      el.className = 'team-member';
      if (idx === 0) el.classList.add('is-founder'); // Hector Hernandez: iluminado en azul por defecto
      el.innerHTML = `<div class="team-photo" style="background:url('${member.photo}') center/cover no-repeat;"></div>`;
      el.addEventListener('mouseenter', () => {
        gallery.querySelectorAll('.team-member').forEach(m => m.classList.remove('active'));
        el.classList.add('active');
        setFeature(member, true);
      });
      gallery.appendChild(el);
    });

    // Al salir del grid, vuelve al fundador (estado por defecto)
    gallery.addEventListener('mouseleave', () => {
      gallery.querySelectorAll('.team-member').forEach(m => m.classList.remove('active'));
      setFeature(teamMembers[0], true);
    });

    // Estado inicial: fundador (Hector Hernandez)
    setFeature(teamMembers[0], false);
  }

  /* ---------- VIDEO THUMB CLICK (visual only placeholder) ---------- */
  document.querySelectorAll('.video-thumb, .intro-video-placeholder').forEach(v => {
    v.addEventListener('click', () => {
      v.style.opacity = '0.7';
      setTimeout(() => { v.style.opacity = '1'; }, 200);
    });
  });

});
