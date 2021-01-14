import { Link } from 'react-router-dom';
import HorizontalScroll from 'react-scroll-horizontal';
import Headings, { Version } from '../../components/Heading/Headings';
import Next from '../../components/Heading/Next';
import { RoutePattern } from '../../routes/RoutePattern';
import Headset from '../../assets/images/headset.png';
import ArrowToRight from '../../assets/images/arrow-to-left.png';
import PageNavigation from '../PageNavigation/PageNavigation';

export default function How() {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col">
        <HorizontalScroll
          pageLock={true}
          reverseScroll={true}
          config={{ stiffness: 30, damping: 10 }}
        >
          <div className="flex flex-row items-center mr-16" style={{ width: '70vw' }}>
            <div className="flex flex-col mr-10 pl-20">
              <div className="py-10">
                <Headings
                  text="stem direct"
                  text2="membership."
                  after="apply&nbsp;for&nbsp;a"
                  v={Version.v2}
                />
                <p className="text-white mt-8 px-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cupiditate.
                </p>
              </div>
            </div>
            <div>
              <img className="w-full" src={Headset} alt="headset record" />
            </div>
          </div>
          <div className="py-20 m-auto" style={{ width: '40vw' }}>
            <Headings
              after="connect"
              after2="with&nbsp;\"
              text="a dedicated"
              text2="stem rep."
              v={Version.v2}
            />
            <p className="text-white mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptates autem
              sint eos quaerat repudiandae fuga ut vitae animi possimus.
            </p>
          </div>
        </HorizontalScroll>
      </div>
      <PageNavigation to={RoutePattern.Testimonials} text="testimonials" />
    </div>
  );
}
