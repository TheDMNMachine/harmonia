import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(containerRef) {
  let observer

  onMounted(() => {
    if (!containerRef.value) return
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    containerRef.value.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
