import { useEffect, useRef } from 'react';
import Logo from '../../assets/images/Logo.gif';
import BGImage from '../../assets/images/background.jpg';
import { Power3, TweenLite } from 'gsap';

export default function Preloader() {
  let bg = useRef<any>(null);
  let logo = useRef<any>(null);

  useEffect(() => {
    TweenLite.from(bg, 2.4, {
      opacity: 0.8,
      y: 100,
      scale: 1.5,
      ease: Power3.easeIn,
    });

    TweenLite.from(logo, 2.4, {
      scale: 0.3,
      y: -100,
      opacity: 0,
      ease: Power3.easeIn,
    });

    setTimeout(() => {
      TweenLite.to(bg, 0, {
        opacity: 0,
        scale: 1.5,
        ease: Power3.easeOut,
      });
      TweenLite.to(logo, 2, {
        opacity: 0,
        scale: 1.5,
        ease: Power3.easeOut,
      });
    }, 5000);
  }, [bg]);

  return (
    <div className="fixed w-full h-full z-30 flex bg-black">
      <img
        ref={(e: any) => (logo = e)}
        className="m-auto h-auto z-20"
        src={Logo}
        alt="3partan logo"
        style={{}}
      />
      <img
        ref={(e: any) => (bg = e)}
        className="absolute w-full h-full object-cover z-10 opacity-20"
        src={BGImage}
        alt="background image"
      />
    </div>
  );
}
