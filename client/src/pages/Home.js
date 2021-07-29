import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar';
import Products from '../components/Products/Products';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Products />
        </div>
    );
};

export default Home;
