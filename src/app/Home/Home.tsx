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
      className="flex flex-col justify-between items-center overflow-x-hidden min-h-screen"
      style={{
        background: `url(${BGImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
      {...ScaleInThenScaleOut}
    >
      <motion.div className="socials" {...FadeInThenFadeOut}>
        <Socials />
      </motion.div>

      <motion.div className="cta" {...FadeInThenFadeOut}>
        <Cta onClick={setSelected} />
      </motion.div>

      <div className="z-10 absolute logo">
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

      <motion.div className="spinning-logo" {...FadeInThenFadeOut}>
        <Logo spinning />
      </motion.div>
    </motion.div>
  );
}
