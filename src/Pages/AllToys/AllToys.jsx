import React, { useEffect, useState } from "react";
import AlltoysSingleItem from "./AlltoysSingleItem";

const AllToys = () => {
  const[type,setType]=useState('ascending')
  const handleSort=(event)=>{
    setType(parseInt(event.target.value))
  }
  console.log(typeof type,type)
  useEffect(()=>{
    document.title="All toys | Disney dolls"
},[])
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://project-theta-cyan.vercel.app/allToys/${type}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [type]);
  const handleSearch = (event) => {
    event.preventDefault();
    const name = event.target.form.toyName.value;
    fetch(`https://project-theta-cyan.vercel.app/searchText/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  return (
    <div>
      <form className="gap-2 flex items-center justify-center my-5 ">
          <input
            type="text"
            placeholder="Search toy"
            className="input input-bordered "
            name="toyName"
          />
        <input
          type="submit"
          className="btn btn-danger"
          onClick={handleSearch}
          onKeyPress={handleSearch}
          value="Search"
        />
      </form>
      <div className="overflow-x-auto mb-5 card border-[2px] border-red-300 p-5 my-5 shadow">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>
                <span>Price</span> sort by
                <br />
                <select onChange={handleSort}>
                  <option selected value="1">Ascending</option>
                  <option value="-1">Descending</option>
                </select>
              </th>
              <th>Sub Category</th>
              <th>Rating</th>
              <th>Details</th>
            </tr>
          </thead>
          {data &&
            data.map((item, index) => (
              <AlltoysSingleItem
                index={index}
                key={item._id}
                toysDetails={item}
              ></AlltoysSingleItem>
            ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
