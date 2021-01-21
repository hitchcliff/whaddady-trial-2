import Navigation from './Navigation';
import BGImage from '../../assets/images/background-mini.jpg';
import Socials from './Socials';
import Logo from './Logo';
import Cta from './Cta';
import { motion } from 'framer-motion';
import {
  FadeInThenFadeOut,
  ScaleInThenScaleOut,
} from '../../components/FramerMotion/FramerMotions';
import { useState } from 'react';
import TV from './TV';

export default function Home() {
  const [selected, setSelected] = useState<string>('');

  return (
    <motion.div
      className="w-full relative flex flex-col justify-center items-center bg-black"
      {...ScaleInThenScaleOut}
    >
      <motion.div
        className="socials absolute transform skew-y-3 hidden md:block z-10"
        {...FadeInThenFadeOut}
      >
        <Socials />
      </motion.div>

      <motion.div
        className="cta absolute transform -skew-y-3 hidden md:block z-10"
        {...FadeInThenFadeOut}
      >
        <Cta onClick={setSelected} />
      </motion.div>

      <div className="absolute logo z-10">
        <motion.div className={!selected ? 'logo' : 'hidden'} {...FadeInThenFadeOut}>
          <Logo />
        </motion.div>

        <div className={selected ? 'logo z-10 block' : 'hidden'}>
          <TV selected={selected} />
        </div>
      </div>

      <div className="navigation absolute z-10">
        <Navigation onClick={setSelected} />
      </div>

      <motion.div className="spinning-logo absolute -ml-5 -mt-5 z-10" {...FadeInThenFadeOut}>
        <Logo spinning />
      </motion.div>

      <motion.img
        className="w-full hidden md:block"
        src={BGImage}
        alt="studio"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        {...FadeInThenFadeOut}
      />

      <div className="top-0 left-0 w-full h-screen z-0 block md:hidden">
        <img className="w-full h-full object-cover object-center" src={BGImage} alt="studio" />
      </div>
    </motion.div>
  );
}
