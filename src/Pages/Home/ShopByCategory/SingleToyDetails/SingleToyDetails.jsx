import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const SingleToyDetails = () => {
  const [Toys, setToys] = useState([]);
  const navigate=useNavigate()
  const params = useParams();
  useEffect(() => {
    fetch("https://server-vert-three.vercel.app/allToyData")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const toyInfo = Toys.find((item) => item._id == params.id);
  if(toyInfo){
    return (
      <div
        className="flex  justify-center bg-base-300 p-8 lg:p-16 my-5"
        style={{
          backgroundImage: `url("https://i.ibb.co/1mskBW4/home3bg.png")`,
        }}
      >
        
        <div className="card card-side w-full bg-base-100 shadow-xl">
          <figure className="lg:w-1/2 rounded-xl">
            <img
              src={toyInfo?.PictureURL}
              alt="Movie"
              className="w-full lg:max-h-[250px] lg:min-h-[250px] rounded-xl p-5"
            />
          </figure>
          <div className="card-body">
            <h3>Toy Name:{toyInfo?.toyName}</h3>
            <h2 className="card-title">Seller Name: {toyInfo?.sellerName}</h2>
  
            <p>Email: {toyInfo?.sellerEmail}</p>
            <p>Price: {toyInfo?.Price}</p>
            <p>Quantity: {toyInfo?.quantity}</p>
            <p>Rating: {toyInfo?.Rating}</p>
            <p>
              <span className="font-bold">Description:</span> 
              <span>{toyInfo?.description}</span>
            </p>
            <p>Total Ratings: {toyInfo?.Rating}</p>
          </div>
        </div>
      </div>
    );
  }else{
    navigate('*')
  }

};

export default SingleToyDetails;
