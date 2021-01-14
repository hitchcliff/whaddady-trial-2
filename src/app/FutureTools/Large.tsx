import { Headings } from '../../components/Heading';
import { Version } from '../../components/Heading/Headings';
import Headset from '../../assets/images/headset.png';
import HorizontalScroll from 'react-scroll-horizontal';

export default function Item() {
  return (
    <HorizontalScroll pageLock={true} reverseScroll={true} config={{ stiffness: 30, damping: 10 }}>
      <div className="flex flex-row items-center mr-16" style={{ width: '80vw' }}>
        <div className="flex flex-col">
          <div className="py-10">
            <Headings text="in one app" after="a&nbsp;record" after2="company" v={Version.v2} />
            <p className="text-white mt-8 px-20">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, quod. Expedita ad
              aperiam recusandae ipsa, dolore eaque necessitatibus consequatur autem ducimus? Quo
              aut iste facilis!
            </p>
          </div>
        </div>
        <div className="m-auto">
          <img className="w-1/2 lg:w-full" src={Headset} alt="headset record" />
        </div>
      </div>
      <div className="py-20 m-auto w-auto">
        <Headings after="music" text="distribution" v={Version.v2} />
        <p className="text-white mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, quasi.?
        </p>
      </div>
    </HorizontalScroll>
  );
}
