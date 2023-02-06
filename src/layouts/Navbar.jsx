import React from 'react';
import { Link } from "react-router-dom";
// import '/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to={`/`} > Supro</Link>
      <div className="navlinks">
        <Link to={`/`} className={'navlink'}> Categories</Link>
        <Link to={`/test-page1`} className={'navlink'}>Whats New</Link>
        <Link to={`/test-page2`} className={'navlink'}>Deals</Link>
        <Link to={`/test-page3`} className={'navlink'}>Delivery</Link>
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