<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const container = ref(null)
useScrollReveal(container)

const pricing = [
  {
    name: 'Masaż relaksacyjny',
    duration: '60 minut',
    price: '180',
    featured: false,
    includes: ['Masaż klasyczny całego ciała', 'Naturalne olejki eteryczne', 'Relaksacyjna atmosfera'],
  },
  {
    name: 'Masaż Kobido',
    duration: '90 minut',
    price: '280',
    featured: true,
    includes: ['Pełny masaż Kobido twarzy', 'Oczyszczanie i tonizowanie', 'Maseczka nawilżająca', 'Masaż szyi i dekoltu'],
  },
  {
    name: 'Rytuał japoński',
    duration: '120 minut',
    price: '420',
    featured: false,
    includes: ['Ceremonia herbaciana', 'Masaż Kobido premium', 'Aromaterapia', 'Masaż relaksacyjny ciała', 'Maska kolagenowa'],
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

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div
          v-for="(item, i) in pricing"
          :key="item.name"
          class="pricing-card fade-up"
          :class="{ featured: item.featured }"
          :style="{ transitionDelay: i * 0.12 + 's' }"
        >
          <div v-if="item.featured" class="badge">Popularny</div>
          <h3 class="font-display text-[1.3rem] text-brown-deep mb-1">{{ item.name }}</h3>
          <p class="text-sm text-brown-muted mb-5">{{ item.duration }}</p>
          <div class="flex items-baseline gap-1 mb-6">
            <span class="font-display font-light text-gold" style="font-size: 2.5rem;">{{ item.price }}</span>
            <span class="text-sm text-brown-muted">PLN</span>
          </div>
          <ul class="flex flex-col gap-2 mb-7 flex-1">
            <li
              v-for="inc in item.includes"
              :key="inc"
              class="text-sm text-brown-warm pl-5 relative"
            >
              <span class="bullet"></span>
              {{ inc }}
            </li>
          </ul>
          <a href="#kontakt" class="btn-gold block text-center">Rezerwuj</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-card {
  @apply bg-cream rounded-xl px-7 py-9 border border-sand transition-all duration-300 relative flex flex-col;
}
.pricing-card.featured {
  @apply border-gold;
  box-shadow: 0 8px 40px rgba(212, 167, 106, 0.12);
}
.badge {
  @apply absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-warm-white font-display uppercase rounded-full px-4 py-1;
  font-size: 0.75rem; letter-spacing: 2px;
}
.bullet {
  @apply absolute left-0 top-2 rounded-full bg-gold-light;
  width: 6px; height: 6px;
}
</style>
