import { makeStyles } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { MobileItems } from '../../data/products_data';
import CarouselItem from './CarouselItem';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(3),
    },
    carousel: {
        '& .MuiTypography-root': {
            marginBottom: theme.spacing(1),
        },
        '& .Carousel-indicators-7': {
            marginTop: '-39px',
            paddingBottom: theme.spacing(1),
        },
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Carousel className={classes.carousel} animation="slide">
                {MobileItems.map((item) => (
                    <CarouselItem {...item} />
                ))}
            </Carousel>
        </div>
    );
};

export default Header;
