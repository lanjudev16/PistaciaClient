import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UpdateMyToys = () => {
  const params = useParams();
  const id = params.id;
  const { user, loading } = useContext(AuthContext);
  const [updateToys, setUpdateTOys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/updateData/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateTOys(data));
  }, [user]);
  //update toy api

  let SubCategory;
  const handleSelect=(event)=>{
    SubCategory= event.target.value
  }
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const Price = form.Price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const UpdateToyInfo = {
      Price,
      quantity,
      description,
    };
    console.log(UpdateToyInfo);

    fetch(`http://localhost:5000/updateData/${id}`, {
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(UpdateToyInfo)
    }).then(res=>res.json()).then(data=>{
        console.log(data)
    })
  };

  if (loading) {
    return <div></div>;
  } else {
    return (
      <div className="card border-[2px] border-red-300 p-5 my-5 shadow">
        <form onSubmit={handleUpdateToy}>
          <div className="grid grid-cols-2 gap-5 flex-shi">
               
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
                  defaultValue={updateToys[0]?.Price}
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
                  defaultValue={updateToys[0]?.quantity}
                ></input>
              </label>
            </div>
          </div>

          <textarea
            name="description"
            defaultValue={updateToys[0]?.description}
            id=""
            cols="30"
            rows="10"
            className="textarea textarea-primary h-24 w-full my-5"
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
  }
};

export default UpdateMyToys;
