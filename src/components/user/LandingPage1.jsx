import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
// import "../../assets/css/bootstrap.min.css";
// import "../../assets/css/style.css";
// import "../../assets/css/responsive.css";
// import "../../assets/css/jquery.mCustomScrollbar.min.css";

export const LandingPage1 = () => {

  

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
  <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
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
  {/* [if lt IE 9]>

<![endif] */}
  {/* body */}
  {/* loader  */}
  <div className="loader_bg">
    <div className="loader">
      <img src="/assets/images/loading.gif" alt="#" />
    </div>
  </div>
  {/* end loader */}

  {/* banner */}
  
  <section className="banner_main">
    <div id="banner1" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#banner1" data-slide-to={0} className="active" />
        <li data-target="#banner1" data-slide-to={1} />
        <li data-target="#banner1" data-slide-to={2} />
        <li data-target="#banner1" data-slide-to={3} />
        <li data-target="#banner1" data-slide-to={4} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="carousel-caption">
              <div className="row">
                <div className="col-md-6">
                  <div className="text-bg">
                    <span>Computer And Laptop</span>
                    <h1>Accessories</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or{" "}
                    </p>
                    <a href="#">Buy Now </a> <a href="contact.html">Contact </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text_img">
                    <figure>
                      <img src="/assets/images/pct.png" alt="#" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="carousel-caption">
              <div className="row">
                <div className="col-md-6">
                  <div className="text-bg">
                    <span>Computer And Laptop</span>
                    <h1>Accessories</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or{" "}
                    </p>
                    <a href="#">Buy Now </a> <a href="contact.html">Contact </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text_img">
                    <figure>
                      <img src="/assets/images/pct.png" alt="#" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="carousel-caption">
              <div className="row">
                <div className="col-md-6">
                  <div className="text-bg">
                    <span>Computer And Laptop</span>
                    <h1>Accessories</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or{" "}
                    </p>
                    <a href="#">Buy Now </a> <a href="contact.html">Contact </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text_img">
                    <figure>
                      <img src="/assets/images/pct.png" alt="#" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="carousel-caption">
              <div className="row">
                <div className="col-md-6">
                  <div className="text-bg">
                    <span>Computer And Laptop</span>
                    <h1>Accessories</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or{" "}
                    </p>
                    <a href="#">Buy Now </a> <a href="contact.html">Contact </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text_img">
                    <figure>
                      <img src="/assets/images/pct.png" alt="#" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="carousel-caption">
              <div className="row">
                <div className="col-md-6">
                  <div className="text-bg">
                    <span>Computer And Laptop</span>
                    <h1>Accessories</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or{" "}
                    </p>
                    <a href="#">Buy Now </a> <a href="contact.html">Contact </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text_img">
                    <figure>
                      <img src="/assets/images/pct.png" alt="#" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#banner1"
        role="button"
        data-bs-slide="prev"
      >
        <i className="fa fa-chevron-left" aria-hidden="true" />
      </a>
      <a
        className="carousel-control-next"
        href="#banner1"
        role="button"
        data-bs-slide="next"
      >
        <i className="fa fa-chevron-right" aria-hidden="true" />
      </a>
    </div>
  </section>
  {/* end banner */}
  {/* three_box */}
  <div className="three_box">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="box_text">
            <i>
              <img src="/assets/images/thr.png" alt="#" />
            </i>
            <h3>Computer</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box_text">
            <i>
              <img src="/assets/images/thr1.png" alt="#" />
            </i>
            <h3>Laptop</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box_text">
            <i>
              <img src="/assets/images/thr2.png" alt="#" />
            </i>
            <h3>Tablet</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* three_box */}
{/* products */}
<div className="products">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage">
          <h2>Our Products</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="our_products">
          <div className="row">
            {[
              { name: 'Computers', image: 'product1.png' },
              { name: 'Laptop', image: 'product2.png' },
              { name: 'Tablet', image: 'product3.png' },
              { name: 'Speakers', image: 'product4.png' },
              { name: 'Internet', image: 'product5.png' },
              { name: 'Hardisk', image: 'product6.png' },
              { name: 'Rams', image: 'product7.png' },
              { name: 'Bettery', image: 'product8.png' },
              { name: 'Drive', image: 'product9.png' },
            ].map((product, index) => (
              <div key={index} className="col-md-4 margin_bottom1">
                <Link to={`/user/products?category=${encodeURIComponent(product.name)}`}>
                  <div className="product_box">
                    <figure>
                      <img src={`/assets/images/${product.image}`} alt={product.name} />
                    </figure>
                    <h3>{product.name}</h3>
                  </div>
                </Link>
              </div>
            ))}

            <div className="col-md-12">
              <Link className="read_more" to="/products">
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* end products */}
  {/* laptop  section */}
  <div className="laptop">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="titlepage">
            <p>Every Computer and laptop</p>
            <h2>Up to 40% off !</h2>
            <a className="read_more" href="#">
              Shop Now
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="laptop_box">
            <figure>
              <img src="/assets/images/pc.png" alt="#" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end laptop  section */}
  {/* customer */}
  <div className="customer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Customer Review</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div
            id="myCarousel"
            className="carousel slide customer_Carousel "
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to={1} />
              <li data-target="#myCarousel" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="carousel-caption ">
                    <div className="row">
                      <div className="col-md-9 offset-md-3">
                        <div className="test_box">
                          <i>
                            <img src="/assets/images/cos.png" alt="#" />
                          </i>
                          <h4>Sandy Miller</h4>
                          <p>
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="row">
                      <div className="col-md-9 offset-md-3">
                        <div className="test_box">
                          <i>
                            <img src="/assets/images/cos.png" alt="#" />
                          </i>
                          <h4>Sandy Miller</h4>
                          <p>
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="row">
                      <div className="col-md-9 offset-md-3">
                        <div className="test_box">
                          <i>
                            <img src="/assets/images/cos.png" alt="#" />
                          </i>
                          <h4>Sandy Miller</h4>
                          <p>
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end customer */}
  {/*  contact */}
  <div className="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Contact Now</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <form id="request" className="main_form">
            <div className="row">
              <div className="col-md-12 ">
                <input
                  className="contactus"
                  placeholder="Name"
                  type="type"
                  name="Name"
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Email"
                  type="type"
                  name="Email"
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Phone Number"
                  type="type"
                  name="Phone Number"
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="textarea"
                  placeholder="Message"
                  type="type"
                  message="Name"
                  defaultValue={"Message "}
                />
              </div>
              <div className="col-md-12">
                <button className="send_btn">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* end contact */}
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
