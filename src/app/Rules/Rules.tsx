import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import BGImage from '../../assets/images/bg-piano.jpg';
import { Number } from '../../components/Heading';

export default function Rules() {
  return (
    <div className="relative w-screen h-screen flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img className="object-cover w-full" src={BGImage} alt="background piano studio" />
      </div>
      <div className="m-auto w-full z-10">
        <div className="my-auto px-40">
          <h2 className="text-primary uppercase font-drukwide-bold text-4xl">the spartan way</h2>
        </div>
        <div className="w-full mt-5 pl-56 pr-0">
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
        </div>
      </div>
    </div>
  );
}
