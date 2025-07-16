// import { gsap } from "gsap";
import { renderProducts, mainProductsItems } from "./assets/functions/renderProducts.ts";
import { asignHoverEvent } from "./assets/functions/asignHoverEvent.ts";
//Animaciones
import { tlExitAvatars } from "./assets/animations/animationExitAvatars.ts";
import { animationsRotate, tlRotate } from "./assets/animations/animationRotate.ts";
import { tweenLeft, tlHomeTop, tlBitacoraRight } from "./assets/animations/animationMoveCircles.ts";
import { tlProducts } from "./assets/animations/animationProducts.ts";
import { tlBitacoraCtr, tlCircleBitacora, tlTextBitacora } from "./assets/animations/animationBitacora.ts";
import { tlBitacoraToHome, tlMainCircleInitial } from "./assets/animations/animationBitacoraToHome.ts";

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
// 1 tortas, 2 malteadas, 3 helados, 4 bitacora

//Control de la animación del hover - buscar explicación
const hoverMap: [HTMLElement | null, number][] = [
  [avatarLeft, 1],
  [btnTortas, 1],
  [avatarTop, 2],
  [btnMalteadas, 2],
  [avatarRight, 3],
  [btnHelados, 3],
];

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 1024) {
    isDesktop = true;
    asignHoverEvent(hoverMap, isDesktop, currentState);
  }
});

const animationHomeToProducts = async (newState:number)=>{
  if (newState == currentState) return;

  if (currentState == 0) {
    await tlExitAvatars.restart();
    animationsRotate(newState);
    await tlRotate.restart();
    tweenLeft.restart();
    tlHomeTop.restart();
    await tlBitacoraRight.restart();
    await tlProducts.restart();
    renderProducts(newState);
  } else {
    await tlRotate.reverse();
    tlRotate.clear();
    renderProducts(newState);
    animationsRotate(newState);
    await tlRotate.restart();
  }

  currentState = newState;
  asignHoverEvent(hoverMap, isDesktop, currentState);
}

const animationProductsToHome = async ()=>{
  if (mainProductsItems) mainProductsItems.innerHTML = '';

  await tlProducts.reverse();
  tlHomeTop.reverse();
  tweenLeft.reverse();
  await tlBitacoraRight.reverse();
  await tlRotate.reverse();
  tlRotate.clear();
  await tlExitAvatars.reverse();

  currentState = 0;
  asignHoverEvent(hoverMap, isDesktop, currentState);
}

const animationProductsTobitacora = async ()=>{
  if (mainProductsItems) mainProductsItems.innerHTML = '';

  await tlProducts.reverse();
  await tlRotate.reverse();
  tlRotate.clear();
  await tlBitacoraCtr.restart();
  tlCircleBitacora.restart();
  tlTextBitacora.restart();

  currentState = 4;
}

const animationBitacoraToProducts = async (newState:number)=>{
  tlTextBitacora.reverse();
  await tlCircleBitacora.reverse();
  tlBitacoraCtr.reverse();
  await tlProducts.restart();
  renderProducts(newState);
  animationsRotate(newState);
  await tlRotate.restart();

  currentState = newState;
  console.log(currentState);
}

const animationBitacoraToHome = async ()=>{
  tlTextBitacora.reverse();
  tlHomeTop.reverse();
  await tlBitacoraToHome.restart();
  await tlMainCircleInitial.restart();
  await tlExitAvatars.reverse();

  currentState = 0;
  asignHoverEvent(hoverMap, isDesktop, currentState);
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
  el?.addEventListener('click', ()=> {
    if (currentState == 4) animationBitacoraToProducts(idx);
    else animationHomeToProducts(idx);
  });
});

//botón de home
mainHomeBtn?.addEventListener('click', ()=>{
  if (currentState == 4) animationBitacoraToHome();
  else animationProductsToHome();
})
//botón de bitacora
mainBitacoraBtn?.addEventListener('click', animationProductsTobitacora)

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
    //
    currentState = 0;
    asignHoverEvent(hoverMap, isDesktop, currentState);
  }
});


