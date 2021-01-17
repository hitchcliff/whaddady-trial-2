import Logo from '../../assets/images/Logo.gif';
import BGImage from '../../assets/images/background-mini.jpg';

export default function TestPage() {
  return (
    <div>
      <div className="z-10 relative flex flex-col justify-between align-center min-h-screen w-full">
        <div className="text-2xl text-white">Test Title</div>
        <h1 className="text-2xl text-red-500">Test Title</h1>
        <div className="text-2xl text-white">Test Title</div>
        <div className="text-7xl text-red-500">Nav</div>
        <div className="text-2xl text-white">Test Title</div>
        <img className="w-6 " src={Logo} alt="logo" />
        <div className="text-2xl text-white">Test Title</div>
        <h1 className="text-2xl text-white">scroll</h1>
      </div>
      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <img className="object-cover w-full h-full" src={BGImage} alt="music studio" />
      </div>
    </div>
  );
}
