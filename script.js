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

  /* ---------- SERVICE CUBES: ROTACIÓN 3D CON GSAP + SCROLLTRIGGER ---------- */
  const cubeSection = document.getElementById('services');
  if (cubeSection && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const cubeWraps = cubeSection.querySelectorAll('.wrp');
    gsap.to(cubeWraps, {
      rotationX: 270,
      ease: 'none',
      scrollTrigger: {
        trigger: cubeSection,
        start: 'top top',
        end: '+=3000',
        scrub: 0.5,
        pin: true,
        anticipatePin: 1
      }
    });
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
      const opacity = scrolled > 0.85 ? lerp(1, 0, (scrolled - 0.85) / 0.15) : 1;
      teamGiant.style.transform = `translateX(-50%) scale(${scale})`;
      teamGiant.style.opacity = opacity;
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
  if (gallery) {
    const profilePhoto = document.getElementById('profile-photo');
    const profileName = document.getElementById('profile-name');
    const profileRole = document.getElementById('profile-role');
    const profilePanel = document.getElementById('team-profile-panel');
    const profileClose = document.getElementById('profile-close');

    function initials(name) {
      return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
    }

    function photoStyle(member) {
      if (member.photo) {
        return `background:url('${member.photo}') center/cover no-repeat;`;
      }
      return `background:linear-gradient(160deg, ${member.color}, #0a1220); display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.85);font-family:'Montserrat',sans-serif;font-weight:700;font-size:32px;`;
    }

    teamMembers.forEach((member, idx) => {
      const el = document.createElement('div');
      el.className = 'team-member';
      if (idx === 0) el.classList.add('selected');
      el.innerHTML = `
        <div class="team-photo" style="${photoStyle(member)}">${member.photo ? '' : initials(member.name)}</div>
        <div class="team-member-name">${member.name}</div>
        <div class="team-member-role">${member.role}</div>
      `;
      el.addEventListener('click', () => selectMember(member, el));
      gallery.appendChild(el);
    });

    function applyProfilePhoto(member) {
      if (member.photo) {
        profilePhoto.style.background = `url('${member.photo}') center top / cover no-repeat`;
        profilePhoto.textContent = '';
      } else {
        profilePhoto.style.background = `linear-gradient(160deg, ${member.color}, #0a1220)`;
        profilePhoto.textContent = initials(member.name);
      }
      profilePhoto.style.display = 'flex';
      profilePhoto.style.alignItems = 'center';
      profilePhoto.style.justifyContent = 'center';
      profilePhoto.style.color = 'rgba(255,255,255,0.9)';
      profilePhoto.style.fontFamily = "'Montserrat', sans-serif";
      profilePhoto.style.fontWeight = '800';
      profilePhoto.style.fontSize = '64px';
    }

    function selectMember(member, el) {
      gallery.querySelectorAll('.team-member').forEach(m => m.classList.remove('selected'));
      el.classList.add('selected');

      profilePhoto.style.opacity = 0;
      profileName.style.opacity = 0;
      setTimeout(() => {
        applyProfilePhoto(member);
        profileName.textContent = member.name.toUpperCase();
        profileRole.textContent = member.role;
        profilePhoto.style.opacity = 1;
        profileName.style.opacity = 1;
      }, 200);
    }

    if (teamMembers.length) {
      const first = teamMembers[0];
      applyProfilePhoto(first);
      profileName.textContent = first.name.toUpperCase();
      profileRole.textContent = first.role;
    }

    if (profileClose) {
      profileClose.addEventListener('click', () => {
        const panel = document.getElementById('team-profile-panel');
        panel.style.transition = 'opacity 0.3s ease';
        panel.style.opacity = 0;
        setTimeout(() => { panel.style.display = 'none'; }, 300);
      });
    }
  }

  /* ---------- VIDEO THUMB CLICK (visual only placeholder) ---------- */
  document.querySelectorAll('.video-thumb, .intro-video-placeholder').forEach(v => {
    v.addEventListener('click', () => {
      v.style.opacity = '0.7';
      setTimeout(() => { v.style.opacity = '1'; }, 200);
    });
  });

});
