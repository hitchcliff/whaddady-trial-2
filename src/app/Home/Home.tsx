import Navigation from './Navigation';
import BGImage from '../../assets/images/background.jpg';
import Socials from './Socials';
import Logo from './Logo';
import Cta from './Cta';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <div className="absolute z-10" style={{ width: '145px', top: '101px', left: '79px' }}>
        <Socials />
      </div>
      <div
        className="absolute z-10 transform -translate-x-1/2"
        style={{ top: '150px', left: '50%' }}
      >
        <Logo />
      </div>
      <div
        className="absolute z-10 transform -skew-y-3"
        style={{ width: '180px', top: '108px', right: '70px' }}
      >
        <Cta />
      </div>
      <Navigation />
      <div
        className="absolute z-10 transform -translate-x-1/2"
        style={{ bottom: '212px', left: '49.6%' }}
      >
        <Logo spinning />
      </div>
      <div className="absolute top-0 left-0 z-0">
        <img className="object-cover w-full h-full" src={BGImage} alt="music studio" />
      </div>
    </div>
  );
}
