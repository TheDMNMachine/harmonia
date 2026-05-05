<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const container = ref(null)
useScrollReveal(container)

const stats = [
  { num: '8+',   label: 'lat doświadczenia' },
  { num: '500+', label: 'zadowolonych klientek' },
  { num: '12',   label: 'certyfikatów' },
]
</script>

<template>
  <section id="o-mnie" ref="container" class="section-pad bg-cream">
    <div class="content-max grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

      <!-- Image -->
      <div class="fade-up relative">
        <div class="relative rounded-lg overflow-hidden">
          <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="500" rx="8" fill="#EAD9C8"/>
            <circle cx="200" cy="180" r="60" fill="#E0CDB8"/>
            <path d="M120 340 Q200 280 280 340 L280 500 L120 500 Z" fill="#E0CDB8"/>
            <text x="200" y="430" text-anchor="middle" fill="#B8915A"
                  font-family="Cormorant Garamond, serif" font-size="14" letter-spacing="2">ZDJĘCIE</text>
          </svg>
        </div>
        <!-- Offset gold frame -->
        <div class="img-frame"></div>
      </div>

      <!-- Text -->
      <div class="fade-up">
        <p class="section-label">O mnie</p>
        <h2 class="section-heading">Pasja do piękna<br>i harmonii</h2>
        <div class="divider-line"></div>
        <p class="section-desc">
          Jestem certyfikowaną specjalistką masażu Kobido — starożytnej japońskiej techniki,
          która łączy głęboki masaż twarzy z holistycznym podejściem do urody i zdrowia.
        </p>
        <p class="section-desc mt-4">
          Moje podejście opiera się na szacunku do naturalnego piękna i wierze, że prawdziwa
          harmonia zaczyna się od wewnątrz. Każdy zabieg to rytuał — nie tylko dla ciała,
          ale i dla duszy.
        </p>

        <!-- Stats -->
        <div class="flex flex-wrap gap-10 mt-8">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
            <span class="font-display font-light text-gold" style="font-size: 2.2rem;">{{ stat.num }}</span>
            <span class="text-sm text-brown-muted mt-1">{{ stat.label }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.img-frame {
  @apply absolute border border-gold rounded-lg -z-10;
  top: 16px; left: 16px; right: -16px; bottom: -16px;
}
</style>
