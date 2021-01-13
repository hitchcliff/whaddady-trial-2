import { Link } from 'react-router-dom';
import { RoutePattern } from '../../routes/RoutePattern';

export default function Navigation() {
  return (
    <div>
      <ul className="flex flex-row">
        <li>
          <Link to={RoutePattern.Home}>home</Link>
        </li>
        <li>
          <Link to={RoutePattern.Rules}>rules</Link>
        </li>
        <li>
          <Link to={RoutePattern.FutureTools}>future tools</Link>
        </li>
        <li>
          <Link to={RoutePattern.Testimonials}>testimonials</Link>
        </li>
        <li>
          <Link to={RoutePattern.HowItWorks}>how it works</Link>
        </li>
        <li>
          <Link to={RoutePattern.SumbmitYourMusic}>submit you music</Link>
        </li>
      </ul>
    </div>
  );
}
