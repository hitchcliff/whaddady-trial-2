import HorizontalScroll from 'react-scroll-horizontal';
import { Headings } from '../../components/Heading';
import Headset from '../../assets/images/headset.png';
import { Version } from '../../components/Heading/Headings';

export default function Small() {
  return (
    <div className="p-10">
      <div className="flex flex-col-reverse items-center">
        <div className="flex flex-col">
          <div className="py-10">
            <Headings text="in one app" after="a&nbsp;record" after2="company" v={Version.v2} />
            <p className="text-white mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, quod. Expedita ad
              aperiam recusandae ipsa, dolore eaque necessitatibus consequatur autem ducimus? Quo
              aut iste facilis!
            </p>
          </div>
        </div>
        <div className="m-auto">
          <img className="w-full" src={Headset} alt="headset record" />
        </div>
      </div>
      <div className="py-10 m-auto w-auto">
        <Headings after="music" text="distribution" v={Version.v2} />
        <p className="text-white mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a consequuntur beatae fuga.
          Eum ullam illum nulla aspernatur mollitia culpa.
        </p>
      </div>
    </div>
  );
}
