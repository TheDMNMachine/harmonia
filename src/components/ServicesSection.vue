<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const container = ref(null)
useScrollReveal(container)

const services = [
  {
    title: 'Masaż Kobido',
    desc: 'Tradycyjny japoński masaż twarzy, który stymuluje krążenie, modeluje owal twarzy i przywraca naturalny blask skóry.',
    duration: '60 – 90 min',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="18" r="10" stroke="#D4A76A" stroke-width="1"/><path d="M14 38C14 32.48 18.48 28 24 28C29.52 28 34 32.48 34 38" stroke="#D4A76A" stroke-width="1" stroke-linecap="round"/><path d="M20 16C20 16 22 18 24 18C26 18 28 16 28 16" stroke="#D4A76A" stroke-width="0.8" stroke-linecap="round"/></svg>',
  },
  {
    title: 'Masaż relaksacyjny',
    desc: 'Głęboki masaż ciała z użyciem naturalnych olejków eterycznych. Redukcja napięcia, stres ustępuje miejsca spokojowi.',
    duration: '60 – 120 min',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 6C24 6 12 14 12 26C12 32.63 17.37 38 24 38C30.63 38 36 32.63 36 26C36 14 24 6 24 6Z" stroke="#D4A76A" stroke-width="1"/><path d="M24 18V30" stroke="#D4A76A" stroke-width="0.8"/><path d="M24 24C24 24 20 20 18 22" stroke="#D4A76A" stroke-width="0.8" stroke-linecap="round"/></svg>',
  },
  {
    title: 'Pielęgnacja twarzy',
    desc: 'Kompleksowy rytuał pielęgnacyjny z maseczkami, serum i masażem — dopasowany do Twojego typu skóry.',
    duration: '45 – 75 min',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="14" y="8" width="20" height="32" rx="10" stroke="#D4A76A" stroke-width="1"/><circle cx="24" cy="20" r="4" stroke="#D4A76A" stroke-width="0.8"/><path d="M20 30H28" stroke="#D4A76A" stroke-width="0.8" stroke-linecap="round"/></svg>',
  },
  {
    title: 'Rytuał japoński',
    desc: 'Połączenie masażu Kobido, aromaterapii i ceremonii herbacianej. Pełne doświadczenie harmonii ciała i ducha.',
    duration: '120 min',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="#D4A76A" stroke-width="0.8"/><circle cx="24" cy="24" r="8" stroke="#D4A76A" stroke-width="0.5"/><path d="M24 8V16" stroke="#D4A76A" stroke-width="0.5"/><path d="M24 32V40" stroke="#D4A76A" stroke-width="0.5"/><path d="M8 24H16" stroke="#D4A76A" stroke-width="0.5"/><path d="M32 24H40" stroke="#D4A76A" stroke-width="0.5"/></svg>',
  },
]
</script>

<template>
  <section id="uslugi" ref="container" class="section-pad bg-warm-white">
    <div class="content-max text-center">
      <p class="section-label">Usługi</p>
      <h2 class="section-heading">Rytuały piękna i relaksu</h2>
      <p class="section-desc mx-auto mb-16">
        Każdy zabieg jest indywidualnie dopasowany do Twoich potrzeb,
        łącząc tradycyjne techniki z nowoczesnymi metodami pielęgnacji.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="service-card fade-up"
          :style="{ transitionDelay: i * 0.15 + 's' }"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="mb-5" v-html="service.icon"></div>
          <h3 class="font-display text-[1.4rem] text-brown-deep mb-3">{{ service.title }}</h3>
          <p class="text-sm text-brown-muted leading-relaxed mb-5">{{ service.desc }}</p>
          <div class="flex items-center gap-1.5 mb-5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#D4A76A" stroke-width="0.8"/>
              <path d="M7 3.5V7.5L9.5 9" stroke="#D4A76A" stroke-width="0.8" stroke-linecap="round"/>
            </svg>
            <span class="text-sm text-gold-deep">{{ service.duration }}</span>
          </div>
          <a href="#kontakt" class="font-display text-sm text-gold tracking-[1px] transition-colors duration-300 hover:text-gold-deep">
            Umów zabieg →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-card {
  @apply bg-cream rounded-xl px-8 py-10 border border-transparent relative overflow-hidden transition-all duration-400;
}
.service-card::before {
  content: '';
  @apply absolute top-0 left-0 right-0 bg-gold;
  height: 3px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}
.service-card:hover {
  @apply border-sand -translate-y-1;
}
.service-card:hover::before { transform: scaleX(1); }
</style>
