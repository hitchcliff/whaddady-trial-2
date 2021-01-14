import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import { RoutePattern } from './RoutePattern';
import { FutureTools, Home, Rules, Testimonials } from '../app/index';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={RoutePattern.Home} component={Home} />
        <Route exact path={RoutePattern.Rules} component={Rules} />
        <Route exact path={RoutePattern.FutureTools} component={FutureTools} />
        <Route exact path={RoutePattern.Testimonials} component={Testimonials} />
        <Route path="*">Page not found</Route>
      </Switch>
    </AnimatePresence>
  );
}
