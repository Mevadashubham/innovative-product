import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer>
      <div className="footer" style={{ paddingTop: "50px" }}>
        <Container>
          <Row>
            <Col xl={3} lg={3} md={6} sm={6}>
              <img className="logo1" src="/assets/images/logo1.png" alt="Logo" />
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
            </Col>
            <Col xl={3} lg={3} md={6} sm={6}>
              <h3>About Us</h3>
              <ul className="about_us">
                <li>
                  dolor sit amet, consectetur
                  <br /> magna aliqua. Ut enim ad <br />
                  minim veniam, <br /> quisdotempor incididunt r
                </li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6}>
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
            </Col>
            <Col xl={3} lg={3} md={6} sm={6}>
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
            </Col>
          </Row>
        </Container>
        <div className="copyright">
          <Container>
            <Row>
              <Col md={12}>
                <p>
                  © 2019 All Rights Reserved. Design by
                  <a href="https://html.design/"> Free Html Templates</a>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
};
