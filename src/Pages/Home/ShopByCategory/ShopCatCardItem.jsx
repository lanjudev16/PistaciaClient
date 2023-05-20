import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";

const ShopCatCardItem = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { PictureURL, sellerName, Price, Rating, _id } = item;
  const handleViewDetails = () => {
    if (user) {
    } else {
      alert("Please login ");
      return <Navigate to="/login" replace></Navigate>;
    }
  };
  return (

    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-1/2 rounded-xl">
        <img
          src={PictureURL}
          alt="Movie"
          className="w-full lg:max-h-[350px] rounded-xl p-5"

        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Seller Name: {sellerName}</h2>
        <p>Price: {Price}</p>
        <p>Total Ratings: {Rating}</p>
        <Link to={`/toy/${_id}`}><button>View Details</button></Link>
      </div>
    </div>
  );
};

export default ShopCatCardItem;
