import Navigation from './Navigation';
import BGImage from '../../assets/images/background.jpg';
import Socials from './Socials';
import Logo from './Logo';
import Cta from './Cta';
import { motion } from 'framer-motion';
import {
  d_slideright,
  FadeInThenFadeOut,
  ScaleInThenScaleOut,
} from '../../components/FramerMotion/FramerMotions';
import { useState } from 'react';
import TV from './TV';

export default function Home() {
  const [selected, setSelected] = useState<string>('');

  return (
    <motion.div
      className="relative min-h-screen flex flex-col overflow-x-hidden"
      {...ScaleInThenScaleOut}
    >
      <motion.div className="socials" {...FadeInThenFadeOut}>
        <Socials />
      </motion.div>

      {/* logo */}
      <motion.div className="logo" {...FadeInThenFadeOut}>
        <Logo />
      </motion.div>

      {/* selected */}
      <div className="z-10 mx-auto">
        <TV selected={selected} />
      </div>

      <motion.div className="cta" {...FadeInThenFadeOut}>
        <Cta onClick={setSelected} />
      </motion.div>

      {/* desktop */}
      <div className="navigation">
        <Navigation onClick={setSelected} />
      </div>

      {/* desktop */}
      <motion.div
        className="absolute z-10 transform -translate-x-1/2 hidden lg:block"
        style={{ bottom: '235px', left: '49.6%' }}
        {...FadeInThenFadeOut}
      >
        <Logo spinning />
      </motion.div>

      {/* smaller */}
      <motion.div
        className="absolute z-10 transform -translate-x-1/2 block lg:hidden"
        style={{ bottom: '200px', left: '49.6%' }}
        {...FadeInThenFadeOut}
      >
        <Logo spinning />
      </motion.div>

      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <img className="object-cover w-full h-full" src={BGImage} alt="music studio" />
      </div>
    </motion.div>
  );
}
