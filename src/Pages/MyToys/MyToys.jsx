import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MySingleToys from './MySingleToys';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyToys = () => {
  useEffect(()=>{
    document.title="My toys | Disney dolls"
},[])
    const[myToys,setToys]=useState([])
    const {user}=useContext(AuthContext)
    const url=`http://localhost:5000/myToys?email=${user.email}`
    useEffect(()=>{
      fetch(url).then(res=>res.json()).then(data=>{
        setToys(data)
      })
    },[user,url])
    const handleDelete=(id)=>{
      confirm("Are you want to delete")
        fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE"
        }).then(res=>res.json()).then(data=>{
            if(data.deletedCount){
              const toys=myToys.filter(item=>item._id!=id)
              setToys(toys)
            }
        })
    }

    return (
        <div className="overflow-x-auto mb-5 card border-[2px] border-red-300 p-5 my-5 shadow">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {myToys &&
            myToys.map((item, index) => (
              <MySingleToys key={item._id} index={index} toyInfo={item} handleDelete={handleDelete} >

              </MySingleToys>
            ))}
        </table>
      </div>
    );
};

export default MyToys;