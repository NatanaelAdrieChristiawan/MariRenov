import { Variants } from 'framer-motion';

// Container with staggered children
export const staggerContainer = (stagger: number = 0.15, delayChildren: number = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// Generic fade in + upward movement
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Slide in from a direction
export const slideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'up', dist: number = 60): Variants => {
  const dirMap = {
    left: { x: -dist, y: 0 },
    right: { x: dist, y: 0 },
    up: { x: 0, y: dist },
    down: { x: 0, y: -dist },
  } as const;
  return {
    hidden: { opacity: 0, ...dirMap[direction] },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
};

// Scale + subtle elevation on hover/focus
export const scaleOnHover: Variants = {
  rest: { scale: 1, y: 0, boxShadow: '0 0 0 0 rgba(0,0,0,0)' },
  hover: {
    scale: 1.025,
    y: -4,
    boxShadow: '0 8px 24px -4px rgba(0,0,0,0.12)',
    transition: { type: 'spring', stiffness: 280, damping: 18 },
  },
  tap: { scale: 0.98, y: 0 },
};

// Fade while in view (good for long pages)
export const fadeWhileInView: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Opacity only
export const simpleFade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

// For page transitions (wrapping main content)
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: 'easeIn' } },
};

// Utility for staggering children with different delay base
export const buildStagger = (baseDelay = 0, stagger = 0.12): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: baseDelay,
    },
  },
});
