import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import { RoutePattern } from '../../routes/RoutePattern';
import BGImage from '../../assets/images/bg-piano.jpg';
import PageNavigation from '../PageNavigation/PageNavigation';
import Item from './Item';

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
      </div>
      <div className="w-full mt-12 flex flex-col">
        <HorizontalScroll
          pageLock={true}
          reverseScroll={true}
          config={{ stiffness: 30, damping: 10 }}
        >
          <Item str="1" className="pl-56">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
            perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem aut
            consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
          </Item>
          <Item str="2" className="pl-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
            perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem aut
            consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
          </Item>
          <Item str="3" className="pl-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
            perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem aut
            consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
          </Item>
          <Item str="4" className="pl-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
            perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem aut
            consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
          </Item>
          <Item str="5" className="pl-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
            perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem aut
            consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
          </Item>
          <Item str="6" className="pl-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium,
            perspiciatis similique quas delectus necessitatibus deleniti corporis exercitationem aut
            consequuntur non illum libero fugiat facere nobis molestias quisquam, eos error.
          </Item>
        </HorizontalScroll>
      </div>
      <PageNavigation to={RoutePattern.FutureTools} text="future tools" />
    </div>
  );
}
