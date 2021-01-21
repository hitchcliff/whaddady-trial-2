import LogoImage from '../../assets/images/logo-full.png';
import LogoImage2 from '../../assets/images/Logo.gif';

interface LogoProps {
  spinning?: boolean;
}
export default function Logo({ spinning }: LogoProps) {
  return (
    <div>
      {spinning ? (
        <img className="w-7 md:w-3 xl:w-6 object-cover" src={LogoImage2} alt="spinning 3parta" />
      ) : (
        <img className="w-full object-cover" src={LogoImage} alt="3parta logo" />
      )}
    </div>
  );
}
