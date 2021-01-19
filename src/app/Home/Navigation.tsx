import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import HorizontalScroll from 'react-scroll-horizontal';
import { Draggable } from '../../components';
import { d_slideright } from '../../components/FramerMotion/FramerMotions';
import { RoutePattern } from '../../routes/RoutePattern';

interface NavigationProps {
  onClick: (e: string) => void;
}

export default function Navigation({ onClick }: NavigationProps) {
  useEffect(() => {
    const ele: HTMLElement | any = document.querySelector('.nav-overflow');
    Draggable(ele);
  }, []);

  return (
    <div>
      <motion.ul
        className="flex flex-row uppercase whitespace-nowrap text-white gap-32 text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
        {...d_slideright}
      >
        <HorizontalScroll
          className="nav-overflow overflow-y-hidden touch-true"
          pageLock={true}
          reverseScroll={true}
          config={{ stiffness: 30, damping: 10 }}
        >
          <li>
            <Link
              draggable={false}
              className="link mr-24 lg:mr-60"
              to={RoutePattern.Home}
              onClick={() => onClick(RoutePattern.Home)}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              draggable={false}
              to={RoutePattern.Rules}
              className="link mr-24 lg:mr-60"
              onClick={() => onClick(RoutePattern.Rules)}
            >
              rules
            </Link>
          </li>
          <li>
            <Link
              draggable={false}
              className="link mr-24 lg:mr-60"
              to={RoutePattern.FutureTools}
              onClick={() => onClick(RoutePattern.FutureTools)}
            >
              future tools
            </Link>
          </li>
          <li>
            <Link
              draggable={false}
              className="link mr-24 lg:mr-60"
              to={RoutePattern.Testimonials}
              onClick={() => onClick(RoutePattern.Testimonials)}
            >
              testimonials
            </Link>
          </li>
          <li>
            <Link
              draggable={false}
              className="link mr-24 lg:mr-60"
              to={RoutePattern.HowItWorks}
              onClick={() => onClick(RoutePattern.HowItWorks)}
            >
              how it works
            </Link>
          </li>
          <li>
            <Link
              draggable={false}
              className="link"
              to={RoutePattern.SumbmitYourMusic}
              onClick={() => onClick(RoutePattern.SumbmitYourMusic)}
            >
              submit your music
            </Link>
          </li>
        </HorizontalScroll>
      </motion.ul>
    </div>
  );
}
