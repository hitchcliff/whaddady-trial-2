import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './styles/main.css';

function App() {
  return (
    <div className="w-full h-full">
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
