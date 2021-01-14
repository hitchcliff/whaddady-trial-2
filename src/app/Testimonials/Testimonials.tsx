import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import { RoutePattern } from '../../routes/RoutePattern';
import BGImage from '../../assets/images/bg-piano.jpg';
import Item from './Item';
import PageNavigation from '../PageNavigation/PageNavigation';

export default function Testimonials() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img className="object-cover w-full" src={BGImage} alt="background piano studio" />
      </div>
      <div className="w-full z-10">
        <div className="my-auto px-40">
          <h2 className="text-primary uppercase font-drukwide-bold text-4xl">the spartan way</h2>
        </div>
        <div className="w-full mt-5 pl-56 flex flex-col">
          <HorizontalScroll
            pageLock={true}
            reverseScroll={true}
            config={{ stiffness: 30, damping: 10 }}
          >
            <Item />
            <Item />
            <Item />
          </HorizontalScroll>
        </div>
      </div>
      <PageNavigation to={RoutePattern.SumbmitYourMusic} text="submit your music" />
    </div>
  );
}
