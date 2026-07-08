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

      const rectVideo = heroVideo.getBoundingClientRect();
      heroVideo.style.transformOrigin = 'left center';
      heroVideo.style.marginLeft = lerp(0, -rectVideo.left, growProgress) + 'px';
    }
    window.addEventListener('scroll', updateHero, { passive: true });
    window.addEventListener('resize', updateHero);
    updateHero();
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
    { name: 'Hector Hernandez', role: 'Abogado Fundador', color: '#2538A5' },
    { name: 'Eduardo Alvares', role: 'Abogado de Inmigración', color: '#08254A' },
    { name: 'H. Jose Hernandez', role: 'Gerente de Relaciones al Cliente', color: '#1c3a5e' },
    { name: 'Eli Garcia', role: 'Paralegal Bienes Raíces', color: '#2f4a3a' },
    { name: 'Dailyn Gonzalez', role: 'Paralegal de Inmigración', color: '#4a4032' },
    { name: 'Horaline Disla', role: 'Paralegal de Inmigración', color: '#5a3030' },
    { name: 'Rocio Izquierdo', role: 'Paralegal de Inmigración', color: '#2538A5' },
    { name: 'Claudia Ricardo', role: 'Servicio al Cliente', color: '#08254A' },
    { name: 'Adriana Hernandez', role: 'Servicio al Cliente', color: '#1c3a5e' },
    { name: 'Marlene Ramirez', role: 'Lesiones Personales', color: '#2f4a3a' },
    { name: 'Alexandra Colon', role: 'Asistente Legal', color: '#4a4032' },
    { name: 'Jorge Pino', role: 'Contador', color: '#5a3030' },
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

    teamMembers.forEach((member, idx) => {
      const el = document.createElement('div');
      el.className = 'team-member';
      if (idx === 0) el.classList.add('selected');
      el.innerHTML = `
        <div class="team-photo" style="background:linear-gradient(160deg, ${member.color}, #0a1220); display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.85);font-family:'Montserrat',sans-serif;font-weight:700;font-size:32px;">${initials(member.name)}</div>
        <div class="team-member-name">${member.name}</div>
        <div class="team-member-role">${member.role}</div>
      `;
      el.addEventListener('click', () => selectMember(member, el));
      gallery.appendChild(el);
    });

    function selectMember(member, el) {
      gallery.querySelectorAll('.team-member').forEach(m => m.classList.remove('selected'));
      el.classList.add('selected');

      profilePhoto.style.opacity = 0;
      profileName.style.opacity = 0;
      setTimeout(() => {
        profilePhoto.style.background = `linear-gradient(160deg, ${member.color}, #0a1220)`;
        profilePhoto.style.display = 'flex';
        profilePhoto.style.alignItems = 'center';
        profilePhoto.style.justifyContent = 'center';
        profilePhoto.style.color = 'rgba(255,255,255,0.9)';
        profilePhoto.style.fontFamily = "'Montserrat', sans-serif";
        profilePhoto.style.fontWeight = '800';
        profilePhoto.style.fontSize = '64px';
        profilePhoto.textContent = initials(member.name);
        profileName.textContent = member.name.toUpperCase();
        profileRole.textContent = member.role;
        profilePhoto.style.opacity = 1;
        profileName.style.opacity = 1;
      }, 200);
    }

    if (teamMembers.length) {
      const first = teamMembers[0];
      profilePhoto.style.background = `linear-gradient(160deg, ${first.color}, #0a1220)`;
      profilePhoto.style.display = 'flex';
      profilePhoto.style.alignItems = 'center';
      profilePhoto.style.justifyContent = 'center';
      profilePhoto.style.color = 'rgba(255,255,255,0.9)';
      profilePhoto.style.fontFamily = "'Montserrat', sans-serif";
      profilePhoto.style.fontWeight = '800';
      profilePhoto.style.fontSize = '64px';
      profilePhoto.textContent = initials(first.name);
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
