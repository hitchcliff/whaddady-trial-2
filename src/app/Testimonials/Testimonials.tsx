import React, { useEffect } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import { RoutePattern } from '../../routes/RoutePattern';
import BGImage from '../../assets/images/bg-piano.jpg';
import Item from './Item';
import PageNavigation from '../PageNavigation/PageNavigation';
import ShowcaseImage from '../../assets/images/testimonial.jpg';
import { SlideLeftThenSlideRight } from '../../components/FramerMotion/FramerMotions';
import { motion } from 'framer-motion';
import { Draggable } from '../../components';

export default function Testimonials() {
  useEffect(() => {
    const ele: HTMLElement | any = document.querySelector('.scroll-horizontal');
    Draggable(ele);
  }, []);
  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img className="object-cover w-full h-full" src={BGImage} alt="background piano studio" />
      </div>
      <div className="w-full py-20 lg:py-0 z-10">
        <div className="my-auto px-10 lg:px-40">
          <motion.h2
            className="text-primary uppercase font-drukwide-bold text-4xl"
            {...SlideLeftThenSlideRight}
          >
            testimonials
          </motion.h2>
        </div>
      </div>
      <div className="w-full flex flex-col mt-0 lg:mt-12">
        <HorizontalScroll
          pageLock={true}
          reverseScroll={true}
          config={{ stiffness: 30, damping: 10 }}
        >
          <Item img={ShowcaseImage} className="pl-20 lg:pl-40" title="3partan is the future">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, natus aperiam!
            Labore pariatur mollitia suscipit vitae sit quas architecto, omnis sunt laborum
            voluptates repellat doloremque sequi dolorum aliquid officiis quia.
          </Item>
          <Item img={ShowcaseImage} className="pl-10" title="3partan is the future">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, natus aperiam!
            Labore pariatur mollitia suscipit vitae sit quas architecto, omnis sunt laborum
            voluptates repellat doloremque sequi dolorum aliquid officiis quia.
          </Item>
          <Item img={ShowcaseImage} className="pl-10" title="3partan is the future">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, natus aperiam!
            Labore pariatur mollitia suscipit vitae sit quas architecto, omnis sunt laborum
            voluptates repellat doloremque sequi dolorum aliquid officiis quia.
          </Item>
        </HorizontalScroll>
      </div>
      <PageNavigation to={RoutePattern.SumbmitYourMusic} text="submit your music" />
    </div>
  );
}
