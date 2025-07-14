import gsap from "gsap";

//Animación de rotación de botones, desaparecer el contenido y muñeca entre
export const tlRotate = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.5,
    ease: 'sine.out'
  }
})
export const animationsRotate = (avatar:number)=>{
  if (avatar == 1) {
    tlRotate.to('#button_tortas', {
      rotate: '+=180',
      pointerEvents: 'none'
    }).to('#button_tortas div', {
      rotate: '-=180',
    }, '<').to('#button_tortas p', {
      autoAlpha: 0,
      duration: 0.2
    }, '<').to('#main_wrapper-avatar-tortas', {
      opacity: 1,
      y: '12%',
    }, '<').fromTo('#main_products-name', {
      x: -200
    }, {
      x: 0,
      backgroundColor: 'rgba(250, 188, 127, 1)'
    }, '<')
  } else if (avatar == 2) {
    tlRotate.to('#button_malteadas', {
      rotate: '-=130',
      pointerEvents: 'none'
    }).to('#button_malteadas div', {
      rotate: '+=130',
    }, '<').to('#button_malteadas p', {
      autoAlpha: 0,
      duration: 0.2
    }, '<').to('#main_wrapper-avatar-malteadas', {
      opacity: 1,
      y: '20%',
    }, '<').to('#button_tortas', {
      rotate: '-=50',
    }, '<').to('#button_tortas div', {
      rotate: '+=50',
    }, '<').fromTo('#main_products-name', {
      x: -200
    }, {
      x: 0,
      backgroundColor: 'rgba(201, 200, 239, 1)'
    }, '<')
  } else {
    tlRotate.to('#button_helados', {
      rotate: '-=80',
      pointerEvents: 'none'
    }).to('#button_helados div', {
      rotate: '+=80',
    }, '<').to('#button_helados p', {
      opacity: 0,
      duration: 0.2
    }, '<').to('#main_wrapper-avatar-helados', {
      opacity: 1,
      y: '20%',
      x: '+=40px'
    }, '<').to('#button_malteadas', {
      rotate: '-=50',
    }, '<').to('#button_malteadas div', {
      rotate: '+=50',
    }, '<').to('#button_tortas', {
      rotate: '-=50',
    }, '<').to('#button_tortas div', {
      rotate: '+=50',
    }, '<').fromTo('#main_products-name', {
      x: -200
    }, {
      x: 0,
      backgroundColor: 'rgba(193, 205, 142, 1)'
    }, '<')
  }
}
