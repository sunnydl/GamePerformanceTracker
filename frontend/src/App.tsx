import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Body />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
