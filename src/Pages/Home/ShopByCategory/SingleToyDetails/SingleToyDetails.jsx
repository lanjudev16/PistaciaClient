import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const SingleToyDetails = () => {
  const [Toys, setToys] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch("../../../../../public/dataCat.json")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const toyInfo = Toys.find((item) => item.id == params.id);
//   const {picture,name,price,ratings,sellerName,email,description,quantity}=toyInfo
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={toyInfo?.picture}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyInfo?.name}</h2>
          <h4>Seller name: {toyInfo?.sellerName}</h4>
          <h4>Seller Email: {toyInfo?.email}</h4>
          <p>{toyInfo?.description}</p>
          <div>
            <h4>Price ${toyInfo?.price}</h4>
            <h4>{toyInfo?.ratings}</h4>
          </div>
          <h4>{toyInfo?.quantity}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
