import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar';
import CustomerOrders from './components/customerOrders';
import OrderDetails from './components/orderDetails';
import Breadcrumb from './components/breadcrumb';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Breadcrumb></Breadcrumb>
        <div className="content">
          <Route path="/customer-orders" component={CustomerOrders}></Route>
          <Route path="/order-details" component={OrderDetails}></Route>
        </div>
      </div>
    </div >
  );
}

export default App;
