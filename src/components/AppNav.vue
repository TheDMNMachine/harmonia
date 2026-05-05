<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen   = ref(false)
const navScrolled = ref(false)

const navLinks = [
  { id: 'o-mnie', label: 'O mnie' },
  { id: 'uslugi', label: 'Usługi' },
  { id: 'kobido', label: 'Kobido' },
  { id: 'cennik', label: 'Cennik' },
  { id: 'opinie', label: 'Opinie' },
]

const onScroll = () => { navScrolled.value = window.scrollY > 50 }

onMounted(() => { window.addEventListener('scroll', onScroll); onScroll() })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav class="nav" :class="{ scrolled: navScrolled }">
    <div class="nav-inner" :class="{ 'nav-inner--compact': navScrolled }">
      <a href="#hero" class="font-display text-2xl tracking-[6px] text-gold transition-colors duration-300">
        HARMONIA
      </a>

      <!-- Links panel -->
      <div class="links-panel" :class="{ open: menuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="'#' + link.id"
          class="nav-link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
        <a href="#kontakt" class="btn-outline !py-2 !px-5 !text-[0.8rem]" @click="menuOpen = false">
          Umów wizytę
        </a>
      </div>

      <!-- Hamburger -->
      <button class="hamburger" :class="{ active: menuOpen }" aria-label="Menu" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  @apply fixed top-0 left-0 right-0 z-[100] transition-all duration-400;
}
.nav.scrolled {
  background: rgba(253, 248, 242, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 #EAD9C8;
}
.nav-inner {
  @apply max-w-[1200px] mx-auto flex items-center justify-between px-6 py-5 transition-[padding] duration-300;
}
.nav-inner--compact { @apply py-3.5; }

.links-panel {
  @apply flex items-center gap-8;
}
.nav-link {
  @apply font-display text-sm tracking-[1px] text-brown-warm transition-colors duration-300 hover:text-gold relative;
  letter-spacing: 1px;
}
.nav-link::after {
  content: '';
  @apply absolute -bottom-1 left-0 h-px bg-gold transition-[width] duration-300;
  width: 0;
}
.nav-link:hover::after { width: 100%; }

.hamburger {
  @apply hidden w-7 h-5 relative bg-transparent border-0 cursor-pointer p-0 flex-col justify-between;
}
.hamburger span {
  @apply block w-full bg-brown-warm absolute left-0 transition-all duration-300;
  height: 1.5px;
}
.hamburger span:nth-child(1) { top: 0; }
.hamburger span:nth-child(2) { top: 50%; transform: translateY(-50%); }
.hamburger span:nth-child(3) { bottom: 0; }
.hamburger.active span:nth-child(1) { top: 50%; transform: translateY(-50%) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { bottom: 50%; transform: translateY(50%) rotate(-45deg); }

@media (max-width: 768px) {
  .hamburger { @apply flex; }
  .links-panel {
    @apply fixed top-0 right-0 h-screen flex-col justify-center gap-7 px-10 bg-cream;
    width: 75%; max-width: 320px;
    transform: translateX(100%);
    transition: transform 0.4s ease;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.08);
  }
  .links-panel.open { transform: translateX(0); }
  .nav-link { @apply text-[1.1rem]; }
}
</style>
