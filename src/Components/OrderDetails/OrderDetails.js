import React from 'react';

const OrderDetails = (props) => {
    const product = props.product;
    console.log(props.product);
    const { UserName, Price, } = product;
    return (
        <tbody>
            <tr className="line-draw">
              <td>{UserName}</td>
              <td> 1 </td>
              <td>${Price}</td>
            </tr>
          </tbody>
    );
};

export default OrderDetails;