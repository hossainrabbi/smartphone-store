import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Home from './pages/Home';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#141A26',
        },
        secondary: {
            main: '#2c387e',
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Home />
        </ThemeProvider>
    );
};

export default App;
