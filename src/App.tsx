import React, { Suspense, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './styles/main.css';
import './App.css';

import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Preloader } from './components';

gsap.registerPlugin(CSSPlugin, ScrollTrigger);

function App() {
  const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 5000);
  // }, []);

  // if (loader) return <Preloader />;

  return (
    <div className="w-full h-full font-icomoon-regular bg-black">
      <Suspense fallback={<Preloader />}>
        <Router>
          <Switch>
            <Route path="*" component={AppRoutes} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
