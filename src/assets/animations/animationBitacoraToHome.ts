import gsap from "gsap";

export const tlBitacoraToHome = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out'
  }
})
tlBitacoraToHome.to('#main_bitacora', {
  left: '-5%',
  bottom: '-10%',
  xPercent: 0,
  yPercent: 0,
  width: '25%',
  maxWidth: '240px', 
}).to('.main_bitacora-span', {
  rotate: '+=90'
}, 0)

export const tlMainCircleInitial = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out'
  }
})
tlMainCircleInitial.to('#main_ctr', {
  top: '50%',
  left: '50%',
  width: '50%'
}).to('.main_button', {
  rotate: '+=30'
}, 0).to('.main_button-ctr', {
  rotate: '-=30'
}, 0).to('.main_buttons-paragrah', {
  fontSize: '25px',
}, 0)