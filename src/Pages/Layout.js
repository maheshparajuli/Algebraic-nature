import React from 'react';
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav className='navg' >
        <ul className='Header'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;