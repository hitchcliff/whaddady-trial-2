import { Link } from 'react-router-dom';
import { RoutePattern } from '../../routes/RoutePattern';

export default function Navigation() {
  return (
    <div className="overflow-x-scroll overflow-y-hidden w-full">
      <ul className="flex flex-row uppercase whitespace-nowrap text-white gap-32 text-9xl">
        <li>
          <Link className="link" to={RoutePattern.Home}>
            home
          </Link>
        </li>
        <li>
          <Link className="link" to={RoutePattern.Rules}>
            rules
          </Link>
        </li>
        <li>
          <Link className="link" to={RoutePattern.FutureTools}>
            future tools
          </Link>
        </li>
        <li>
          <Link className="link" to={RoutePattern.Testimonials}>
            testimonials
          </Link>
        </li>
        <li>
          <Link className="link" to={RoutePattern.HowItWorks}>
            how it works
          </Link>
        </li>
        <li>
          <Link className="link" to={RoutePattern.SumbmitYourMusic}>
            submit you music
          </Link>
        </li>
      </ul>
    </div>
  );
}
