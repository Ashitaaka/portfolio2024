import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export const lineAnimation = (ref: any) => {
  return gsap.to(ref.current, {
    scaleX: 1,
    transformOrigin: "left",
    duration: 0.75,
  });
};

export const thumbContainerAnimation = (ref: any) => {
  return gsap.to(ref.current, {
    height: "100vh",
    transformOrigin: "top center",
    duration: 1,
    ease: "expo.in",
  });
};

export const scrollAnimation = (ref: any, offset: number) => {
  return gsap.to(window, {
    duration: 0.75,
    scrollTo: { y: ref.current, offsetY: offset },
    ease: "expo.inOut",
  });
};

export const titleAnimation = (ref: any) => {
  return gsap.to(ref.current, {
    duration: 0.4,
    y: -50,
    opacity: 0,
    ease: "expo.in",
  });
};

export const subtitleAnimation = (ref: any) => {
  return gsap.to(ref.current, {
    duration: 0.35,
    y: -50,
    opacity: 0,
    ease: "expo.in",
  });
};

export const projectContainerAnimation = (ref: any, scale: number) => {
  return gsap.to(ref.current, {
    scaleY: scale,
    transformOrigin: "center",
    duration: 1.2,
    ease: "power4.inOut",
  });
};

export const projectContainerAnimation2 = (ref: any, height: number) => {
  const initialHeight = ref.current.getBoundingClientRect().height;
  const topOffset = (initialHeight - height) / 2;

  return gsap.to(ref.current, {
    height: height,
    top: 0,
    duration: 1.2,
    ease: "power4.inOut",
  });
};
