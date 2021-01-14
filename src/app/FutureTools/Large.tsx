import { Headings } from '../../components/Heading';
import { Version } from '../../components/Heading/Headings';
import Headset from '../../assets/images/headset.png';
import HorizontalScroll from 'react-scroll-horizontal';
import { motion } from 'framer-motion';
import { SlideUp } from '../../components/FramerMotion/FramerMotions';

export default function Large() {
  return (
    <HorizontalScroll pageLock={true} reverseScroll={true} config={{ stiffness: 30, damping: 10 }}>
      <div className="flex flex-row items-center mr-16 mt-10" style={{ width: '80vw' }}>
        <div className="flex flex-col">
          <div className="py-10">
            <Headings text="in one app" after="a&nbsp;record" after2="company" v={Version.v2} />
            <motion.p className="text-white mt-8 px-20" {...SlideUp}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, quod. Expedita ad
              aperiam recusandae ipsa, dolore eaque necessitatibus consequatur autem ducimus? Quo
              aut iste facilis!
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
        <Headings after="music" text="distribution" v={Version.v2} />
        <motion.p className="text-white mt-8" {...SlideUp}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, quasi.?
        </motion.p>
      </div>
    </HorizontalScroll>
  );
}
