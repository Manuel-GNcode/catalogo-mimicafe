import gsap from "gsap";

export const tlProducts = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out'
  }
})
export const animationsProducts = ()=>{
  tlProducts.to('#main_ctr', {
    left: '10%',
  }).set('#main_products', {
      opacity: 1,
  }).to('#main_products', {
      width: '75%',
  }, '<')
    .to('#main_home', {
      bottom: '110%',
      yPercent: 100,
      xPercent: -20,
    }, '<').to('.main_home-span', {
      rotate: '-=90'
    }, '<')
    .to('#main_bitacora', {
      left: '105%',
      xPercent: -120,
    }, '<').to('.main_bitacora-span', {
      rotate: '-=90'
    }, '<').set('#main_home-btn', {
      display: 'block'
    }).set('#main_products-title, #main_bitacora-btn', {
      display: 'flex'
    })
}