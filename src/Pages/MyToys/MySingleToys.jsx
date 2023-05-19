import React from 'react';
import { Link } from 'react-router-dom';

const MySingleToys = ({toyInfo,index,handleDelete}) => {
    const {toyName,sellerName,SubCategory,Price,quantity,_id}=toyInfo
    return (
        <tbody>
          <tr>
            <th>{index=index+1}</th>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{Price}</td>
            <td>{SubCategory}</td>
            <td>{quantity}</td>
            <td><Link to={`/update/${_id}`}>Update</Link></td>
            <td><button onClick={()=>handleDelete(_id)}>Delete</button></td>
          </tr>
        </tbody>
    );
};

export default MySingleToys;