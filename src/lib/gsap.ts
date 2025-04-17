import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import TextPlugin from "gsap/TextPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";

let registered = false;

export const registerGSAP = () => {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger, Flip, TextPlugin, MotionPathPlugin);
    registered = true;
  }
};

export { gsap, ScrollTrigger };
