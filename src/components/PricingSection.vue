<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const container = ref(null)
useScrollReveal(container)

const categories = [
  {
    name: 'Konsultacje i zabiegi',
    services: [
      { name: 'Konsultacja & Beauty Plan (PDF)', duration: '60 min', price: '150' },
      { name: 'Zabieg dobrany do potrzeb skóry', duration: '1h 30min', price: '260' },
      { name: 'Zabieg dobrany do potrzeb skóry (twarz + szyja + dekolt)', duration: '1h 45min', price: '340' },
      { name: 'Indywidualnie dobrany peeling chemiczny', duration: '45 min', price: '150' },
      { name: 'Indywidualnie dobrany peeling chemiczny (twarz + szyja + dekolt)', duration: '1h 30min', price: '230' },
    ],
  },
  {
    name: 'Manualne terapie twarzy',
    featured: true,
    services: [
      { name: 'Masaż KOBIDO', duration: '1h 40min', price: '220' },
      { name: 'Masaż KOBIDO & kinesiotaping', duration: '2h', price: '250' },
      { name: 'Facecupping Pro & Kinesiotaping', duration: '1h 30min', price: '230' },
    ],
  },
  {
    name: 'Rytuały KOBIDO & Pielęgnacja',
    services: [
      { name: 'KOBIDO Rozświetlenie', duration: '2h', price: '250' },
      { name: 'KOBIDO & Peeling chemiczny', duration: '2h 10min', price: '300' },
      { name: 'Rytuał Kobido z ampułką, maską i presoterapią nóg', duration: '2h', price: '280' },
      { name: 'Masaż KOBIDO & GABA&NANA Neuro Lift', duration: '2h 15min', price: '350' },
      { name: 'Masaż KOBIDO & Nano Needles', duration: '2h 30min', price: '450' },
    ],
  },
  {
    name: 'Oczyszczanie',
    services: [
      { name: 'Peeling Kawitacyjny & Odżywienie', duration: '1h', price: '190' },
      { name: 'Peeling Kawitacyjny & Odżywienie (twarz + szyja + dekolt)', duration: '1h 15min', price: '270' },
      { name: 'Peeling Kawitacyjny & Masaż relaksacyjny', duration: '1h 30min', price: '250' },
      { name: 'Oczyszczanie wodorowe PODSTAWOWE', duration: '1h 20min', price: '220' },
      { name: 'Oczyszczanie wodorowe PODSTAWOWE (twarz + szyja + dekolt)', duration: '1h 30min', price: '300' },
      { name: 'Oczyszczanie wodorowe ROZSZERZONE', duration: '2h', price: '320' },
      { name: 'Oczyszczanie wodorowe ROZSZERZONE (twarz + szyja)', duration: '2h 15min', price: '400' },
      { name: 'Rytuał Kompleksowej Pielęgnacji i Relaksu', duration: '2h 10min', price: '380' },
    ],
  },
  {
    name: 'Mezoterapia mikroigłowa',
    services: [
      { name: 'Mezoterapia Mikroigłowa PODSTAWOWA', duration: '1h', price: '250' },
      { name: 'Mezoterapia Mikroigłowa ROZSZERZONA', duration: '1h 30min', price: '350' },
      { name: 'Mezoterapia mikroigłowa + PRX T33 (twarz + szyja)', duration: '30 min', price: '400' },
      { name: 'Mezoterapia mikroigłowa + PRX T33 (twarz + szyja + dekolt)', duration: '30 min', price: '450' },
    ],
  },
  {
    name: 'Nano-needles PRO',
    services: [
      { name: 'Nano-needles PRO', duration: '1h 15min', price: '350' },
    ],
  },
]
</script>

<template>
  <section id="cennik" ref="container" class="section-pad bg-warm-white">
    <div class="content-max text-center">
      <p class="section-label">Cennik</p>
      <h2 class="section-heading">Inwestuj w siebie</h2>
      <p class="section-desc mx-auto mb-16">
        Każdy zabieg jest wyjątkowym doświadczeniem — zainwestuj czas w swoje piękno i zdrowie.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div
          v-for="(cat, i) in categories"
          :key="cat.name"
          class="pricing-card fade-up"
          :class="{ featured: cat.featured }"
          :style="{ transitionDelay: i * 0.1 + 's' }"
        >
          <div v-if="cat.featured" class="badge">Popularny</div>
          <h3 class="font-display text-[1.1rem] uppercase tracking-widest text-brown-deep mb-5">
            {{ cat.name }}
          </h3>

          <ul class="flex flex-col divide-y divide-sand">
            <li
              v-for="svc in cat.services"
              :key="svc.name"
              class="flex items-baseline justify-between gap-3 py-3"
            >
              <div class="flex flex-col">
                <span class="text-sm text-brown-warm leading-snug">{{ svc.name }}</span>
                <span class="text-xs text-brown-muted mt-0.5">{{ svc.duration }}</span>
              </div>
              <span class="font-display text-gold text-lg whitespace-nowrap">{{ svc.price }} <span class="text-xs text-brown-muted font-sans">PLN</span></span>
            </li>
          </ul>

          <a href="#kontakt" class="btn-gold block text-center mt-6">Rezerwuj</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-card {
  @apply bg-cream rounded-xl px-7 py-8 border border-sand transition-all duration-300 relative flex flex-col;
}
.pricing-card.featured {
  @apply border-gold;
  box-shadow: 0 8px 40px rgba(212, 167, 106, 0.12);
}
.badge {
  @apply absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-warm-white font-display uppercase rounded-full px-4 py-1;
  font-size: 0.75rem; letter-spacing: 2px;
}
</style>
