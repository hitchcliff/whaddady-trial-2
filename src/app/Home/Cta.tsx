import { Link } from 'react-router-dom';
import { RoutePattern } from '../../routes/RoutePattern';

interface CtaProps {
  onClick: (e: string) => void;
}

export default function Cta({ onClick }: CtaProps) {
  return (
    <Link
      className="text-center hover:text-primary"
      to={RoutePattern.SumbmitYourMusic}
      onClick={() => onClick('submit your music')}
    >
      <span className="block uppercase text-white text-xxs xl:text-xs font-drukwide-bold  hover:text-primary">
        submit your
      </span>
      <span
        className="block uppercase text-black text-xxs lg:text-xs font-drukwide-bold  hover:text-primary"
        style={{ WebkitTextStroke: '1px white' }}
      >
        music
      </span>
    </Link>
  );
}
