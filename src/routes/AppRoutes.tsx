import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import { RoutePattern } from './RoutePattern';
import { FutureTools, Home, HowItWorks, Rules, Testimonials, SumbmitYourMusic } from '../app/index';

import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(CSSPlugin);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={RoutePattern.Home} component={Home} />
        <Route exact path={RoutePattern.Rules} component={Rules} />
        <Route exact path={RoutePattern.FutureTools} component={FutureTools} />
        <Route exact path={RoutePattern.HowItWorks} component={HowItWorks} />
        <Route exact path={RoutePattern.Testimonials} component={Testimonials} />
        <Route exact path={RoutePattern.SumbmitYourMusic} component={SumbmitYourMusic} />
        <Route path="*">Page not found</Route>
      </Switch>
    </AnimatePresence>
  );
}
