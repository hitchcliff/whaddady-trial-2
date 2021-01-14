import { RoutePattern } from '../../routes/RoutePattern';
import PageNavigation from '../PageNavigation/PageNavigation';
import Large from './Large';
import Small from './Small';

export default function How() {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col">
        <div className="hidden lg:block">
          <Large />
        </div>
        <div className="block lg:hidden">
          <Small />
        </div>
      </div>
      <PageNavigation to={RoutePattern.Testimonials} text="testimonials" />
    </div>
  );
}
