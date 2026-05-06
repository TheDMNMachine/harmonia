<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import kobidoImg from '@/assets/kobido.jpg'

const container = ref(null)
useScrollReveal(container)

const visualEffects = [
  'Zniwelowanie napięcia mięśniowego, które powoduje zmarszczki mimiczne',
  'Zapobiega bądź zmniejsza efekty starzenia się skóry',
  'Odzyskuje młodą twarz poprzez głęboką pracę na strukturach mięśni',
  'Stymuluje metabolizm komórkowy, co przyczynia się do szybszej regeneracji skóry',
  'Oczyszcza skórę z toksyn, zanieczyszczeń i martwych komórek — dodaje naturalnego blasku',
  'Niweluje nadmierne napięcie w okolicach szyi, klatki piersiowej i owalu twarzy',
  'Stymuluje produkcję kolagenu i elastyny',
]

const healthEffects = [
  'Reguluje bilans energetyczny całego ciała',
  'Walczy ze stresem',
  'Zapewnia pełny relaks i odprężenie',
  'Zmniejsza efekty bruksizmu',
  'Łagodzi bóle głowy',
  'Zapobiega sztywności twarzy',
  'Zmniejsza problemy z układem pokarmowym',
  'Poprawia wzrok',
]
</script>

<template>
  <section id="kobido" ref="container" class="section-pad bg-beige-light">
    <div class="content-max">

      <!-- Top: photo + intro text -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start mb-16">

        <!-- Visual / photo -->
        <div class="fade-up md:order-none order-first">
          <div class="rounded-lg overflow-hidden">
            <img :src="kobidoImg" alt="Masaż Kobido Tomaszów Mazowiecki — Harmonia Małgorzata Kozłowska" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Intro text -->
        <div class="fade-up">
          <p class="section-label">Kobido</p>
          <h2 class="section-heading">Masaż KOBIDO</h2>
          <div class="divider-line"></div>

          <p class="section-desc mb-5">
            KOBIDO to niepowtarzalna forma sztuki masażu, która oznacza „starożytną drogę do piękna".
            To rytuał podlegający ściśle określonym regułom, bazującym na tradycji medycyny chińskiej.
          </p>
          <p class="text-[0.95rem] text-brown-warm leading-relaxed mb-8">
            Większość metod masażu twarzy działa na powierzchni skóry. KOBIDO poprzez swoją złożoność
            i intensywność technik działa na głębszych warstwach skóry i mięśni. To najbardziej
            zaawansowana technicznie forma japońskiego masażu twarzy — można powiedzieć, że KOBIDO
            posiada największą i najbardziej złożoną liczbę technik manualnych na świecie.
          </p>

          <h3 class="kobido-subheading">Jak wygląda sesja KOBIDO?</h3>
          <p class="text-[0.95rem] text-brown-warm leading-relaxed">
            Sesja trwa około 1h 15 min i zaczyna się gładkimi, delikatnymi ruchami dążącymi do relaksu
            i zniwelowania napięć. Następnie terapeuta przechodzi do masażu karku, uruchamiając krążenie
            krwi prowadzące do skóry twarzy niezbędne składniki odżywcze. Dopiero wtedy możliwe jest
            przejście do najbardziej charakterystycznych intensywnych technik KOBIDO: perkusji, szybkiego
            szczypania, delikatnego pociągania, ugniatania i głębokiego wygładzania skóry.
            Celem intensywnych technik jest usunięcie wszelkich napięć, które mają tendencję do
            zamrożenia mięśni i ich funkcji.
          </p>

          <a href="#kontakt" class="btn-gold mt-8 inline-block">Zarezerwuj Kobido</a>
        </div>

      </div>

      <!-- Bottom: two effect columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 fade-up">

        <!-- Wizualne efekty -->
        <div class="effects-card">
          <h3 class="kobido-subheading mb-5">Wizualne efekty masażu KOBIDO</h3>
          <ul class="flex flex-col gap-3">
            <li v-for="e in visualEffects" :key="e" class="flex items-start gap-2.5 text-[0.9rem] text-brown-warm">
              <svg class="mt-1 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="#D4A76A" stroke-width="0.8"/>
                <path d="M5 8L7 10L11 6" stroke="#D4A76A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ e }}
            </li>
          </ul>
        </div>

        <!-- Zdrowotne efekty -->
        <div class="effects-card">
          <h3 class="kobido-subheading mb-5">Zdrowotne efekty masażu KOBIDO</h3>
          <ul class="flex flex-col gap-3">
            <li v-for="e in healthEffects" :key="e" class="flex items-start gap-2.5 text-[0.9rem] text-brown-warm">
              <svg class="mt-1 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="#D4A76A" stroke-width="0.8"/>
                <path d="M5 8L7 10L11 6" stroke="#D4A76A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ e }}
            </li>
          </ul>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.kobido-subheading {
  @apply font-display uppercase tracking-widest text-brown-deep mb-3;
  font-size: 0.85rem; letter-spacing: 3px;
}
.effects-card {
  @apply bg-cream rounded-xl px-8 py-8 border border-sand;
}
</style>
