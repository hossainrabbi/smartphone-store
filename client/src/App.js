import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

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
            <Router>
                <CssBaseline />
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
            </Router>
        </ThemeProvider>
    );
};

export default App;
