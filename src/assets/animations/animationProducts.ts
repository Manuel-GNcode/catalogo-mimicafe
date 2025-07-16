import gsap from "gsap";

//Animación catalogo de productos
export const tlProducts = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out'
  }
})
tlProducts.set('#main_products', {
  opacity: 1,
}).to('#main_products', {
  width: '75%',
}).set('#main_products-title', {
  display: 'flex'
})
