import { motion } from 'framer-motion';
import React from 'react';
import { SlideRight, SlideUp } from '../FramerMotion/FramerMotions';

export enum Version {
  v1 = 'v1',
  v2 = 'v2',
}

interface HeadingsProps {
  text: string;
  text2?: string;
  after: string;
  after2?: string;
  v: Version;
}

export default function Headings({ text, text2, after, after2, v }: HeadingsProps) {
  return (
    <div>
      {v === Version.v1 ? (
        <div className="relative">
          <div
            className="font-drukwide-bold uppercase text-center text-black text-8xl z-0 relative text-opacity-0"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,.2)' }}
          >
            {after} <br />
            {after2}
            <h2 className="font-drukwide-bold uppercase text-center text-6xl text-primary z-10 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 whitespace-nowrap transition-all hover:text-primary">
              {text} <br />
              {text2}
            </h2>
          </div>
        </div>
      ) : (
        <div>
          <motion.div
            className="font-drukwide-bold uppercase text-center text-black z-0 text-4xl md:text-5xl lg:text-6xl "
            style={{ WebkitTextStroke: '2px rgba(255,255,255,.2)' }}
            {...SlideUp}
          >
            {after} <br />
            {after2}
            <motion.h2
              className="font-drukwide-bold uppercase text-primary z-10 whitespace-nowrap transition-all -mt-4 hover:text-primary text-2xl md:text-3xl lg:text-4xl"
              {...SlideUp}
            >
              {text} <br />
              {text2}
            </motion.h2>
          </motion.div>
        </div>
      )}
    </div>
  );
}
