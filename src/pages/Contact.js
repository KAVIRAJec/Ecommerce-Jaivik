import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import jaiviklogo from '../../src/images/jaiviklogo..png';
import map from '../../src/images/map.png'

const Contact = () => {
  return (
    <div className="App">
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

        <div className='main-align'>
        <img src={map} className='map' />

        <div className='contact'>
      <div className='title'>Contact us</div>
      <div className='name-align'>
        <div className='name'>
          <label>
            First Name:
            <input
              type="text" className='input-name'
            />
          </label>
        </div>
        <div className='name1'>
          <label>
            Last Name:
            <input
              type="text" className='input-name'
            />
          </label>
        </div>
      </div>
      <div className='name-email'>
        <label>
          Email:
          <input
            type="email" className='name-email1'
          />
        </label>
      </div>
      <div className='name-phone'>
        <label>
          Phone number:
          <input
            type="tel" className='name-phone1'
          />
        </label>
      </div>
      <div className='name-message'>
        <label>
          Message:
          <textarea
            type="text" className='name-message1'
          />
        </label>
      </div>
      <button>Send message</button>
    </div>
  </div>
</div>
  );
};

export default Contact;
