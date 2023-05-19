import React from 'react';

const AlltoysSingleItem = ({toysDetails,index}) => {
    const {toyName,sellerName,SubCategory,Price,quantity}=toysDetails
    return (
        <tbody>
          <tr>
            <th>{index=index+1}</th>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{Price}</td>
            <td>{SubCategory}</td>
            <td>{quantity}</td>
            <td>View Details</td>
          </tr>
        </tbody>
    );
};

export default AlltoysSingleItem;