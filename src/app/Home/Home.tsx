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

  console.log(selected);

  return (
    <motion.div
      className="relative min-h-screen flex flex-col overflow-x-hidden"
      {...ScaleInThenScaleOut}
    >
      <motion.div
        className="absolute z-10 hidden lg:block"
        style={{ width: '145px', top: '80px', left: '79px' }}
        {...FadeInThenFadeOut}
      >
        <Socials />
      </motion.div>

      {/* logo */}
      <motion.div
        className="absolute z-10 transform -translate-x-1/2"
        style={{ top: '115px', left: '50%' }}
        {...FadeInThenFadeOut}
      >
        <Logo />
      </motion.div>

      {/* selected */}
      <div className="z-10 mx-auto">
        <TV selected={selected} />
      </div>

      <motion.div
        className="absolute z-10 transform -skew-y-3 hidden lg:block"
        style={{ width: '180px', top: '82px', right: '70px' }}
        {...FadeInThenFadeOut}
      >
        <Cta />
      </motion.div>

      {/* desktop */}
      <div
        className="absolute z-10 transform top-1/2 left-1/2 hidden lg:block"
        style={{
          width: '72.333%',
          transform: 'translate(-50%, -100%)',
        }}
      >
        <Navigation onClick={setSelected} />
      </div>

      {/* smaller */}
      <motion.div
        className="absolute mx-auto z-10 w-full md:w-10/12 block lg:hidden"
        style={{ top: '43%', transform: 'translateY(-50%)' }}
        {...d_slideright}
      >
        <Navigation onClick={setSelected} />
      </motion.div>

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
