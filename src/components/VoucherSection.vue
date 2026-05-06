<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import voucherImg from '@/assets/voucher.jpg'

const container = ref(null)
useScrollReveal(container)

const points = [
  'Idealny prezent na każdą okazję — urodziny, Dzień Kobiet, Walentynki',
  'Do wykorzystania na dowolny zabieg z oferty salonu',
  'Ważny przez 3 miesięce od daty zakupu',
  'Dostępny w wybranej przez Ciebie kwocie lub na konkretny zabieg',
]
</script>

<template>
  <section id="vouchery" ref="container" class="section-pad bg-warm-white">
    <div class="content-max grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

      <!-- Text -->
      <div class="fade-up">
        <p class="section-label">Vouchery</p>
        <h2 class="section-heading">Podaruj chwilę piękna</h2>
        <div class="divider-line"></div>
        <p class="section-desc mb-6">
          Voucher do Harmonii to wyjątkowy prezent — czas wyłącznie dla siebie,
          zapach relaksu i dotyk, który przywraca równowagę. Podaruj komuś bliskiemu
          to, czego nie kupisz w sklepie.
        </p>

        <ul class="flex flex-col gap-3 mb-8">
          <li v-for="point in points" :key="point" class="flex items-start gap-2.5 text-[0.95rem] text-brown-warm">
            <svg class="mt-1 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#D4A76A" stroke-width="0.8"/>
              <path d="M5 8L7 10L11 6" stroke="#D4A76A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ point }}
          </li>
        </ul>

        <a href="#kontakt" class="btn-gold inline-block">Zapytaj o voucher</a>
      </div>

      <!-- Image -->
      <div class="fade-up md:order-none order-first">
        <div class="rounded-lg overflow-hidden">
          <img :src="voucherImg" alt="Voucher Harmonia" class="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  </section>
</template>
