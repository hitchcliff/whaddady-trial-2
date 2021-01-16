import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HorizontalScroll from 'react-scroll-horizontal';
import { d_slideright } from '../../components/FramerMotion/FramerMotions';
import { RoutePattern } from '../../routes/RoutePattern';

interface NavigationProps {
  onClick: (e: string) => void;
}

export default function Navigation({ onClick }: NavigationProps) {
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    if (!selected) return;
    onClick(selected);
  }, [selected]);

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
            <Link
              className="link mr-24 lg:mr-60"
              to={RoutePattern.Home}
              onClick={() => setSelected('home')}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className="link mr-24 lg:mr-60"
              to={RoutePattern.Rules}
              onClick={() => setSelected('rules')}
            >
              rules
            </Link>
          </li>
          <li>
            <Link
              className="link mr-24 lg:mr-60"
              to={RoutePattern.FutureTools}
              onClick={() => setSelected('future tools')}
            >
              future tools
            </Link>
          </li>
          <li>
            <Link
              className="link mr-24 lg:mr-60"
              to={RoutePattern.Testimonials}
              onClick={() => setSelected('testimonials')}
            >
              testimonials
            </Link>
          </li>
          <li>
            <Link
              className="link mr-24 lg:mr-60"
              to={RoutePattern.HowItWorks}
              onClick={() => setSelected('how it works')}
            >
              how it works
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to={RoutePattern.SumbmitYourMusic}
              onClick={() => setSelected('submit your music')}
            >
              submit your music
            </Link>
          </li>
        </HorizontalScroll>
      </motion.ul>
    </div>
  );
}
