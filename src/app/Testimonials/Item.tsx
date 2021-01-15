import { motion } from 'framer-motion';
import React from 'react';
import {
  ScaleInThenScaleOut,
  SlideLeftThenSlideRight,
  SlideRight,
  SlideUp,
} from '../../components/FramerMotion/FramerMotions';
import Quotes from '../../components/Heading/Quotes';

interface ItemProps {
  className?: string;
  img: string;
  title: string;
  children: string;
}

export default function Item({ className, img, title, children }: ItemProps) {
  return (
    <div className={className} style={{ width: '70vw' }}>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative mr-10 z-10">
          <motion.div {...SlideRight} className="z-10">
            <Quotes />
          </motion.div>
          <motion.img className="z-0" src={img} alt="man with chain" {...SlideRight} />
        </div>
        <div>
          <motion.h2 className="text-white text-2xl" {...SlideUp}>
            {title}
          </motion.h2>
          <motion.p className="text-white mt-5" {...SlideUp}>
            {children}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
