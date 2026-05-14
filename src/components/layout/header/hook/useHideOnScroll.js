import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const useHideOnScroll = ({ navRef, headerRef }) => {
  useGSAP(() => {
    if (!navRef.current) return;

    let lastScroll = 0;

    const hideNav = gsap.to(navRef.current, {
      yPercent: -100,
      duration: 0.5,
      paused: true,
    })

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const currentScroll = self.scroll();

        if (Math.abs(currentScroll - lastScroll) < 60) return;

        self.direction === 1 ? hideNav.play() : hideNav.reverse()

        lastScroll = currentScroll;
      }
    })

    return () => {
      trigger.kill();
      navRef.kill();
    };

  }, {scope: headerRef})
}

export default useHideOnScroll
