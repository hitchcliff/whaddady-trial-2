import { Link } from 'react-router-dom';
import Next from '../../components/Heading/Next';
import ArrowToRight from '../../assets/images/arrow-to-left.png';
import { RoutePattern } from '../../routes/RoutePattern';

interface PageNavigationProps {
  to: RoutePattern;
  text: string;
}

export default function PageNavigation({ to, text }: PageNavigationProps) {
  return (
    <div className="z-10 mt-10 w-full">
      <div className="flex flex-row justify-between z-10 mr-auto px-10">
        <Link
          className="text-sm text-white font-drukwide-bold hover:text-primary"
          to={RoutePattern.Home}
        >
          x
        </Link>
        <div className="pr-10">
          <img className="w-56" src={ArrowToRight} alt="arrow to right" />
        </div>
      </div>
      <div className="ml-auto mr-12 mt-12">
        <Next text={text} after="next" to={to} />
      </div>
    </div>
  );
}
