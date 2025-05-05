import React, { useEffect } from 'react'

export const ConstactUs = () => {

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
    <div className="loader_bg">
      <div className="loader">
        <img src="/assets/images/loading.gif" alt="#" />
      </div>
    </div>
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
    <footer >
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
