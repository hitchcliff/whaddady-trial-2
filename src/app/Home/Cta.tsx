import { Link } from 'react-router-dom';
import { RoutePattern } from '../../routes/RoutePattern';

export default function Cta() {
  return (
    <Link className="text-center" to={RoutePattern.SumbmitYourMusic}>
      <span className="block uppercase text-white text-xs font-drukwide-bold">submit your</span>
      <span
        className="block uppercase text-black font-drukwide-bold "
        style={{ WebkitTextStroke: '1px white' }}
      >
        music
      </span>
    </Link>
  );
}
