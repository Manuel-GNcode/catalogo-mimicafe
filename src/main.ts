// import { gsap } from "gsap";
import { animationHover, clearAnimationHover } from "./assets/animationHoverAvatar.ts";
import { animationsExitAvatars, tlExitAvatars } from "./assets/animationExitAvatars.ts";
import { animationsRotate, tlRotate } from "./assets/animationRotate.ts";
import { animationsProducts, tlProducts } from "./assets/animationProducts.ts";
import { playTimeline, reverseAnimations } from "./assets/playReverseTimeline.ts";
import { renderProducts, mainProductsItems } from "./assets/renderProducts.ts";

const btnTortas = document.getElementById('button_tortas');
const btnMalteadas = document.getElementById('button_malteadas');
const btnHelados = document.getElementById('button_helados');
const mainHomeBtn = document.getElementById('main_home-btn');
const mainBitacoraBtn = document.getElementById('main_bitacora-btn');
const avatarLeft = document.getElementById('avatar-left');
const avatarTop = document.getElementById('avatar-top');
const avatarRight = document.getElementById('avatar-right');

//Variables globales 
let isDesktop = false;
let currentState = 0; //Estado base
// 1 tortas, 2 malteadas, 3 helados

//Control de la animación del hover - buscar explicación
const hoverMap: [HTMLElement | null, number][] = [
  [avatarLeft, 1],
  [btnTortas, 1],
  [avatarTop, 2],
  [btnMalteadas, 2],
  [avatarRight, 3],
  [btnHelados, 3],
];

const hoverHandlers = new Map<HTMLElement, { enter: EventListener, leave: EventListener }>();

const asignHoverEvent = () => {
  hoverMap.forEach(([el, idx]) => {
    if (!el) return;
    // Si ya existen handlers, los removemos primero
    const prev = hoverHandlers.get(el);
    if (prev) {
      el.removeEventListener('mouseenter', prev.enter);
      el.removeEventListener('mouseleave', prev.leave);
    }
    // Si es desktop, agregamos y guardamos los nuevos handlers
    if (isDesktop && currentState==0) {
      const mouseEnterHandler = () => animationHover(idx);
      const mouseLeaveHandler = () => clearAnimationHover();
      el.addEventListener('mouseenter', mouseEnterHandler);
      el.addEventListener('mouseleave', mouseLeaveHandler);
      hoverHandlers.set(el, { enter: mouseEnterHandler, leave: mouseLeaveHandler });
    } else {
      hoverHandlers.delete(el);
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 1024) {
    isDesktop = true;
    asignHoverEvent();
  }
});

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
  asignHoverEvent();
}

//Control de la animación del click
const clickMap: [HTMLElement | null, number][] = [
  [avatarLeft, 1],
  [btnTortas, 1],
  [avatarTop, 2],
  [btnMalteadas, 2],
  [avatarRight, 3],
  [btnHelados, 3],
];

clickMap.forEach(([el, idx])=>{
  el?.addEventListener('click', ()=> animations(idx));
});

//botón de home
mainHomeBtn?.addEventListener('click', ()=>{
  if (mainProductsItems) mainProductsItems.innerHTML = '';
  reverseAnimations([tlProducts, tlRotate, tlExitAvatars]);
  currentState = 0;
  asignHoverEvent();
})
mainBitacoraBtn?.addEventListener('click', ()=>{
  if (mainProductsItems) mainProductsItems.innerHTML = '';
  
  currentState = 4;
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
    if (mainProductsItems) mainProductsItems.innerHTML = '';
    reverseAnimations([tlProducts, tlRotate, tlExitAvatars]);
    currentState = 0;

    asignHoverEvent();
  }
});


