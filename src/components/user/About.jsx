import React, { useEffect } from 'react'

export const About = () => {

  useEffect(() => {
      // Wait for DOM to fully render
      const loader = document.querySelector('.loader_bg');
      if (loader) {
        // Hide loader after 1 second (or immediately if preferred)
        setTimeout(() => {
          loader.style.display = 'none';
        }, 1000); // adjust delay if needed
      }
    }, []);
  
  return (
    
    
    <div>
    {/* basic */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    {/* mobile metas */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
    {/* site metas */}
    <title>cla</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    {/* bootstrap css */}
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
    {/* style css */}
    <link rel="stylesheet" href="/assets/css/style.css" />
    {/* Responsive*/}
    <link rel="stylesheet" href="/assets/css/responsive.css" />
    {/* fevicon */}
    <link rel="icon" href="/assets/images/fevicon.png" type="image/gif" />
    {/* Scrollbar Custom CSS */}
    <link rel="stylesheet" href="/assets/css/jquery.mCustomScrollbar.min.css" />
    {/* Tweaks for older IEs*/}
    <link
      rel="stylesheet"
      href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
      media="screen"
    />
    {/*[if lt IE 9]>
  
  <![endif]*/}
    {/* body */}
    {/* loader  */}
    {/* <div className="loader_bg">
      <div className="loader">
        <img src="images/loading.gif" alt="#" />
      </div>
    </div> */}
    {/* end loader */}
    {/* header */}
    {/* <header> */}
      {/* header inner */}
      
      {/* <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <a href="index.html">
                      <img src="/assets/images/logo.png" alt="#" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                      <a className="nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="computer.html">
                        Computer
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="laptop.html">
                        Laptop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="product.html">
                        Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item d_none">
                      <a className="nav-link" href="#">
                        <i className="fa fa-search" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="nav-item d_none">
                      <a className="nav-link" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
    </header> */}
    {/* end header inner */}
    {/* end header */}
    {/* about section */}
    <div className="about">
      <div className="container">
        <div className="row d_flex">
          <div className="col-md-5">
            <div className="titlepage">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat.
              </p>
              <a className="read_more" href="#">
                Read More
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="about_img">
              <figure>
                <img src="/assets/images/about.jpg" alt="#" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* end about section */}
    {/*  footer */}
    <footer>
      <div className="footer" style={{ paddingTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <img className="logo1" src="/assets/images/logo1.png" alt="#" />
              <ul className="social_icon">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <h3>About Us</h3>
              <ul className="about_us">
                <li>
                  dolor sit amet, consectetur
                  <br /> magna aliqua. Ut enim ad <br />
                  minim veniam, <br /> quisdotempor incididunt r
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <h3>Contact Us</h3>
              <ul className="conta">
                <li>
                  dolor sit amet,
                  <br /> consectetur <br />
                  magna aliqua.
                  <br /> quisdotempor <br />
                  incididunt ut e{" "}
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <form className="bottom_form">
                <h3>Newsletter</h3>
                <input
                  className="enter"
                  placeholder="Enter your email"
                  type="text"
                  name="Enter your email"
                />
                <button className="sub_btn">subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  © 2019 All Rights Reserved. Design by
                  <a href="https://html.design/"> Free Html Templates</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* end footer */}
    {/* Javascript files*/}
    {/* sidebar */}
    </div>
  )
}
