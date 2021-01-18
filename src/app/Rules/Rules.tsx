import React, { useEffect } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import { RoutePattern } from '../../routes/RoutePattern';
import BGImage from '../../assets/images/bg-piano-mini.jpg';
import PageNavigation from '../PageNavigation/PageNavigation';
import Item from './Item';
import { motion } from 'framer-motion';
import { SlideRight } from '../../components/FramerMotion/FramerMotions';
import { Draggable } from '../../components';

export default function Rules() {
  useEffect(() => {
    const ele: HTMLElement | any = document.querySelector('.rules-overflow');
    Draggable(ele);
  }, []);
  return (
    <div
      id="rules"
      className="relative w-screen min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img className="object-cover w-full h-full" src={BGImage} alt="background piano studio" />
      </div>
      <div className="w-full z-10">
        <div className="my-auto px-10 lg:px-40">
          <motion.h2 className="text-primary uppercase font-drukwide-bold text-4xl" {...SlideRight}>
            the spartan way
          </motion.h2>
        </div>
      </div>
      <div className="w-full mt-12 flex flex-col">
        <HorizontalScroll
          className="rules-overflow touch-true"
          pageLock={true}
          reverseScroll={true}
          config={{ stiffness: 30, damping: 10 }}
        >
          <div className="rule-item">
            <Item str="1" className="pl-20 lg:hpl-56">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
              perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem
              aut consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
            </Item>
          </div>
          <div>
            <Item str="2" className="pl-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
              perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem
              aut consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
            </Item>
          </div>
          <div>
            <Item str="3" className="pl-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
              perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem
              aut consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
            </Item>
          </div>
          <div>
            <Item str="4" className="pl-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
              perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem
              aut consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
            </Item>
          </div>
          <div>
            <Item str="5" className="pl-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
              perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem
              aut consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
            </Item>
          </div>
          <div className="rule-item">
            <Item str="6" className="pl-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
              perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem
              aut consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
            </Item>
          </div>
        </HorizontalScroll>
      </div>
      <PageNavigation to={RoutePattern.FutureTools} text="future tools" />
    </div>
  );
}
