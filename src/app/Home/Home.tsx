import Navigation from './Navigation';
import BGImage from '../../assets/images/background.jpg';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <div className="m-auto w-10/12 z-10">
        <Navigation />
      </div>
      <div className="absolute top-0 left-0 z-0">
        <img src={BGImage} alt="music studio" />
      </div>
    </div>
  );
}
