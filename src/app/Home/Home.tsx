import Navigation from './Navigation';
import BGImage from '../../assets/images/background.jpg';
import Socials from './Socials';
import Logo from './Logo';
import Cta from './Cta';
import { motion } from 'framer-motion';
import {
  FadeInThenFadeOut,
  ScaleInThenScaleOut,
  SlideLeftThenSlideRight,
} from '../../components/FramerMotion/FramerMotions';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <motion.div
        className="absolute z-10"
        style={{ width: '145px', top: '101px', left: '79px' }}
        {...FadeInThenFadeOut}
      >
        <Socials />
      </motion.div>
      <motion.div
        className="absolute z-10 transform -translate-x-1/2"
        style={{ top: '150px', left: '50%' }}
        {...FadeInThenFadeOut}
      >
        <Logo />
      </motion.div>
      <motion.div
        className="absolute z-10 transform -skew-y-3"
        style={{ width: '180px', top: '108px', right: '70px' }}
        {...FadeInThenFadeOut}
      >
        <Cta />
      </motion.div>
      <motion.div className="m-auto z-10" style={{ width: '72.333%' }} {...SlideLeftThenSlideRight}>
        <Navigation />
      </motion.div>
      <motion.div
        className="absolute z-10 transform -translate-x-1/2"
        style={{ bottom: '212px', left: '48.9%' }}
        {...SlideLeftThenSlideRight}
      >
        <Logo spinning />
      </motion.div>
      <div className="absolute top-0 left-0 z-0">
        <motion.img
          className="object-cover w-full h-full"
          src={BGImage}
          alt="music studio"
          {...ScaleInThenScaleOut}
        />
      </div>
    </div>
  );
}
