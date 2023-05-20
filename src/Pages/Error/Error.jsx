import React, { useEffect } from 'react';
import error from '../../../public/404.jpg'
import { Link } from 'react-router-dom';
const Error = () => {
    useEffect(()=>{
        document.title="Error | Disney dolls"
    },[])
    return (
        <div className='flex justify-center items-center h-[100vh]'
        
        style={{
            backgroundImage:`url(${error})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
        }}>
            <Link className='text-red-500 text-5xl font-extrabold' to="/">Home</Link>
        </div>
    );
};

export default Error;