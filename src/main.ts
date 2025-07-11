import { gsap } from "gsap";
import { productsDatabase } from "./assets/productsDatabase";

const btnTortas = document.getElementById('button_tortas');
const btnMalteadas = document.getElementById('button_malteadas');
const btnHelados = document.getElementById('button_helados');
const mainHomeBtn = document.getElementById('main_home-btn');
const mainProductsItems = document.getElementById('main_products-items');
const avatarLeft = document.getElementById('avatar-left');
const avatarTop = document.getElementById('avatar-top');
const avatarRight = document.getElementById('avatar-right');

const currentHover = 0;

const tlHover = gsap.timeline({
  paused:true,
  defaults: {
  duration:0.2,
  ease: 'sine.out',
  }
})

const animationHover = (newHover:number)=>{
  if (currentState != 0) return; //fix this
  if (newHover == 1) {
    tlHover.to('#avatar-right, #avatar-top, #button_helados, #button_malteadas, #main_wrapper', {filter: 'grayScale(1)'})
    .to('#avatar-left', {scale: 1.05}, 0)
  } else if (newHover == 2) {
    tlHover.to('#avatar-left, #avatar-right, #button_tortas, #button_helados, #main_wrapper', {filter: 'grayScale(1)'})
    .to('#avatar-top', {scale: 1.05}, 0)
  } else {
    tlHover.to('#avatar-left, #avatar-top, #button_tortas, #button_malteadas, #main_wrapper', {filter: 'grayScale(1)'})
    .to('#avatar-right', {scale: 1.05}, 0)
  }
  tlHover.play();
}
const clearAnimationHover = ()=>{
  if (currentState != 0) return; //fix this
  tlHover.progress(0);
  tlHover.clear();
}

avatarLeft?.addEventListener('mouseenter', ()=>{
  animationHover(1);
})
btnTortas?.addEventListener('mouseenter', ()=>{
  animationHover(1);
})
avatarTop?.addEventListener('mouseenter', ()=>{
  animationHover(2);
})
btnMalteadas?.addEventListener('mouseenter', ()=>{
  animationHover(2);
})
avatarRight?.addEventListener('mouseenter', ()=>{
  animationHover(3);
})
btnHelados?.addEventListener('mouseenter', ()=>{
  animationHover(3);
})

avatarLeft?.addEventListener('mouseleave', ()=> {
  clearAnimationHover()
})
btnTortas?.addEventListener('mouseleave', ()=>{
  clearAnimationHover()
})
avatarTop?.addEventListener('mouseleave', ()=> {
  clearAnimationHover()
})
btnMalteadas?.addEventListener('mouseleave', ()=>{
  clearAnimationHover()
})
avatarRight?.addEventListener('mouseleave', ()=> {
  clearAnimationHover()
})
btnHelados?.addEventListener('mouseleave', ()=>{
  clearAnimationHover()
})

// control del viewport
let isDesktop = true;
document.addEventListener('DOMContentLoaded', ()=>{
  if (window.innerWidth < 1024) isDesktop = false;
})

let currentState = 0; //Estado base
// 1 tortas, 2 malteadas, 3 helados

//Animación de salida de los avatars
const tlExitAvatars = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.4,
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
    duration: 0.5,
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
    duration: 0.4,
    ease: 'sine.out'
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
    }).set('#main_products h2', {
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
  if (mainProductsItems) mainProductsItems.innerHTML = '';
  await tlProducts.reverse();
  tlProducts.clear();
  await tlRotate.reverse();
  tlRotate.clear();
  await tlExitAvatars.reverse();
  tlExitAvatars.clear();

  currentState = 0;
}

//Función para renderizar los productos
const renderProducts = (category:number)=>{
  if (mainProductsItems) {
    mainProductsItems.innerHTML = ''

    const data = category==1? productsDatabase.tortas : category==2? productsDatabase.malteadas : productsDatabase.helados;
  
    data.forEach(item=>{
      const newItem = `
      <div class="products_item">
      <img src="${item.imgUrl}" alt="${item.name}" class="w-full h-full object-cover object-center rounded-[20px]">

      <span class="absolute left-1/2 -translate-x-1/2 -bottom-12 w-40">
        <h2 class="main_title text-base bg-white text-center px-4 py-1 w-full rounded-2xl relative">${item.name}</h2>
        <p class="main_title text-[12px] relative bg-gray rounded-b-xl w-fit px-4 py-1 mx-auto">$ ${item.prize}</p>
      </span>
      </div>
      `

    mainProductsItems.innerHTML += newItem;
    })

    gsap.from('.products_item', {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: 'sine.out',
    stagger: {
      each: 0.5,
      from: 'end',
      }
    })
  }
}

const animations = async (newState:number)=>{
  if (newState == currentState) return;

  if (currentState == 0) {
    animationsExitAvatars();
    await playTimeline(tlExitAvatars)
    animationsRotate(newState);
    await playTimeline(tlRotate)

    if (isDesktop) {
      animationsProducts();
      await playTimeline(tlProducts)
      renderProducts(newState);
    }
  }
  if (currentState != 0) {
    await tlRotate.reverse();
    tlRotate.clear();

    renderProducts(newState);

    animationsRotate(newState);
    await playTimeline(tlRotate);
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
  const lastIsDesktop = isDesktop;
  
  if (currentWidth >= 1024) {
    isDesktop = true;
  } else {
    isDesktop = false;
  }
  if (lastIsDesktop != isDesktop) {
    reverseAnimations();
  }
});


