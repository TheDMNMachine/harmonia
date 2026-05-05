<script setup>
const navLinks = ['O mnie', 'Usługi', 'Kobido', 'Cennik', 'Kontakt']
const navIds   = ['o-mnie', 'uslugi', 'kobido', 'cennik', 'kontakt']
const services = ['Masaż Kobido', 'Masaż relaksacyjny', 'Pielęgnacja twarzy', 'Rytuał japoński']
</script>

<template>
  <footer class="bg-brown-deep text-sand pt-16 pb-0">
    <div class="content-max grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 pb-10 border-b border-gold/10">

      <!-- Brand -->
      <div>
        <p class="font-display tracking-[6px] text-gold mb-2" style="font-size: 1.5rem;">HARMONIA</p>
        <p class="font-display tracking-[3px] text-brown-muted mb-5" style="font-size: 0.9rem; letter-spacing: 3px;">Kobido · Masaż · Relaks</p>
        <div class="flex gap-3">
          <a href="#" aria-label="Instagram" class="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="16" rx="4" stroke="#D4A76A" stroke-width="1"/>
              <circle cx="10" cy="10" r="4" stroke="#D4A76A" stroke-width="1"/>
              <circle cx="14.5" cy="5.5" r="1" fill="#D4A76A"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" class="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14 4.87 17.37 8.62 17.95V12.56H6.56V10H8.62V8.06C8.62 6.03 9.81 4.94 11.64 4.94C12.51 4.94 13.44 5.1 13.44 5.1V7.09H12.42C11.42 7.09 11.12 7.72 11.12 8.37V10H13.34L12.96 12.56H11.12V17.95C14.87 17.37 18 14 18 10Z" stroke="#D4A76A" stroke-width="1" fill="none"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Nawigacja -->
      <div class="flex flex-col gap-2.5">
        <p class="font-display uppercase tracking-[2px] text-gold-light mb-1" style="font-size: 0.9rem;">Nawigacja</p>
        <a
          v-for="(label, i) in navLinks"
          :key="label"
          :href="'#' + navIds[i]"
          class="text-sm text-brown-muted hover:text-gold transition-colors duration-300"
        >{{ label }}</a>
      </div>

      <!-- Usługi -->
      <div class="flex flex-col gap-2.5">
        <p class="font-display uppercase tracking-[2px] text-gold-light mb-1" style="font-size: 0.9rem;">Usługi</p>
        <a
          v-for="service in services"
          :key="service"
          href="#uslugi"
          class="text-sm text-brown-muted hover:text-gold transition-colors duration-300"
        >{{ service }}</a>
      </div>

    </div>

    <div class="text-center py-5 text-xs text-brown-muted">
      &copy; 2026 Harmonia — Małgorzata Kozłowska. Wszelkie prawa zastrzeżone.
    </div>
  </footer>
</template>
