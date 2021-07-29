import { Button, makeStyles, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 450,
        background:
            'linear-gradient(90deg, rgba(225,233,246,1) 0%, rgba(151,168,197,1) 35%, rgba(74,86,112,1) 100%)',
    },
    carouselItem: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing(3)}px ${theme.spacing(5)}px`,
        '& .MuiGrid-item': {
            '& img': {
                height: '380px',
                objectFit: 'contain',
            },
        },
    },
}));

const CarouselItem = ({ name, description, image }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root} square>
            <Container>
                <Grid className={classes.carouselItem} container spacing={2}>
                    <Grid item sm>
                        <Typography variant="h4" component="h4">
                            {name}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {description}
                        </Typography>
                        <Button variant="contained" color="secondary">
                            See More
                        </Button>
                    </Grid>
                    <Grid item sm>
                        <img src={image} alt={name} />
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default CarouselItem;
