import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (  
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Flower <span>Shop</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-Link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-Link" to="/Gallery">Gallery</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-Link" to="/Contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-Link" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-Link" to="/Login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-Link" to="/Signup">Signup</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </> 
  )
}

export default Navbar