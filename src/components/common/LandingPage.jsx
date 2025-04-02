import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/landingPage.css"
import "../../assets/landing/css/style.css";
import "../../assets/landing/css/responsive.css";
import about2image from "../../assets/landing/images/about-img2.png";
import sliderImage from "../../assets/landing/images/slider-img.png";
import { Link } from "react-router-dom";
// import "../../assets/landing/js/custom"

const LandingPage = () => {
  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>
              Innovative-Product
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="s-1"> </span>
              <span className="s-2"> </span>
              <span className="s-3"> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
              <Link className="nav-link" to="">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">
                {" "}
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">
                {" "}
                Services{" "}
              </Link>
            </li>
                  <li className="nav-item">
              <Link className="nav-link" to="#contactLink">
                Contact Us
              </Link>
            </li>
                </ul>
              </div>
              <div className="quote_btn-container " style={{marginBottom:"7px"}}>
                <div className="btn-box">
                  <Link to="/login" className="btn-1">
                    Login
                  </Link>
                  <Link to="/signup" className="btn-2">
                    Signup
                  </Link>
                </div>
                <form className="form-inline">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className=" slider_section ">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active carousel-item-left">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>Innovative-Product</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={sliderImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-item-next carousel-item-left">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>The best marketing</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={sliderImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item"> 
              <div className="container">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>The best marketing</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={sliderImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-container">
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only"></span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="sr-only"></span>
            </a>
          </div>
        </div>
      </section>
      <section className="about_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={about2image} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="footer_section bg-dark text-white py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 style={{ color: "gray" }}><b>About B2B Wholesale Market Portal</b></h5>
                            <p style={{ textAlign: "justify" }}>
                                We connect buyers and sellers in the wholesale market, providing a seamless platform for efficient transactions and business growth.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h5 style={{ color: "gray" }}><b>Quick Links</b></h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-white">Home</a></li>
                                <li><a href="/about" className="text-white">About Us</a></li>
                                <li><a href="/services" className="text-white">Services</a></li>
                                <li><a href="/contact" className="text-white">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            {/* <h5><b>Contact Information : </b></h5> <br></br> */}
                            <h5 style={{ color: "gray" }}><b>Contact Information : </b></h5> <br />
                            Email : &nbsp;<a href="mailto:doshisaumya7704@gmail.com" className="text-primary" style={{ position: "absolute" }}>doshisaumya7704@gmail.com</a><br />
                            <p style={{ position: "absolute", right: "280px" }} >Phone: +91 9409270312</p><br></br>
                            <br></br> <p style={{ position: "absolute", right: "100px" }}>Address: 123 Wholesale St, Business City, India</p>
                        </div>
                    </div>  
                    <div className="text-center mt-3">
                        <p>&copy;<b>2025 B2B Wholesale Market Portal. All Rights Reserved.</b> </p>
                    </div>
                </div>
            </footer>
    </div>

  );
};

export default LandingPage;