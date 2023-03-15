// import React from 'react';
import { Link } from "react-router-dom";
import React, {useState} from 'react';
// import '/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to={`/`} className="logo"> Supro</Link>
        </div>
        <div className={`navbar-menu ${isOpen ? "open" : "close"}`}>
          <div className="nav-links">
            <Link to={`/test-page1`} className={'nav-item'}> Categories</Link>
            <Link to={`/test-page1`} className={'nav-item'}>Whats New</Link>
            <Link to={`/test-page2`} className={'nav-item'}>Deals</Link>
            <Link to={`/test-page3`} className={'nav-item'}>Delivery</Link>
          </div>
          <div className="navbtns">
            <input type="text" placeholder='search products' />
            <button>user</button>
            <button>cart</button>
          </div>
        </div>
        <button className="navbar-toggle" onClick={navbarToggle}>
            <span className="navbar-toggle--icon">Open</span>
          </button>
      </div>
    </nav>
  )
}

export default Navbar;