import React from 'react';
import { Link } from 'react-router-dom';

const AlltoysSingleItem = ({toysDetails,index}) => {
    const {toyName,sellerName,SubCategory,Price,quantity,_id}=toysDetails
    return (
        <tbody>
          <tr>
            <th>{index=index+1}</th>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{Price}</td>
            <td>{SubCategory}</td>
            <td>{quantity}</td>
            <td><Link to={`/toy/${_id}`}><td>View Details</td></Link></td>
          </tr>
        </tbody>
    );
};

export default AlltoysSingleItem;