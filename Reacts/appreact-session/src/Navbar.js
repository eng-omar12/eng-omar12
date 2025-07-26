// import React from 'react';
import "./App.css"
const Navbar = () => {
  return (
    <header className="openHeader">
      <div className="logo">
        <img src="/logo192.png" alt="logo" />
      </div>

      <nav className="navigation">
        <div className="botns">
          <button id="open" className="btn">&#9776;</button>
          <button id="close" className="hide btn">&times;</button>
        </div>

        <div className="umorder hide menu">
          <ul>
            <li><a href="@">Home</a></li>
            <li><a href="@">About</a></li>
            <li><a href="@">Contact</a></li>
            <li><a href="@">Services</a></li>
            <li className="none"><a href="Login/index.html">Login</a></li>
            <li className="none"><a href="@">Sign Up</a></li>
          </ul>
        </div>
      </nav>

      <div className="header-icons">
        <a href="Login/index.html"><i className="fa fa-user"></i></a>

        <div className="shoppingcard">
          <a href="@">
            <i id="cartList" className="fa fa-cart-arrow-down"></i>
            <span id="cartCount"></span>
          </a>
        </div>

        <a href="@"><i className="fa fa-heart"></i></a>
      </div>
    </header>
  );
};

export default Navbar;
