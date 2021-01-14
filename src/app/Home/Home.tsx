import Navigation from './Navigation';
import BGImage from '../../assets/images/background.jpg';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <div className="absolute top-0 left-0 z-0">
        <img className="object-cover w-full h-full" src={BGImage} alt="music studio" />
      </div>
    </div>
  );
}
