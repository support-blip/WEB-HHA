/* ============================================================
   about.js — Kinetic Typography Reveal (DEFENDEMOS TUS DERECHOS)
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('kinetic-wrapper');
  const word1 = document.getElementById('kinetic-word-1');
  const word2 = document.getElementById('kinetic-word-2');
  if (!wrapper || !word1 || !word2) return;

  function clamp01(v) { return Math.max(0, Math.min(1, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }

  function update() {
    const rect = wrapper.getBoundingClientRect();
    const total = wrapper.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const scrolled = clamp01(-rect.top / total);

    // Word 1 emerges first (0 - 0.4)
    const p1 = clamp01(scrolled / 0.4);
    word1.style.opacity = p1;
    word1.style.transform = `translateY(${lerp(60, 0, p1)}px)`;

    // Word 2 emerges after a pause (0.5 - 0.9)
    const p2 = clamp01((scrolled - 0.5) / 0.4);
    word2.style.opacity = p2;
    word2.style.transform = `translateY(${lerp(60, 0, p2)}px)`;
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});
