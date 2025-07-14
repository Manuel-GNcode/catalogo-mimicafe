import { gsap } from "gsap";

const tlHover = gsap.timeline({
  paused:true,
  defaults: {
  duration:0.2,
  ease: 'sine.out',
  }
})

export const animationHover = (newHover:number)=>{
  if (newHover == 1) {
    tlHover.to('#avatar-right, #avatar-top, #button_helados, #button_malteadas', {filter: 'grayScale(1)'})
    .to('#avatar-left', {scale: 1.05}, 0)
  } else if (newHover == 2) {
    tlHover.to('#avatar-left, #avatar-right, #button_tortas, #button_helados', {filter: 'grayScale(1)'})
    .to('#avatar-top', {scale: 1.05}, 0)
  } else {
    tlHover.to('#avatar-left, #avatar-top, #button_tortas, #button_malteadas', {filter: 'grayScale(1)'})
    .to('#avatar-right', {scale: 1.05}, 0)
  }
  tlHover.play();
}
export const clearAnimationHover = ()=>{
  tlHover.progress(0);
  tlHover.clear();
}