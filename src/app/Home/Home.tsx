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
        className="absolute transform skew-y-3 hidden lg:block"
        style={{ top: '13.3%', left: '5%', width: '9.6%' }}
        {...FadeInThenFadeOut}
      >
        <Socials />
      </motion.div>

      <motion.div
        className="cta absolute transform -skew-y-3 hidden lg:block"
        {...FadeInThenFadeOut}
      >
        <Cta onClick={setSelected} />
      </motion.div>

      <div className="absolute logo">
        <motion.div className={!selected ? 'logo' : 'hidden'} {...FadeInThenFadeOut}>
          <Logo />
        </motion.div>

        <div className={selected ? 'logo z-10 block' : 'hidden'}>
          <TV selected={selected} />
        </div>
      </div>

      <div className="absolute" style={{ top: '40%', left: '13%', width: '73.333%' }}>
        <Navigation onClick={setSelected} />
      </div>

      <motion.div className="spinning-logo absolute -ml-5 -mt-5" {...FadeInThenFadeOut}>
        <Logo spinning />
      </motion.div>

      <motion.img
        className="w-full hidden lg:block"
        src={BGImage}
        alt="studio"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        {...FadeInThenFadeOut}
      />

      <motion.img
        className="w-full h-full object-cover object-center block lg:hidden"
        src={BGImage}
        alt="studio"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        {...FadeInThenFadeOut}
      />
    </motion.div>
  );
}
