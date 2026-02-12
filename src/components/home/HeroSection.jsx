import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col } from "react-bootstrap";

export const HeroSection = () => {
  return (
    <section className="banner_main">
      <Carousel id="banner1">
        <Carousel.Item>
          <Container>
            <div className="carousel-caption">
              <Row>
                <Col md={6}>
                  <div className="text-bg">
                    <span>Laptop</span>
                    <h1 className="fs-2">
                      Accessories That Power Your Productivity
                    </h1>
                    <p>
                      Upgrade your workspace with premium laptop accessories
                      designed for performance, comfort, and style. From
                      essentials to enhancements, we’ve got everything you need.{" "}
                    </p>
                    <Link to="/user/products">Buy Now </Link>{" "}
                    <Link to="/contactus">Contact </Link>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text_img">
                    <figure>
                      <img
                        className="w-75"
                        src="/assets/images/Main_bag1.png"
                        alt="Main Bag"
                      />
                    </figure>
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
                <Col md={6}>
                  <div className="text-bg">
                    <span>Computer And Laptop</span>
                    <h1>Accessories</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or{" "}
                    </p>
                    <Link to="/user/products">Buy Now </Link>{" "}
                    <Link to="/contactus">Contact </Link>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text_img">
                    <figure>
                      <img src="/assets/images/pct.png" alt="Accessories" />
                    </figure>
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
                <Col md={6}>
                  <div className="text-bg">
                    <span>Computer And Laptop</span>
                    <h1>Accessories</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or{" "}
                    </p>
                    <Link to="/user/products">Buy Now </Link>{" "}
                    <Link to="/contactus">Contact </Link>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text_img">
                    <figure>
                      <img src="/assets/images/pct.png" alt="Accessories" />
                    </figure>
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
                <Col md={6}>
                  <div className="text-bg">
                    <span>Computer And Laptop</span>
                    <h1>Accessories</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or{" "}
                    </p>
                    <Link to="/user/products">Buy Now </Link>{" "}
                    <Link to="/contactus">Contact </Link>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text_img">
                    <figure>
                      <img src="/assets/images/pct.png" alt="Accessories" />
                    </figure>
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
                <Col md={6}>
                  <div className="text-bg">
                    <span>Computer And Laptop</span>
                    <h1>Accessories</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or{" "}
                    </p>
                    <Link to="/user/products">Buy Now </Link>{" "}
                    <Link to="/contactus">Contact </Link>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text_img">
                    <figure>
                      <img src="/assets/images/pct.png" alt="Accessories" />
                    </figure>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
