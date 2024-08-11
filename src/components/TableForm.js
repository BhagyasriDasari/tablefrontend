import React, { Component } from 'react';
import axios from 'axios';
import './TableForm.css'

class TableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyer_qty: '',
      buyer_price: '',
      seller_price: '',
      seller_qty: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { buyer_qty, buyer_price, seller_price, seller_qty } = this.state;

    try {
      await axios.post('https://tablebackend-1.onrender.com/order', {
        buyer_qty,
        buyer_price,
        seller_price,
        seller_qty,
      });
      this.props.fetchOrders();
      this.setState({
        buyer_qty: '',
        buyer_price: '',
        seller_price: '',
        seller_qty: '',
      });
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  render() {
    const { buyer_qty, buyer_price, seller_price, seller_qty } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label className="buyer-input">Buyer Quantity:</label>
          <input className="buyer-input" type="number" name="buyer_qty" value={buyer_qty} onChange={this.handleChange} required />
        </div>
        <div>
          <label className="buyer-input">Buyer Price:</label>
          <input className="buyer-input" type="number" step="0.01" name="buyer_price" value={buyer_price} onChange={this.handleChange} required />
        </div>
        <div>
          <label className="seller-input">Seller Price:</label>
          <input type="number" step="0.01" name="seller_price" value={seller_price} onChange={this.handleChange} required className="seller-input" />
        </div>
        <div>
          <label className="seller-input" >Seller Quantity:</label>
          <input className="seller-input" type="number" name="seller_qty" value={seller_qty} onChange={this.handleChange} required />
        </div>
        
        <button type="submit">Submit Order</button>
      </form>
    );
  }
}

export default TableForm;
