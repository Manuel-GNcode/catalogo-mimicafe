import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const navbarBtn = document.getElementById('navbar_btn');

gsap.registerPlugin(ScrollTrigger);

let isMenuOn = false;

export const scrollNavbar = ()=>{
  const btnAnimation = gsap.from("#navbar a", {
    paused: true,
    x: 150,
    stagger: 0.1,
    duration: 0.4,
    ease: 'sine.out',
  })
  gsap.to("#navbar", {
    xPercent: -100,
    scrollTrigger: {
      trigger: "#navbar",
      start: "top top",
      endTrigger: "#mobile_helados",
      end: "bottom bottom-=300",
      pin: true,
      toggleActions: 'play reverse play reverse'
    },
    onReverseComplete: ()=>{
      btnAnimation.reverse();
      isMenuOn = false;
    }
  });

  navbarBtn?.addEventListener('click', ()=>{
    if (isMenuOn) {
      btnAnimation.reverse();
      isMenuOn = false;
    }
    else {
      btnAnimation.restart();
      isMenuOn = true;
    }
  })
}

