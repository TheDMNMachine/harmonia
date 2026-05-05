<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const container = ref(null)
useScrollReveal(container)

const testimonials = [
  {
    text: 'Po pierwszym masażu Kobido moja skóra wyglądała jak po profesjonalnym zabiegu medycyny estetycznej. Jestem zachwycona wynikami!',
    name: 'Katarzyna W.',
    initials: 'KW',
    role: 'Stała klientka',
  },
  {
    text: 'Rytuał japoński to absolutnie wyjątkowe doświadczenie. Małgorzata tworzy atmosferę, w której naprawdę można się odprężyć.',
    name: 'Joanna M.',
    initials: 'JM',
    role: 'Klientka od 2 lat',
  },
  {
    text: 'Profesjonalizm na najwyższym poziomie. Każdy zabieg jest dopasowany indywidualnie. Polecam z całego serca!',
    name: 'Anna S.',
    initials: 'AS',
    role: 'Klientka VIP',
  },
]
</script>

<template>
  <section id="opinie" ref="container" class="section-pad bg-cream">
    <div class="content-max text-center">
      <p class="section-label">Opinie</p>
      <h2 class="section-heading">Co mówią klientki</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="bg-warm-white rounded-xl p-8 border border-sand fade-up"
          :style="{ transitionDelay: i * 0.15 + 's' }"
        >
          <!-- Stars -->
          <div class="flex gap-0.5 mb-4">
            <svg v-for="s in 5" :key="s" width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 1.5L9.8 5.7L14.3 6.2L10.9 9.3L11.8 13.8L8 11.5L4.2 13.8L5.1 9.3L1.7 6.2L6.2 5.7Z" fill="#D4A76A"/>
            </svg>
          </div>

          <p class="text-[0.95rem] text-brown-warm leading-relaxed italic mb-5">„{{ t.text }}"</p>

          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-sand flex items-center justify-center font-display text-sm text-gold-deep font-medium shrink-0">
              {{ t.initials }}
            </div>
            <div>
              <p class="font-display text-[0.95rem] text-brown-deep font-medium">{{ t.name }}</p>
              <p class="text-xs text-brown-muted mt-0.5">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
