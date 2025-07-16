// import { gsap } from "gsap";
import { renderProducts, mainProductsItems } from "./assets/renderProducts.ts";
import { asignHoverEvent } from "./assets/functions/asignHoverEvent.ts";
//Animaciones
import { tlExitAvatars } from "./assets/animations/animationExitAvatars.ts";
import { animationsRotate, tlRotate } from "./assets/animations/animationRotate.ts";
import { tweenLeft, tlHomeTop, tlBitacoraRight } from "./assets/animations/animationMoveCircles.ts";
import { tlProducts } from "./assets/animations/animationProducts.ts";
import { tlBitacoraCtr, tlCircleBitacora, tlTextBitacora } from "./assets/animations/animationBitacora.ts";

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

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 1024) {
    isDesktop = true;
    asignHoverEvent(hoverMap, isDesktop, currentState);
  }
});

const animationHomeToProducts = async (newState:number)=>{
  if (newState == currentState) return;

  if (currentState == 0) {
    await tlExitAvatars.play();
    animationsRotate(newState);
    await tlRotate.play();
    tweenLeft.play();
    tlHomeTop.play();
    await tlBitacoraRight.play();
    await tlProducts.play();
    renderProducts(newState);
  } else {
    if (currentState == 4) await animationBitacoraToProducts();
    await tlRotate.reverse();
    tlRotate.clear();
    renderProducts(newState);
    animationsRotate(newState);
    await tlRotate.play();
  }

  currentState = newState;
  asignHoverEvent(hoverMap, isDesktop, currentState);
}

const animationProductsToHome = async ()=>{
  if (mainProductsItems) mainProductsItems.innerHTML = '';

  if (currentState != 4) {
    await tlProducts.reverse();
    tlHomeTop.reverse();
    tweenLeft.reverse();
    await tlBitacoraRight.reverse();
    await tlRotate.reverse();
    tlRotate.clear();
    await tlExitAvatars.reverse();
  }

  currentState = 0;
  asignHoverEvent(hoverMap, isDesktop, currentState);
}

const animationProductsTobitacora = async ()=>{
  if (mainProductsItems) mainProductsItems.innerHTML = '';

  await tlProducts.reverse();
  await tlRotate.reverse();
  tlRotate.clear();
  await tlBitacoraCtr.play();
  tlCircleBitacora.play();
  tlTextBitacora.play();

  currentState = 4;
}

const animationBitacoraToProducts = async ()=>{
  tlTextBitacora.reverse();
  await tlCircleBitacora.reverse();
  tlBitacoraCtr.reverse();
  await tlProducts.play();
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
  el?.addEventListener('click', ()=> animationHomeToProducts(idx));
});

//botón de home
mainHomeBtn?.addEventListener('click', animationProductsToHome)
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


