import gsap from "gsap";

export const tlExitAvatars = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'back.in',
    autoAlpha: 0,
    top: '-=5%',
  }
})

tlExitAvatars.to('#avatar-left',{
  left: '-=5%'
}).to('#avatar-right',{
  left: '+=5%'
}, '<').to('#avatar-top, #main_wrapper-text', {}, '<')
.to('#main_catalogo', {
  y: '-100%'
}, '<')
