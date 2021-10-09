import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Overview from './pages/Overview';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/overview'><Overview /></Route>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
