import React from 'react';
import './style.css'
const ExtraSection = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 mt-14 gap-5 mx-5 lg:mx-0'>
            <div className='featured-item '>
                <div className='flex justify-center mb-[17px]'>
                    <img src="https://htmldemo.net/kidol/kidol/assets/img/icons/f1.png" alt="" />
                </div>
                <div className="featured-info">
                    <h4 className="title  text-5xl font-extrabold">Free Shipping</h4>
                    <p className='text-xl font-medium'>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
                </div>
            </div>
            <div className='featured-item '>
                <div className='flex justify-center mb-[17px]'>
                    <img src="https://htmldemo.net/kidol/kidol/assets/img/icons/f2.png" alt="" />
                </div>
                <div className="featured-info">
                    <h4 className="title text-5xl font-extrabold">Support 24/7</h4>
                    <p>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
                </div>
            </div>
            <div className='featured-item '>
                <div className='flex justify-center mb-[17px]'>
                    <img src="https://htmldemo.net/kidol/kidol/assets/img/icons/f3.png" alt="" />
                </div>
                <div className="featured-info">
                    <h4 className="title text-5xl font-extrabold">Money Return</h4>
                    <p>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;






