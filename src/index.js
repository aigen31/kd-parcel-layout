import Alpine from "alpinejs"
import Glide from "@glidejs/glide"

window.Alpine = Alpine

Alpine.start()

let glide = new Glide('.glide', {
  type: 'carousel',
  perView: 4,
  gap: 0,
  breakpoints: {
    1024: {
      perView: 3
    },
    768: {
      perView: 2
    },
    640: {
      perView: 1
    }
  }
})

glide.mount()