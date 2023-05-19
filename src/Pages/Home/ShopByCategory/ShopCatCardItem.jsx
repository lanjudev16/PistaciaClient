import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";

const ShopCatCardItem = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { PictureURL, sellerName, Price, Rating,_id } = item;
  const handleViewDetails = () => {
    if (user) {
    } else {
      alert("Please login ");
      return <Navigate to="/login" replace></Navigate>
    }
  };
  return (
    <div className="card card-compact w-full bg-base-100 shadow-2xl my-5">
      <figure>
        <img className="" src={PictureURL} alt="picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{sellerName}</h2>
        <div className="flex items-center justify-between">
          <h4>{Rating}</h4>
          <h4>{Price}</h4>
        </div>
      </div>
      <div className="text-center my-5">
      <Link to={`/toy/${_id}`}>
        <span
          className=" btn btn-danger w-[95%]"
          onClick={handleViewDetails}
        >
          View Details
        </span>
      </Link>
      </div>
    </div>
  );
};

export default ShopCatCardItem;
