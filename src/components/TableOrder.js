import React, { Component } from 'react';
import './TableForm.css'

class TableOrder extends Component {
  render() {
    const { orders } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th className='heading'>ID</th>
            <th className="buyer-input">Buyer Quantity</th>
            <th className="buyer-input">Buyer Price</th>
            <th className="seller-input" >Seller Price</th>
            <th className="seller-input" >Seller Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr className="buyer-input" key={order.id}>
              <td className="buyer-input">{order.id}</td>
              <td className="buyer-input">{order.buyer_qty}</td>
              <td className="buyer-input">{order.buyer_price}</td>
              <td className="seller-input" >{order.seller_price}</td>
              <td className="seller-input" >{order.seller_qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TableOrder;
