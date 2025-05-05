import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Badge, Typography } from '@mui/joy';
import { useSelector } from 'react-redux';

export const UserNavbar = () => {
  
  const isLoggedIn = Boolean(localStorage.getItem('id'));
  const state = useSelector((state) => state.cart);
  // console.log("state",state.cart)

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('id');
    navigate('/login');
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark"
      style={{
        backgroundColor: 'rgba(33, 37, 41, 0.4)',
        backdropFilter: 'blur(8px)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/user/homepage">
          Innovative-Producs
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="/user/homepage">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user/contactus">
                ContactUs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user/aboutus">
                About Us
              </a>
            </li>
            
          </ul>

          <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
          <li className="nav-item">
              <a className="nav-link" href="/user/userprofile">
              Profile
              </a>
            </li>
            <a className="nav-link" href="/user/cartview">
            <Badge style={{right:"5px"}} badgeContent={state.cart?.length} >
              <Typography sx={{ fontSize: 'x1' }} >🛒 </Typography>
            </Badge>
            </a>
            {!isLoggedIn ? (
              <>
                <a className="text-white text-decoration-none" href="/login">
                  Login
                </a>
                <span className="text-white">|</span>
                <a className="text-white text-decoration-none" href="/signup">
                  Signup
                </a>
              </>
            ) : (
              <button className="btn btn-danger btn-sm" onClick={onLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
