import gsap from "gsap";

export const tlBitacora = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out'
  }
})

export const animationBitacora = ()=>{
  tlBitacora.set('#main_products-title', {
    display: 'none'
  }).to('#main_products', {
    width: 0,
  }).set('#main_products', {
    opacity: 0,
  }).to('#main_ctr', {
    top: '10%',
    width: 1/4,
    left: '10%',
  }).to('.main_button', {
    rotate: '-=30'
  }, '<').to('.main_button-ctr', {
    rotate: '+=30'
  }, '<').to('.main_buttons-paragrah', {
    fontSize: '18px',
  }, '<').set('#main_bitacora-btn', {
    pointerEvents: 'none',
    paddingTop: '100px',
    paddingLeft: '70px',
    paddingRight: '70px',
  }).to('#main_bitacora', {
    left: '50%',
    top: '50%',
    xPercent: -50,
    yPercent: -50,
    width: '450px',
    maxWidth: '450px', 
  }).set('.bitacora-text', {
    display: 'block'
  })
}