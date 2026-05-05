<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const container = ref(null)
useScrollReveal(container)

const benefits = [
  'Naturalny lifting bez użycia igły',
  'Poprawa krążenia i napięcia skóry',
  'Redukcja zmarszczek i obrzęków',
  'Modelowanie owalu twarzy',
  'Głębokie odprężenie i redukcja stresu',
  'Stymulacja produkcji kolagenu',
]
</script>

<template>
  <section id="kobido" ref="container" class="section-pad bg-beige-light">
    <div class="content-max grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

      <!-- Text -->
      <div class="fade-up">
        <p class="section-label">Kobido</p>
        <h2 class="section-heading">Japoński masaż twarzy</h2>
        <div class="divider-line"></div>
        <p class="section-desc">
          Kobido, znany jako "starożytna droga piękna", to tradycyjna japońska technika
          masażu twarzy licząca sobie ponad 500 lat. To jeden z najskuteczniejszych
          naturalnych zabiegów liftingujących na świecie.
        </p>

        <ul class="mt-6 flex flex-col gap-3">
          <li v-for="benefit in benefits" :key="benefit" class="flex items-center gap-2.5 text-[0.95rem] text-brown-warm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#D4A76A" stroke-width="0.8"/>
              <path d="M5 8L7 10L11 6" stroke="#D4A76A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ benefit }}
          </li>
        </ul>

        <a href="#kontakt" class="btn-gold mt-8 inline-block">Zarezerwuj Kobido</a>
      </div>

      <!-- Visual -->
      <div class="fade-up md:order-none order-first">
        <div class="rounded-lg overflow-hidden">
          <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="480" rx="8" fill="#EAD9C8"/>
            <circle cx="200" cy="200" r="80" fill="none" stroke="#D4A76A" stroke-width="0.5" stroke-dasharray="4 4">
              <animateTransform attributeName="transform" type="rotate"
                values="0 200 200;360 200 200" dur="30s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="200" r="50" fill="none" stroke="#D4A76A" stroke-width="0.3" opacity="0.5"/>
            <text x="200" y="360" text-anchor="middle" fill="#B8915A"
                  font-family="Cormorant Garamond, serif" font-size="14" letter-spacing="2">ZDJĘCIE ZABIEGU</text>
          </svg>
        </div>
      </div>

    </div>
  </section>
</template>
