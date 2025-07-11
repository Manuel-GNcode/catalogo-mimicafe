import { gsap } from "gsap";

const btnTortas = document.getElementById('button_tortas');
const btnMalteadas = document.getElementById('button_malteadas');
const btnHelados = document.getElementById('button_helados');
const mainHomeBtn = document.getElementById('main_home-btn');

// control del viewport
let previousWidth = window.innerWidth; //1024px breakpoint

let currentState = 0; //Estado base
// 1 tortas, 2 malteadas, 3 helados

//Animación de salida de los avatars
const tlExitAvatars = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.6,
    ease: 'back.in',
    autoAlpha: 0,
    top: '-=5%',
  }
})
const animationsExitAvatars = ()=>{
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

//Animación de rotación de botones, desaparecer el contenido y muñeca entre
const tlRotate = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.6,
    ease: 'sine.out'
  }
})
const animationsRotate = (avatar:number)=>{
  if (avatar == 1) {
    tlRotate.to('#button_tortas', {
      rotate: '+=180',
    }).to('#button_tortas div', {
      rotate: '-=180',
    }, '<').to('#button_tortas p', {
      autoAlpha: 0,
      duration: 0.2
    }, '<').to('#main_wrapper-avatar-tortas', {
      opacity: 1,
      y: '12%',
    }, '<')
  } else if (avatar == 2) {
    tlRotate.to('#button_malteadas', {
      rotate: '-=130',
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
    }, '<')
  } else {
    tlRotate.to('#button_helados', {
      rotate: '-=80',
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
    }, '<')
  }
}

//Animación movimiento a la izquierda y width de products
const tlProducts = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.6,
    ease: 'since.out'
  }
})
const animationsProducts = ()=>{
  tlProducts.to('#main_ctr', {
      left: '10%',
    })
    .set('#main_products', {
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
    })
}

//función asincrona para esperar las animaciones
const playTimeline = (timeline:gsap.core.Timeline)=>{
  return new Promise(resolve => {
    timeline.eventCallback("onComplete", resolve);
    timeline.play();
  });
}

// Función para revertir todas las animaciones
const reverseAnimations = async ()=>{
  await tlProducts.reverse();
  tlProducts.clear();
  await tlRotate.reverse();
  tlRotate.clear();
  await tlExitAvatars.reverse();
  tlExitAvatars.clear();

  currentState = 0;
}

const animations = async (newState:number)=>{
  if (newState == currentState) return;

  if (currentState == 0) {
    animationsExitAvatars();
    await playTimeline(tlExitAvatars)
    animationsRotate(newState);
    await playTimeline(tlRotate)

    if (previousWidth >= 1024) {
      animationsProducts();
      await playTimeline(tlProducts)
    }
  }
  if (currentState != 0) {
    await tlRotate.reverse();
    tlRotate.clear();
    animationsRotate(newState);
    await playTimeline(tlRotate)
  }

  currentState = newState;
}

btnTortas?.addEventListener('click', ()=>{
  animations(1);
})
btnMalteadas?.addEventListener('click', ()=>{
  animations(2);
})
btnHelados?.addEventListener('click', ()=>{
  animations(3);
})
mainHomeBtn?.addEventListener('click', ()=>{
  reverseAnimations();
})
window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;
  
  if (currentWidth !== previousWidth) {
    previousWidth = currentWidth;
  }
  if (currentWidth < 1024) {
    reverseAnimations();
  }
});


