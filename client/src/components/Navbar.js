import {
    Badge,
    Button,
    IconButton,
    InputBase,
    makeStyles,
} from '@material-ui/core';
import { Container } from '@material-ui/core';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    navbar: {
        alignItems: 'center',
    },
    searchBar: {
        color: '#fff',
        padding: `2px ${theme.spacing(1)}px`,
        transition: '0.3s',
        backgroundColor: '#f3f3f30d',
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1),
        },
    },
    navItem: {
        '& .MuiIconButton-root': {
            marginRight: theme.spacing(2),
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Container>
                    <Grid className={classes.navbar} container>
                        <Grid item sm>
                            <Button color="inherit">Smart</Button>
                        </Grid>
                        <Grid item sm>
                            <InputBase
                                placeholder="Search…"
                                className={classes.searchBar}
                                startAdornment={<SearchIcon />}
                            />
                        </Grid>
                        <Grid className={classes.navItem} item>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingCartRoundedIcon />
                                </Badge>
                            </IconButton>
                            <Button variant="contained" color="secondary">
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
