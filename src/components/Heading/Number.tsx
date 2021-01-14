import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { SlideUp, transition } from '../FramerMotion/FramerMotions';

interface NumberProps {
  number: string;
  children: any;
}
export default function Number({ number, children }: NumberProps) {
  return (
    <div className="flex flex-row items-center justify-center" style={{ width: '600px' }}>
      <div className="rule-number mr-10 relative py-10">
        <motion.h3
          className="font-drukwide-bold text-9xl relative z-0 top-3"
          style={{ WebkitTextStroke: '2px white' }}
          {...SlideUp}
        >
          {number}
        </motion.h3>
        <motion.h3
          className="font-drukwide-bold text-8xl text-white z-10 absolute top-7 left-0"
          {...SlideUp}
          transition={{ ...transition, duration: 2 }}
        >
          {number}
        </motion.h3>
      </div>
      <div>
        <motion.p className="rule-description font-icomoon-regular text-md text-white" {...SlideUp}>
          {children}
        </motion.p>
      </div>
    </div>
  );
}
