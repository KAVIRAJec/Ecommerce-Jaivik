import React from 'react';
import { Link } from 'react-router-dom';
import jaiviklogo from '../../src/images/jaiviklogo..png';

const Cart = () => {
  return (
    <div>
      <header className="header">
       <div className='product-name'>
          <img src={jaiviklogo} alt="jaiviklLogo" className='logo' />
          <h1>Jaivik Vaazhai</h1>
          </div>
          <nav>
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Account">Account</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Cart">Cart</Link></li>
            </ul>
            </nav>
            <div className='signin'>
            <ul className="nav-list">
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/CreateAccountPage">Sign up</Link></li>
            </ul>
            </div>
        </header>

    </div>
  );
};

export default Cart;