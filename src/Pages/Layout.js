import React from 'react';
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav className='nav'>
        <ul className='Header'>
          <li className='l1'>
            <Link to="/">Home</Link>
          </li>
          <li className='l2'>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className='l3'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;