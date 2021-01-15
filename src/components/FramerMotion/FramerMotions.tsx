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
    transition: {
      ...transition,
      delay: 0,
    },
  },
  transition: {
    ...transition,
    delay: 1,
  },
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
    y: -40,
    scale: 1.5,
    opacity: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    y: 100,
    scale: 2.5,
    opacity: 0.5,
    transition: {
      duration: 3,
    },
  },
  transition,
};
