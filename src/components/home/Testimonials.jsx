import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

export const Testimonials = () => {
  return (
    <div className="customer">
      <Container>
        <Row>
          <Col md={12}>
            <div className="titlepage">
              <h2>Customer Review</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Carousel id="myCarousel" className="customer_Carousel">
              <Carousel.Item>
                <Container>
                  <div className="carousel-caption">
                    <Row>
                      <Col md={{ span: 9, offset: 3 }}>
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
                      </Col>
                    </Row>
                  </div>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container>
                  <div className="carousel-caption">
                    <Row>
                      <Col md={{ span: 9, offset: 3 }}>
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
                      </Col>
                    </Row>
                  </div>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container>
                  <div className="carousel-caption">
                    <Row>
                      <Col md={{ span: 9, offset: 3 }}>
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
                      </Col>
                    </Row>
                  </div>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
