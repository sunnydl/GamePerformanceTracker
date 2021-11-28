import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { themeLight, themeDark } from './themes';

import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';

function App() {
  const [mode, setMode] = React.useState(false);
  return (
    <ThemeProvider theme={mode ? themeDark : themeLight}>
      <CssBaseline />
      <NavBar mode={mode} setMode={setMode} />
      <Body />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
