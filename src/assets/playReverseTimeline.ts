import gsap from "gsap";

//función asincrona para esperar las animaciones
export const playTimeline = (timeline:gsap.core.Timeline)=>{
  return new Promise(resolve => {
    timeline.eventCallback("onComplete", resolve);
    timeline.play();
  });
}

// Función para revertir todas las animaciones
export const reverseAnimations = async (timelines: gsap.core.Timeline[]) => {
  for (const tl of timelines) {
    await tl.reverse();
    tl.clear();
  }
};