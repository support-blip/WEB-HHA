/* ============================================================
   contact.js — Expansión progresiva del formulario al hacer scroll
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('contact-hero-wrapper');
  const title = document.getElementById('contact-mega-title');
  const form = document.getElementById('contact-float-form');
  if (!wrapper || !title || !form) return;

  function clamp01(v) { return Math.max(0, Math.min(1, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }

  function update() {
    const rect = wrapper.getBoundingClientRect();
    const total = wrapper.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const scrolled = clamp01(-rect.top / total);

    // Title: fades and drifts up
    title.style.transform = `translateY(${lerp(0, -80, scrolled)}px)`;
    title.style.opacity = lerp(1, 0.2, scrolled);

    // Form: grows from bottom-right small card to centered large panel
    const scale = lerp(0.75, 1, scrolled);
    const translateX = lerp(0, -25, scrolled);
    const translateY = lerp(0, -18, scrolled);
    form.style.transform = `translate(${translateX}%, ${translateY}%) scale(${scale})`;
    form.style.opacity = lerp(0.85, 1, scrolled);
    form.style.boxShadow = `0px ${lerp(25, 60, scrolled)}px ${lerp(60, 100, scrolled)}px rgba(0,0,0,${lerp(0.08, 0.16, scrolled)})`;
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});
