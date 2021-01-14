import { Link } from 'react-router-dom';
import Next from '../../components/Heading/Next';
import ArrowToRight from '../../assets/images/arrow-to-left.png';
import { RoutePattern } from '../../routes/RoutePattern';
import { motion } from 'framer-motion';
import {
  FadeInThenFadeOut,
  SlideLeftThenSlideRight,
  SlideRight,
} from '../../components/FramerMotion/FramerMotions';

interface PageNavigationProps {
  to: RoutePattern;
  text: string;
  text2?: string;
  className?: string;
}

export default function PageNavigation({ to, text, text2, className }: PageNavigationProps) {
  return (
    <div className="z-10 mt-10 w-full">
      <motion.div
        className="flex flex-row justify-between items-center z-10 mr-auto px-10"
        {...FadeInThenFadeOut}
      >
        <Link
          className="text-sm text-white font-drukwide-bold hover:text-primary"
          to={RoutePattern.Home}
        >
          x
        </Link>
        <motion.div className="pr-10" {...SlideRight}>
          <img className="w-36 md:w-56 point-right" src={ArrowToRight} alt="arrow to right" />
        </motion.div>
      </motion.div>
      <motion.div className="ml-auto mr-12 mt-12" {...SlideLeftThenSlideRight}>
        <div className={className}>
          <Next text={text} after={text2 ? text2 : 'next'} to={to} />
        </div>
      </motion.div>
    </div>
  );
}
