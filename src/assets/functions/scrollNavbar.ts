import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollNavbar = ()=>{
  gsap.to("#navbar", {
    scrollTrigger: {
      trigger: "#navbar",
      start: "top top",
      endTrigger: "#mobile_helados",
      end: "bottom bottom-=300",
      pin: true,
    }
  });
  gsap.from("#navbar a", {
    x: 150,
    stagger: 0.1,
    duration: 0.4,
    ease: 'sine.out',
    scrollTrigger: {
      trigger: '#mobile_tortas',
      start: 'top-=50 top',
      toggleActions: "play none none reverse",
    }
  })
}

