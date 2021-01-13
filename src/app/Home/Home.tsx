import Navigation from './Navigation';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      Hello from home!
      <div className="m-auto bg-black">
        <Navigation />
      </div>
    </div>
  );
}
