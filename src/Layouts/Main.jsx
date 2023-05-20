import React from 'react';
import Header from '../Pages/Share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';

const Main = () => {
    return (
        <div className='lg:w-[1140px] mx-auto '>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;