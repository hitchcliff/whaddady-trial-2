import { Headings } from '../../components/Heading';
import Headset from '../../assets/images/headset.png';
import { Version } from '../../components/Heading/Headings';

export default function Small() {
  return (
    <div className="p-10">
      <div className="flex flex-col-reverse items-center">
        <div className="flex flex-col">
          <div className="py-10">
            <Headings
              text="stem direct"
              text2="membership."
              after="apply&nbsp;for&nbsp;a"
              v={Version.v2}
            />
            <p className="text-white mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cupiditate.
            </p>
          </div>
        </div>
        <div className="m-auto">
          <img className="w-full" src={Headset} alt="headset record" />
        </div>
      </div>
      <div className="py-10 m-auto w-auto">
        <Headings
          after="connect"
          after2="with&nbsp;\"
          text="a dedicated"
          text2="stem rep."
          v={Version.v2}
        />
        <p className="text-white mt-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptates autem sint
          eos quaerat repudiandae fuga ut vitae animi possimus.
        </p>
      </div>
    </div>
  );
}
