<script setup>
// No state needed — pure display with CSS animations
</script>

<template>
  <section id="hero" class="hero">
    <!-- Ornament SVG -->
    <div class="hero-bg" aria-hidden="true">
      <svg class="w-full h-full" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="300" r="250" stroke="#D4A76A" stroke-width="0.5" opacity="0.15"/>
        <circle cx="300" cy="300" r="200" stroke="#D4A76A" stroke-width="0.3" opacity="0.1"/>
        <circle cx="300" cy="300" r="150" stroke="#D4A76A" stroke-width="0.3" opacity="0.08"/>
        <path d="M300 50 Q320 150 300 300 Q280 150 300 50" stroke="#D4A76A" stroke-width="0.4" opacity="0.12"/>
        <path d="M550 300 Q450 320 300 300 Q450 280 550 300" stroke="#D4A76A" stroke-width="0.4" opacity="0.12"/>
        <path d="M300 550 Q280 450 300 300 Q320 450 300 550" stroke="#D4A76A" stroke-width="0.4" opacity="0.12"/>
        <path d="M50 300 Q150 280 300 300 Q150 320 50 300" stroke="#D4A76A" stroke-width="0.4" opacity="0.12"/>
      </svg>
    </div>

    <!-- Content -->
    <div class="relative text-center z-10">
      <p class="hero-label">Małgorzata Kozłowska</p>
      <h1 class="hero-title">HARMONIA</h1>
      <div class="hero-divider">
        <svg width="120" height="2" viewBox="0 0 120 2">
          <line x1="0" y1="1" x2="120" y2="1" stroke="#D4A76A" stroke-width="1"/>
        </svg>
      </div>
      <p class="hero-subtitle">Kobido · Masaż · Relaks</p>
      <p class="hero-desc">
        Odkryj sztukę japońskiego masażu twarzy<br>
        i odnajdź wewnętrzny spokój
      </p>
      <div class="hero-cta">
        <a href="#uslugi" class="btn-gold">Poznaj ofertę</a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero-scroll fade-in">
      <svg width="24" height="40" viewBox="0 0 24 40" style="animation: float 2.5s ease-in-out infinite;">
        <rect x="1" y="1" width="22" height="38" rx="11" fill="none" stroke="#D4A76A" stroke-width="1"/>
        <circle cx="12" cy="12" r="2" fill="#D4A76A" opacity="0.6"/>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  @apply min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-warm-white;
  padding: 100px 24px 40px;
}
.hero-bg {
  @apply absolute top-1/2 left-1/2 pointer-events-none;
  width: 600px; height: 600px;
  transform: translate(-50%, -50%);
}

.hero-label {
  @apply font-display uppercase text-brown-muted mb-4;
  font-size: 0.9rem; letter-spacing: 5px;
  animation: fadeInUp 0.8s ease forwards; opacity: 0;
}
.hero-title {
  @apply font-display font-light text-gold mb-6;
  font-size: clamp(3rem, 8vw, 5.5rem); letter-spacing: 12px;
  animation: fadeInUp 0.8s ease 0.15s forwards; opacity: 0;
}
.hero-divider {
  @apply mb-6 flex justify-center;
  animation: fadeInUp 0.8s ease 0.3s forwards; opacity: 0;
}
.hero-subtitle {
  @apply font-display uppercase text-brown-warm mb-5;
  font-size: 1.1rem; letter-spacing: 6px;
  animation: fadeInUp 0.8s ease 0.4s forwards; opacity: 0;
}
.hero-desc {
  @apply text-base text-brown-muted leading-relaxed mb-9;
  animation: fadeInUp 0.8s ease 0.5s forwards; opacity: 0;
}
.hero-cta {
  animation: fadeInUp 0.8s ease 0.65s forwards; opacity: 0;
}
.hero-scroll {
  @apply absolute bottom-8 left-1/2 -translate-x-1/2;
  animation: fadeInUp 1s ease 1.2s forwards !important;
}
</style>
