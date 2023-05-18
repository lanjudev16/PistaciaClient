import React from 'react';
import Header from '../../Share/Header/Header';
import Footer from '../../Share/Footer/Footer';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;