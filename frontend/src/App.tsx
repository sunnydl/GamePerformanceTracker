import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

import Home from './pages/Home';
import Overview from './pages/Overview/Overview';


function App() {

  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/overview'>
          <Overview />
        </Route>
        <Redirect to='/' />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
