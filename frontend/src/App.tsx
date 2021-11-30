import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { themeLight, themeDark } from './themes';

import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';

/**
 * Returns a functional component of the Entry point of our application
 *
 * @returns {JSX.Element} The functional component.
 */
export default function App() {
    const [mode, setMode] = useState(
        localStorage.getItem('gptTheme') === 'true'
    );

    const handleModeChange = () => {
        setMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('gptTheme', newMode.toString());
            return newMode;
        });
    };

    return (
        <ThemeProvider theme={mode ? themeDark : themeLight}>
            <CssBaseline />
            <NavBar mode={mode} onModeChange={handleModeChange} />
            <Body />
            <Footer />
        </ThemeProvider>
    );
}
