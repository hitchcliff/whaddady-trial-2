import { RoutePattern } from '../../routes/RoutePattern';
import PageNavigation from '../PageNavigation/PageNavigation';
import Large from './Large';
import Small from './Small';
import BGImage from '../../assets/images/bg-piano-mini.jpg';
import { Draggable } from '../../components';
import { useEffect } from 'react';

export default function How() {
  useEffect(() => {
    const ele: HTMLElement | any = document.querySelector('.scroll-horizontal');
    Draggable(ele);
  }, []);
  return (
    <div className="bg-black w-full min-h-screen flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img className="object-cover w-full h-full" src={BGImage} alt="background piano studio" />
      </div>
      <div className="w-full flex flex-col">
        <div className="hidden lg:block">
          <Large />
        </div>
        <div className="block lg:hidden">
          <Small />
        </div>
      </div>
      <PageNavigation to={RoutePattern.Testimonials} text="testimonials" />
    </div>
  );
}
