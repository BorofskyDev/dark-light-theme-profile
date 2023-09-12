export const rightAnimate = {
  offscreen: { x: 200, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { 
      x: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }, 
      opacity: { duration: 1, ease: "easeInOut" }
    },
  },
};

export const topAnimate = {
  offscreen: { y: -200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: [0.6, -0.05, 0.01, 0.99] },
  },
}

export const leftAnimate = {
  offscreen: { x: -200, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: [0.6, -0.05, 0.01, 0.99] },
  },
}

export const bottomAnimate = {
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: [0.6, -0.05, 0.01, 0.99] },
  },
}

export const expandElement = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}
