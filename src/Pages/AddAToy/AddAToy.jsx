import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddAToy = () => {
  useEffect(()=>{
    document.title="Add a Toy | Disney dolls"
},[])
  const { user } = useContext(AuthContext);
  const navigate=useNavigate()
  let SubCategory;
  const handleSelect=(event)=>{
    SubCategory= event.target.value
  }
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const PictureURL = form.PictureURL.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const Price = form.Price.value;
    const Rating = form.Rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toyInfo = {
      toyName,
      PictureURL,
      sellerName,
      sellerEmail,
      SubCategory,
      Price,
      Rating,
      quantity,
      description,
    };
    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.insertedId){
          alert("Insert successfully")
          navigate('/myToys')
        }
      });
  };

  return (
    <div className="card bg-[#FFFFFF] rounded-[20px] card border-[2px] border-red-300 p-5 my-5 shadow ">
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-2 gap-5 flex-shi">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base text-[#232323]">
                Toy Name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter your toy"
                className="input input-bordered w-full"
                name="toyName"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base text-[#232323]">
                Picture URL
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter Picture URL"
                className="input input-bordered w-full"
                name="PictureURL"
              />
            </label>
          </div>
          <div className="form-control shrink">
            <label className="label">
              <span className="label-text font-medium text-base text-[#232323]">
                Seller name
              </span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                name="sellerName"
                defaultValue={user.displayName}
                id=""
                cols="30"
                rows="10"
                placeholder="Seller name"
              ></input>
            </label>
          </div>
          <div className="form-control shrink">
            <label className="label">
              <span className="label-text font-medium text-base text-[#232323]">
                Seller email
              </span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                name="sellerEmail"
                defaultValue={user.email}
                placeholder="Seller Email"
              ></input>
            </label>
          </div>
          <div className="form-control shrink">

            <div className="">
              <label className="label">
                <span className="label-text font-medium text-base text-[#232323]">
                  Sub category
                </span>
              </label>
              <select onChange={handleSelect}>
                <option value="Frozen dolls">Frozen dolls</option>
                <option value="Disney princes">Disney princes</option>
                <option value="Animation characters">Animation characters</option>
              </select>
            </div>
          </div>
          <div className="form-control shrink">
            <label className="label">
              <span className="label-text font-medium text-base text-[#232323]">
                Price
              </span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                name="Price"
                placeholder="Price"
              ></input>
            </label>
          </div>
          <div className="form-control shrink">
            <label className="label">
              <span className="label-text font-medium text-base text-[#232323]">
                Rating
              </span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                name="Rating"
                placeholder="Rating"
              ></input>
            </label>
          </div>
          <div className="form-control shrink">
            <label className="label">
              <span className="label-text font-medium text-base text-[#232323]">
                quantity
              </span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                name="quantity"
                placeholder="quantity"
              ></input>
            </label>
          </div>
          <div className="form-control shrink">
            <label className="label">
              <span className="label-text font-medium text-base text-[#232323]">
                description
              </span>
            </label>
            <label className="input-group"></label>
          </div>
        </div>

        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          className="textarea textarea-primary h-24 w-full"
        ></textarea>
        <div className="text-center">
          <input
            type="submit"
            value="Submit"
            className="btn btn-danger px-3 w-[25%]  my-4"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
