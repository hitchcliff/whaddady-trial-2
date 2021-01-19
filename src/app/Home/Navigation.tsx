import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HorizontalScroll from 'react-scroll-horizontal';
import { Draggable } from '../../components';
import { d_slideright } from '../../components/FramerMotion/FramerMotions';
import { RoutePattern } from '../../routes/RoutePattern';

interface COORD {
  xDown: number | null;
  xUp: number | null;
}

interface NavigationProps {
  onClick: (e: string) => void;
}

export default function Navigation({ onClick }: NavigationProps) {
  const COORDS: COORD = {
    xDown: null,
    xUp: null,
  };

  useEffect(() => {
    const ele: HTMLElement | any = document.querySelector('.nav-overflow');
    Draggable(ele);
  }, []);

  function mouseDown(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    COORDS.xUp = null;
    COORDS.xDown = null;

    COORDS.xDown = e.clientX;
  }

  function mouseUp(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    COORDS.xUp = e.clientX;
  }

  // redirect if not dragged
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, route: RoutePattern) {
    if (COORDS.xDown !== COORDS.xUp) {
      e.preventDefault();
    } else {
      onClick(route);
    }
  }

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
              onMouseUp={mouseUp}
              onMouseDown={mouseDown}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                handleClick(e, RoutePattern.Rules)
              }
            >
              rules
            </Link>
          </li>
          <li>
            <Link
              draggable={false}
              className="link mr-24 lg:mr-60"
              to={RoutePattern.FutureTools}
              onMouseUp={mouseUp}
              onMouseDown={mouseDown}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                handleClick(e, RoutePattern.FutureTools)
              }
            >
              future tools
            </Link>
          </li>
          <li>
            <Link
              draggable={false}
              className="link mr-24 lg:mr-60"
              to={RoutePattern.Testimonials}
              onMouseUp={mouseUp}
              onMouseDown={mouseDown}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                handleClick(e, RoutePattern.Testimonials)
              }
            >
              testimonials
            </Link>
          </li>
          <li>
            <Link
              draggable={false}
              className="link mr-24 lg:mr-60"
              to={RoutePattern.HowItWorks}
              onMouseUp={mouseUp}
              onMouseDown={mouseDown}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                handleClick(e, RoutePattern.HowItWorks)
              }
            >
              how it works
            </Link>
          </li>
          <li>
            <Link
              draggable={false}
              className="link"
              to={RoutePattern.SumbmitYourMusic}
              onMouseUp={mouseUp}
              onMouseDown={mouseDown}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                handleClick(e, RoutePattern.SumbmitYourMusic)
              }
            >
              submit your music
            </Link>
          </li>
        </HorizontalScroll>
      </motion.ul>
    </div>
  );
}
