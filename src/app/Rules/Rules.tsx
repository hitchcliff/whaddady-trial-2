import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalScroll from 'react-scroll-horizontal';
import { Number } from '../../components/Heading';
import { RoutePattern } from '../../routes/RoutePattern';
import BGImage from '../../assets/images/bg-piano.jpg';
import ArrowToRight from '../../assets/images/arrow-to-left.png';
import Next from '../../components/Heading/Next';

export default function Rules() {
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
            <div>
              <Number number="1">
                <p className="block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque aliquam
                  distinctio! Velit, esse enim.
                </p>
              </Number>
            </div>
            <div>
              <Number number="2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque esse illum
                  repellendus eum aliquam!
                </p>
              </Number>
            </div>
            <div>
              <Number number="3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati cum
                  est amet minus velit!
                </p>
              </Number>
            </div>
          </HorizontalScroll>
          <div className="ml-auto pr-10">
            <img className="w-56" src={ArrowToRight} alt="arrow to right" />
          </div>
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
        <Next text="future tools" after="next" to={RoutePattern.FutureTools} />
      </div>
    </div>
  );
}
