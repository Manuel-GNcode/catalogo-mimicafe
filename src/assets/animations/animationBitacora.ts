import gsap from "gsap";

export const tlCircleHome = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out'
  }
})
tlCircleHome.to('#main_home', {
  bottom: '-10%',
  yPercent: 0,
}).to('.main_home-span', {
  rotate: '+=90'
}, 0).set('#main_home-btn', {
  paddingTop: '0px',
}, 0)

export const tlCircleBitacora = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out'
  }
})
tlCircleBitacora.to('#main_bitacora', {
  left: '50%',
  bottom: '50%',
  xPercent: -50,
  yPercent: 50,
  width: '450px',
  maxWidth: '450px', 
})
export const tlTextBitacora = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out'
  }
})
tlTextBitacora.set('#main_direction', {
  display: 'flex',
}).to('#main_direction', {
  y: 0,
}, 0).set('#main_bitacora-btn', {
  pointerEvents: 'none',
  paddingTop: '100px',
  paddingLeft: '70px',
  paddingRight: '70px',
}, 0).set('.bitacora-text', {
  display: 'block'
})

export const tlBitacoraCtr = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
    ease: 'sine.out'
  }
})
tlBitacoraCtr.to('#main_ctr', {
  top: '10%',
  width: 1/4,
  left: '10%',
}, 0).to('.main_button', {
  rotate: '-=30'
}, 0).to('.main_button-ctr', {
  rotate: '+=30'
}, 0).to('.main_buttons-paragrah', {
  fontSize: '18px',
}, 0)
