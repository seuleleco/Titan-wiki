import { onMounted, nextTick } from 'vue'

export function useCarousel (selector = '#titanCarousel', options = { interval: 1000 }) {

    onMounted(() => {
      nextTick(() => {
        const el = document.querySelector(selector)
        if (el) {
          const old = bootstrap.Carousel.getInstance(el)
          old && old.dispose()
          new bootstrap.Carousel(el, options)
        }
      })
    })
  }
