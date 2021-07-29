import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NavMenu from '../components/NavMenu';

const Products = () => {
    const [products, setProducts] = useState([]);

    const productApi = async () => {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
    };

    useEffect(() => {
        productApi();
    }, []);

    return (
        <div>
            <Navbar />
            <NavMenu />
            <Container>
                <Grid container>
                    <Grid item sm={2}>
                        sidebar
                    </Grid>
                    <Grid item sm>
                        <Grid container>
                            {products.map((product) => (
                                <Grid item md={4} key={product._id}>
                                    {product.name}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Products;
