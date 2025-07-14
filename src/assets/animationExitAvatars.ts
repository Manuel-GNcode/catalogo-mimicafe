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
export const animationsExitAvatars = ()=>{
  tlExitAvatars.to('#avatar-left',{
    left: '-=5%'
  }).to('#avatar-right',{
    left: '+=5%'
  }, '<').to('#avatar-top', {
    
  }, '<').to('#main_wrapper-text', {
    autoAlpha: 0,
  }, '<').to('#main_catalogo', {
    y: '-100%'
  }, '<')
}