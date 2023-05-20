import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const SingleToyDetails = () => {
  const [Toys, setToys] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/allToyData")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const toyInfo = Toys.find((item) => item._id == params.id);
  return (
    <div className='flex w-full justify-center bg-base-300 p-8 lg:p-16 mb-5' style={{
      backgroundImage: `url("https://i.ibb.co/1mskBW4/home3bg.png")`,
    }}>
            <div className='lg:flex gap-4 w-full rounded bg-white py-16 '>
                <img className='lg:w-full lg:max-h-[500px] px-6 py-3 rounded' src={toyInfo?.PictureURL} alt="" />
                <div className='my-auto space-y-1 px-6'>
                    <h3>{toyInfo?.toyName}</h3>
                    <p>Price: <span className='text-orange-400'>${toyInfo?.Price}</span></p>
                    <p>Quantity: {toyInfo?.quantity}</p>
                    <p>Rating: {toyInfo?.Rating}</p>
                    <p>
                        <span className='font-bold'>Description:</span> <br />
                        <span>{toyInfo?.description}</span>
                    </p>
                    <p>Seller: {toyInfo?.sellerName} </p>
                    <p>Email: {toyInfo?.sellerEmail}</p>
                    <div className='flex gap-2 lg:pt-5 pt-3'>
                        <Link to='/allToys' className='mr-5'>
                            <button className="btn btn-accent w-32">Go Back</button>
                        </Link>
                        <Link to='/'>
                            <button className="btn btn-accent w-32">Go to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default SingleToyDetails;
