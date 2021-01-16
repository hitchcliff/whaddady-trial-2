import { MotionProps } from 'framer-motion';

export const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
export const FadeInThenFadeOut: MotionProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition,
};

export const SlideLeftThenSlideRight: MotionProps = {
  initial: {
    x: 80,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: 5000,
    opacity: 0,
  },
  transition,
};

export const SlideRight: MotionProps = {
  initial: {
    x: -400,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: -400,
    opacity: 0,
  },
  transition,
};

export const SlideUp: MotionProps = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 1500,
    opacity: 0,
  },
  transition,
};

export const ScaleInThenScaleOut: MotionProps = {
  initial: {
    y: 500,
    scale: 2.5,
    opacity: 1,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 4,
    },
  },
  exit: {
    opacity: 1,
    translateY: 600,
    scale: 2.5,
    transition: {
      duration: 5,
    },
  },
  transition,
};

// dedicated for homepage
export const d_slideright: MotionProps = {
  initial: {
    x: -400,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
