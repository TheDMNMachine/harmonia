<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const container = ref(null)
useScrollReveal(container)

const contactItems = [
  {
    label: '+49 535 932 657',
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17 13.5C15.75 13.5 14.55 13.3 13.43 12.93C13.08 12.82 12.69 12.9 12.41 13.17L10.21 15.37C7.38 13.93 5.06 11.62 3.62 8.78L5.82 6.57C6.1 6.31 6.18 5.92 6.07 5.57C5.7 4.45 5.5 3.25 5.5 2C5.5 1.45 5.05 1 4.5 1H2C1.45 1 1 1.45 1 2C1 10.84 8.16 18 17 18C17.55 18 18 17.55 18 17V14.5C18 13.95 17.55 13.5 17 13.5Z" stroke="#D4A76A" stroke-width="1" fill="none"/></svg>',
  },
  {
    label: 'ul. Kołłątaja 2/9, Tomaszów Mazowiecki',
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17 8.5C17 13.19 10 19 10 19C10 19 3 13.19 3 8.5C3 4.91 6.13 2 10 2C13.87 2 17 4.91 17 8.5Z" stroke="#D4A76A" stroke-width="1"/><circle cx="10" cy="8.5" r="2.5" stroke="#D4A76A" stroke-width="1"/></svg>',
  },
]
</script>

<template>
  <section id="kontakt" ref="container" class="section-pad bg-beige-light">
    <div class="content-max">

      <div class="fade-up max-w-lg">
        <p class="section-label">Kontakt</p>
        <h2 class="section-heading">Umów wizytę</h2>
        <div class="divider-line"></div>
        <p class="section-desc">
          Zapraszam do kontaktu w celu umówienia wizyty
          lub zadania pytań dotyczących zabiegów.
        </p>

        <div class="mt-8 flex flex-col gap-4">
          <div
            v-for="item in contactItems"
            :key="item.label"
            class="flex items-center gap-3 text-[0.95rem] text-brown-warm"
          >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="item.icon"></span>
            {{ item.label }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
