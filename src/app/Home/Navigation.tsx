import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HorizontalScroll from 'react-scroll-horizontal';
import { d_slideright } from '../../components/FramerMotion/FramerMotions';
import { RoutePattern } from '../../routes/RoutePattern';

export default function Navigation() {
  return (
    <div>
      <motion.ul
        className="flex flex-row uppercase whitespace-nowrap text-white gap-32 text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
        {...d_slideright}
      >
        <HorizontalScroll
          pageLock={true}
          reverseScroll={true}
          config={{ stiffness: 30, damping: 10 }}
        >
          <li>
            <Link className="link mr-24 lg:mr-60" to={RoutePattern.Home}>
              home
            </Link>
          </li>
          <li>
            <Link className="link mr-24 lg:mr-60" to={RoutePattern.Rules}>
              rules
            </Link>
          </li>
          <li>
            <Link className="link mr-24 lg:mr-60" to={RoutePattern.FutureTools}>
              future tools
            </Link>
          </li>
          <li>
            <Link className="link mr-24 lg:mr-60" to={RoutePattern.Testimonials}>
              testimonials
            </Link>
          </li>
          <li>
            <Link className="link mr-24 lg:mr-60" to={RoutePattern.HowItWorks}>
              how it works
            </Link>
          </li>
          <li>
            <Link className="link" to={RoutePattern.SumbmitYourMusic}>
              submit you music
            </Link>
          </li>
        </HorizontalScroll>
      </motion.ul>
    </div>
  );
}
