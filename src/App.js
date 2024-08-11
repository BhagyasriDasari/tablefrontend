import React, { Component } from 'react';
import axios from 'axios';
import TableForm from './components/TableForm';
import TableOrder from './components/TableOrder';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingOrders: [],
      completedOrders: []
    };
  }

  fetchOrders = async () => {
    try {
      const response = await axios.get('https://tablebackend-1.onrender.com/orders');
      this.setState({
        pendingOrders: response.data.pendingOrders,
        completedOrders: response.data.completedOrders
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  componentDidMount() {
    this.fetchOrders();
  }

  render() {
    const { pendingOrders, completedOrders } = this.state;

    return (
      <div className="App">
        <h1 className='heading'>Table Inputs</h1>
        <TableForm fetchOrders={this.fetchOrders} />
        <h2 className='heading'>Pending Orders</h2>
        <TableOrder orders={pendingOrders} />
        <h2 className='heading'>Completed Orders</h2>
        <TableOrder orders={completedOrders} />
      </div>
    );
  }
}

export default App;
