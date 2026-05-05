<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const container = ref(null)
useScrollReveal(container)

const form = ref({ name: '', email: '', phone: '', service: '', message: '' })
const formSent = ref(false)

const serviceOptions = [
  'Masaż Kobido', 'Masaż relaksacyjny', 'Pielęgnacja twarzy', 'Rytuał japoński', 'Inny',
]

const submitForm = () => {
  formSent.value = true
  setTimeout(() => {
    form.value = { name: '', email: '', phone: '', service: '', message: '' }
    formSent.value = false
  }, 3000)
}

const contactItems = [
  {
    label: 'kontakt@harmonia-beauty.pl',
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4H16C17.1 4 18 4.9 18 6V14C18 15.1 17.1 16 16 16H4C2.9 16 2 15.1 2 14V6C2 4.9 2.9 4 4 4Z" stroke="#D4A76A" stroke-width="1"/><path d="M18 6L10 11L2 6" stroke="#D4A76A" stroke-width="1"/></svg>',
  },
  {
    label: '+48 123 456 789',
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17 13.5C15.75 13.5 14.55 13.3 13.43 12.93C13.08 12.82 12.69 12.9 12.41 13.17L10.21 15.37C7.38 13.93 5.06 11.62 3.62 8.78L5.82 6.57C6.1 6.31 6.18 5.92 6.07 5.57C5.7 4.45 5.5 3.25 5.5 2C5.5 1.45 5.05 1 4.5 1H2C1.45 1 1 1.45 1 2C1 10.84 8.16 18 17 18C17.55 18 18 17.55 18 17V14.5C18 13.95 17.55 13.5 17 13.5Z" stroke="#D4A76A" stroke-width="1" fill="none"/></svg>',
  },
  {
    label: 'ul. Piękna 15, Warszawa',
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17 8.5C17 13.19 10 19 10 19C10 19 3 13.19 3 8.5C3 4.91 6.13 2 10 2C13.87 2 17 4.91 17 8.5Z" stroke="#D4A76A" stroke-width="1"/><circle cx="10" cy="8.5" r="2.5" stroke="#D4A76A" stroke-width="1"/></svg>',
  },
]
</script>

<template>
  <section id="kontakt" ref="container" class="section-pad bg-beige-light">
    <div class="content-max grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

      <!-- Info -->
      <div class="fade-up">
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

        <div class="mt-8 p-5 bg-cream rounded-lg border border-sand">
          <p class="font-display text-base font-medium text-brown-deep mb-2">Godziny otwarcia</p>
          <p class="text-sm text-brown-muted mt-1">Pon – Pt: 9:00 – 20:00</p>
          <p class="text-sm text-brown-muted mt-1">Sob: 10:00 – 16:00</p>
          <p class="text-sm text-brown-muted mt-1">Nd: zamknięte</p>
        </div>
      </div>

      <!-- Form -->
      <div class="fade-up">
        <div class="bg-warm-white rounded-xl p-10 border border-sand">
          <h3 class="font-display text-[1.3rem] text-brown-deep mb-7">Formularz kontaktowy</h3>

          <div class="form-group">
            <label>Imię i nazwisko</label>
            <input v-model="form.name" type="text" placeholder="Anna Kowalska">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="form.email" type="email" placeholder="anna@email.com">
          </div>
          <div class="form-group">
            <label>Telefon</label>
            <input v-model="form.phone" type="tel" placeholder="+48 000 000 000">
          </div>
          <div class="form-group">
            <label>Zainteresowanie</label>
            <select v-model="form.service" class="select-arrow">
              <option value="">Wybierz usługę...</option>
              <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Wiadomość</label>
            <textarea v-model="form.message" rows="4" placeholder="Twoja wiadomość..."></textarea>
          </div>

          <button class="btn-gold w-full text-center" @click="submitForm">Wyślij wiadomość</button>
          <p v-if="formSent" class="text-center mt-3 text-gold-deep text-sm">
            Dziękuję! Wiadomość została wysłana.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.form-group { @apply mb-5; }
.form-group label {
  @apply block text-sm text-brown-muted mb-1.5;
  letter-spacing: 0.5px;
}
.form-group input,
.form-group select,
.form-group textarea {
  @apply w-full px-4 py-3 border border-sand rounded-md bg-cream text-brown-deep font-body text-[0.95rem] outline-none transition-colors duration-300;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { @apply border-gold; }
.form-group textarea { @apply resize-y; }
.select-arrow {
  @apply cursor-pointer appearance-none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%238C7B6B' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}
</style>
