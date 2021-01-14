import { Headings } from '../../components/Heading';
import { Version } from '../../components/Heading/Headings';
import { RoutePattern } from '../../routes/RoutePattern';
import PageNavigation from '../PageNavigation/PageNavigation';

export default function SubmitMusic() {
  return (
    <div className="flex flex-col justify-center bg-black w-full min-h-screen">
      <div>
        <Headings text="submit your music" after="submit your music" v={Version.v2} />
      </div>
      <form className="flex flex-col mt-10">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col mr-5">
            <label className="text-white uppercase" htmlFor="first">
              first name
            </label>
            <input className="rounded-sm px-4 py-2 mt-2" type="text" name="first" />
          </div>
          <div className="flex flex-col">
            <label className="text-white uppercase" htmlFor="first">
              first name
            </label>
            <input className="rounded-sm px-4 py-2 mt-2" type="text" name="first" />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col mr-5">
            <label className="text-white uppercase" htmlFor="first">
              first name
            </label>
            <input className="rounded-sm px-4 py-2 mt-2" type="text" name="first" />
          </div>
          <div className="flex flex-col">
            <label className="text-white uppercase" htmlFor="first">
              first name
            </label>
            <input className="rounded-sm px-4 py-2 mt-2" type="text" name="first" />
          </div>
        </div>
        <div className="m-auto mt-5">
          <button className="font-drukwide-bold text-black bg-primary rounded-sm px-16 py-2 uppercase">
            submit
          </button>
        </div>
      </form>
      <div className="pr-36">
        <PageNavigation to={RoutePattern.Home} text="home" text2="go back" />
      </div>
    </div>
  );
}
