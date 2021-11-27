import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { themeLight } from './themes';

import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <NavBar />
      <Body />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
