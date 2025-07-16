import { animationHover, clearAnimationHover } from "../animations/animationHoverAvatar";

const hoverHandlers = new Map<HTMLElement, { enter: EventListener, leave: EventListener }>();

export const asignHoverEvent = (hoverMap: [HTMLElement | null, number][], isDesktop: boolean, currentState: number) => {
  hoverMap.forEach(([el, idx]) => {
    if (!el) return;
    // Si ya existen handlers, los removemos primero
    const prev = hoverHandlers.get(el);
    if (prev) {
      el.removeEventListener('mouseenter', prev.enter);
      el.removeEventListener('mouseleave', prev.leave);
      clearAnimationHover();
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