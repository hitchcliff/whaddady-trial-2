import React from 'react';
import Headings, { Version } from '../../components/Heading/Headings';

import HorizontalScroll from 'react-scroll-horizontal';
import ArrowToRight from '../../assets/images/arrow-to-left.png';
import Headseat from '../../assets/images/headset.png';
import { Link } from 'react-router-dom';
import { RoutePattern } from '../../routes/RoutePattern';
import Next from '../../components/Heading/Next';

export default function FutureTools() {
  return (
    <div className="bg-black w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col">
        <HorizontalScroll
          pageLock={true}
          reverseScroll={true}
          config={{ stiffness: 30, damping: 10 }}
        >
          <div className="flex flex-row items-center mr-16" style={{ width: '80vw' }}>
            <div className="flex flex-col">
              <div className="py-10">
                <Headings text="in one app" after="a&nbsp;record" after2="company" v={Version.v2} />
                <p className="text-white mt-8 px-20">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, quod. Expedita ad
                  aperiam recusandae ipsa, dolore eaque necessitatibus consequatur autem ducimus?
                  Quo aut iste facilis!
                </p>
              </div>
            </div>
            <div>
              <img className="w-full" src={Headseat} alt="headset record" />
            </div>
          </div>
          <div className="py-20 m-auto w-auto">
            <Headings after="music" text="distribution" v={Version.v2} />
            <p className="text-white mt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, quasi.?
            </p>
          </div>
        </HorizontalScroll>
        <div className="ml-auto mt-8 pr-10">
          <img className="w-56" src={ArrowToRight} alt="arrow to right" />
        </div>
      </div>
      <div className="flex flex-row justify-between z-10 mr-auto px-10">
        <Link
          className="text-sm text-white font-drukwide-bold hover:text-primary"
          to={RoutePattern.Home}
        >
          x
        </Link>
      </div>
      <div className="ml-auto mr-12 mt-12">
        <Next text="testimonials" after="next" to={RoutePattern.Testimonials} />
      </div>
    </div>
  );
}
