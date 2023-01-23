import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h3>Supro</h3>
      <div className="navlinks">
        <a href="#">Categories</a>
        <a href="#">Whats New</a>
        <a href="#">Deals</a>
        <a href="#">Delivery</a>
      </div>
      <div className='navbtns'>
        <input type="text" placeholder='search products' />
        <button>user</button>
        <button>cart</button>
      </div>
    </div>
  )
}

export default Navbar;