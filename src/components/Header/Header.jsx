import React,{ useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import './header.css';

// import Search from '../Search';

const Header = () => {


  return (

    <header className="header p-3 mb-3">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">LOGO</NavLink>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to="/" className="nav-link px-2 link-dark">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link px-2 link-dark">About</NavLink></li>
          <li><NavLink to="/contacts" className="nav-link px-2 link-dark">Contacts</NavLink></li>
          {/* <li><a href="/" className="nav-link px-2 link-dark">Products</a></li> */}
        </ul>

        <div className="col-12 col-lg-auto mb-3 mb-lg-0 d-flex">
          {/* <Search/> */}
          {/* <input type="search" className="form-control" placeholder="Search..." aria-label="Search" /> */}
        </div>


      </div>
    </div>
  </header>

    // <div classNameName="container">
    //   <header classNameName="header border-bottom">

    //     <div classNameName="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-ar">
    //       <a href="/" classNameName="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
    //         <i classNameName="bi bi-house"></i>
    //       </a>

    //       <ul classNameName="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
    //         <li><a href="/" classNameName="nav-link px-2 link-secondary">Overview</a></li>
    //         <li><a href="/" classNameName="nav-link px-2 link-dark">Inventory</a></li>
    //         <li><a href="/" classNameName="nav-link px-2 link-dark">Customers</a></li>
    //         <li><a href="/" classNameName="nav-link px-2 link-dark">Products</a></li>
    //       </ul>

    //       <form classNameName="col-12 col-lg-auto mb-3">
    //         <input type="search" classNameName="form-control" placeholder="Search..." aria-label="Search" />
    //       </form>


    //     </div>


    //   </header>
    // </div>

  )
}

export default Header;
