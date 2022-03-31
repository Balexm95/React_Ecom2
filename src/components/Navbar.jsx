import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './CartBtn'

const Navbar = () => {
  return (
   <>
   <nav className="navbar">
        <NavLink to="/" className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-intersect" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5zm6-8V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2V6a2 2 0 0 1 2-2h5z" />
        </svg> VINTEES</NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
        <ul className="menu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <CartBtn/>

        </ul>
      </nav>
   </>
  )
}

export default Navbar