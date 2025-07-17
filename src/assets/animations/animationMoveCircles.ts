import gsap from "gsap";

//Animación circulo central mover izquierda
export const tweenLeft = gsap.to('#main_ctr', {
  left: '10%',
  duration: 0.4,
  ease: 'sine.out',
  paused: true,
})
//Animación circulo home mover top
export const tlHomeTop = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out',
  }
})
tlHomeTop.to('#main_home', {
  bottom: '110%',
  yPercent: 100,
}).to('.main_home-span', {
  rotate: '-=90'
}, 0)
export const tlHomeText = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out',
  }
})
tlHomeText.to('#main_home', {
  xPercent: -20,
}).set('#main_home-btn', {
  display: 'block'
}).set('#main_bitacora-btn', {
  display: 'flex',
})

//Animación circulo bitacora mover derecha
export const tlBitacoraRight = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out',
  }
})
tlBitacoraRight.to('#main_bitacora', {
  left: '105%',
  xPercent: -120,
}).to('.main_bitacora-span', {
  rotate: '-=90'
}, 0)