import { Headings } from '../../components/Heading';
import { Version } from '../../components/Heading/Headings';
import Headset from '../../assets/images/headset.png';
import HorizontalScroll from 'react-scroll-horizontal';
import { motion } from 'framer-motion';
import { SlideRight, SlideUp } from '../../components/FramerMotion/FramerMotions';

export default function Large() {
  return (
    <HorizontalScroll pageLock={true} reverseScroll={true} config={{ stiffness: 30, damping: 10 }}>
      <div className="flex flex-row items-center mr-16 mt-10" style={{ width: '80vw' }}>
        <div className="flex flex-col">
          <div className="py-10">
            <Headings
              text="stem direct"
              text2="membership."
              after="apply&nbsp;for&nbsp;a"
              v={Version.v2}
            />
            <motion.p className="text-white mt-8 px-20" {...SlideRight}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cupiditate.
            </motion.p>
          </div>
        </div>
        <div className="m-auto">
          <motion.img
            src={Headset}
            alt="headset record"
            style={{ minWidth: '500px' }}
            {...SlideUp}
          />
        </div>
      </div>
      <div className="py-20 m-auto w-auto">
        <Headings
          after="connect"
          after2="with&nbsp;\"
          text="a dedicated"
          text2="stem rep."
          v={Version.v2}
        />
        <motion.p className="text-white mt-8 " {...SlideRight}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptates autem sint
          eos quaerat repudiandae fuga ut vitae animi possimus.
        </motion.p>
      </div>
    </HorizontalScroll>
  );
}
