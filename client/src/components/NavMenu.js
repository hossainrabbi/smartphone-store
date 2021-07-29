import { Button, Container, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navMenu: {
        textAlign: 'center',
        '& a:hover': {
            textDecoration: 'none',
        },
    },
}));

const NavMenu = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Container>
                        <Grid className={classes.navMenu} container>
                            <Grid item sm>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/products"
                                >
                                    Products
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavMenu;
