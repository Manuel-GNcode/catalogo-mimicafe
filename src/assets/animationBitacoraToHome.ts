import gsap from "gsap";

export const tlBitacoraToHome = gsap.timeline({
  defaults: {
    duration: 0.4,
    ease: 'sine.out'
  }
})

export const animationBitacoraToHome = ()=>{
  tlBitacoraToHome.to('#main_direction', {
    yPercent: 100,
  }).set('#main_direction', {
    display: 'none',
  }).set('.bitacora-text', {
    display: 'none'
  }, 0).set('#main_bitacora-btn, #main_home-btn', {
    display: 'none',
    pointerEvents: 'auto',
    paddingTop: '72px',
    paddingLeft: '32px',
    paddingRight: '32px',
  }, 0)
  .to('#main_bitacora', {
    left: '-5%',
    bottom: '-10%',
    xPercent: 0,
    yPercent: 0,
    width: '25%',
    maxWidth: '240px', 
  }, 0).to('.main_bitacora-span, .main_home-span', {
    rotate: '+=90'
  }, 0)
  .to('#main_home', {
    bottom: '-10%',
    xPercent: 0,
    yPercent: 0,
  }, 0)
  .to('#main_ctr', {
    top: '50%',
    left: '50%',
    width: '50%'
  }).to('.main_button', {
    rotate: '+=30'
  }, '<').to('.main_button-ctr', {
    rotate: '-=30'
  }, '<')
}