export const rightAnimate = {
  offscreen: { x: 500, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { duration: 3, type: 'spring', bounce: 0.3 },
  },
}

export const topAnimate = {
  offscreen: { y: -500, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 3, type: 'spring', bounce: 0.3 },
  },
}

export const leftAnimate = {
  offscreen: { x: -500, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { duration: 3, type: 'spring', bounce: 0.3 },
  },
}

export const bottomAnimate = {
  offscreen: { y: 500, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 3, type: 'spring', bounce: 0.3 },
  },
}
