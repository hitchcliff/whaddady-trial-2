import Navigation from './Navigation';
import BGImage from '../../assets/images/background-mini.jpg';
import Socials from './Socials';
import Logo from './Logo';
import Cta from './Cta';
import { motion } from 'framer-motion';
import { FadeInThenFadeOut } from '../../components/FramerMotion/FramerMotions';
import { useState } from 'react';
import TV from './TV';

export default function Home() {
  const [selected, setSelected] = useState<string>('');

  return (
    <motion.div
      className="relative min-h-screen flex flex-col justify-between overflow-x-hidden"
      // {...ScaleInThenScaleOut}
    >
      <div></div>
      <div>hey</div>
      <div>hey</div>
      <div className="z-10 flex flex-row justify-between items-center">
        <motion.div className="socials" {...FadeInThenFadeOut}>
          <Socials />
        </motion.div>

        <div>hey</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          {/* logo */}
          <motion.div className="logo" {...FadeInThenFadeOut}>
            <Logo />
          </motion.div>

          {/* selected */}
          <div className="-logo z-10">
            <TV selected={selected} />
          </div>
        </div>
        <div>hey</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <motion.div className="cta" {...FadeInThenFadeOut}>
          <Cta onClick={setSelected} />
        </motion.div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      {/* desktop */}
      <div className="navigation z-10">
        <Navigation onClick={setSelected} />
      </div>
      <div></div>
      <div></div>
      <div></div>
      {/* desktop */}
      <motion.div
        className="spinning-logo z-10 mx-auto flex flex-row justify-around"
        {...FadeInThenFadeOut}
      >
        <div className="spin-logo">
          <Logo spinning />
        </div>
      </motion.div>
      <div>hey</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <img className="object-cover w-full h-full" src={BGImage} alt="music studio" />
      </div>
      {/* <TestPage /> */}
    </motion.div>
  );
}
