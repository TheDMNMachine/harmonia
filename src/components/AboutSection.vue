<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const container = ref(null)
useScrollReveal(container)

</script>

<template>
  <section id="o-mnie" ref="container" class="section-pad bg-cream">
    <div class="content-max grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

      <!-- Image -->
      <div class="fade-up relative">
        <div class="relative rounded-lg overflow-hidden">
          <img src="@/assets/portret.jpg" alt="Małgorzata Kozłowska" class="w-full h-full object-cover" />
        </div>
        <!-- Offset gold frame -->
        <div class="img-frame"></div>
      </div>

      <!-- Text -->
      <div class="fade-up">
        <p class="section-label">O mnie</p>
        <h2 class="section-heading">Małgorzata Kozłowska</h2>
        <div class="divider-line"></div>
        <p class="section-desc">
          Nazywam się Małgorzata Kozłowska. Jako magister kosmetologii stworzyłam Harmonię –
          kameralną przestrzeń, w której czas zwalnia, a Ty jesteś w centrum uwagi.
        </p>
        <p class="section-desc mt-4">
          To miejsce powstało z potrzeby ciszy i autentycznego piękna. Specjalizuję się
          w masażu Kobido oraz rytuałach pielęgnacyjnych, które łączą skuteczność z głębokim
          odprężeniem. Wierzę, że najlepsze efekty przynosi dotyk pełen uważności i spokojna,
          kobieca atmosfera.
        </p>
        <p class="section-desc mt-4">
          Zapraszam Cię do świata, w którym odetchniesz od codzienności, a o Twoją skórę
          zadbam w atmosferze pełnego relaksu i zaufania.
        </p>

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
