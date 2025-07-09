import { gsap } from "gsap";

const btnTortas = document.getElementById('button_tortas');
const btnMalteadas = document.getElementById('button_malteadas');
const btnHelados = document.getElementById('button_helados');

let pageState = 0; //Estado base
// 1 tortas, 2 malteadas, 3 helados

const tlBtn = gsap.timeline({
  paused: true,
  defaults: {
    duration: 0.8,
    ease: 'back.inOut',
  }
});

const btnsAnimation = async (btnNumber:number) =>{
  if (pageState == btnNumber) return;
  if (pageState != 0) {
    await tlBtn.reverse();
    await tlBtn.clear();
  }

  if (pageState == 0) gsap.to('#main_wrapper-text, #avatar-top, #avatar-left, #avatar-right', {
    alpha: 0,
    duration: 0.4,
  })

  if (btnNumber == 1) {
    tlBtn.to('#button_tortas', {
      rotate: '+=180',
    }, 0).to('#button_tortas div', {
      rotate: '-=180',
    }, 0).to('#button_tortas p', {
      opacity: 0,
      duration: 0.4
    }, 0).to('#main_wrapper-avatar-tortas', {
      opacity: 1,
      duration: 0.4,
    }, '-=50%')
  } else if (btnNumber == 2) {
    tlBtn.to('#button_malteadas', {
      rotate: '-=130',
    }, 0).to('#button_malteadas div', {
      rotate: '+=130',
    }, 0).to('#button_tortas', {
      rotate: '-=50',
    }, 0).to('#button_tortas div', {
      rotate: '+=50',
    }, 0).to('#button_malteadas p', {
      opacity: 0,
      duration: 0.4
    }, 0).to('#main_wrapper-avatar-malteadas', {
      opacity: 1,
      duration: 0.4,
    }, '-=50%')
  } else if (btnNumber == 3) {
    tlBtn.to('#button_helados', {
      rotate: '-=80',
    }, 0).to('#button_helados div', {
      rotate: '+=80',
    }, 0).to('#button_malteadas', {
      rotate: '-=50',
    }, 0).to('#button_malteadas div', {
      rotate: '+=50',
    }, 0).to('#button_tortas', {
      rotate: '-=50',
    }, 0).to('#button_tortas div', {
      rotate: '+=50',
    }, 0).to('#button_helados p', {
      opacity: 0,
      duration: 0.4
    }, 0).to('#main_wrapper-avatar-helados', {
      opacity: 1,
      duration: 0.4,
    }, '-=50%')
  }

  tlBtn.play();
  pageState = btnNumber;
}

btnTortas?.addEventListener('click', ()=>{
  btnsAnimation(1);
})
btnMalteadas?.addEventListener('click', ()=>{
  btnsAnimation(2);
})
btnHelados?.addEventListener('click', ()=>{
  btnsAnimation(3);
})


