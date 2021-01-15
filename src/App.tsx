import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './styles/main.css';
import './App.css';

import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSPlugin, ScrollTrigger);

function App() {
  return (
    <div className="w-full h-full font-icomoon-regular bg-black">
      <Suspense fallback={null}>
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
