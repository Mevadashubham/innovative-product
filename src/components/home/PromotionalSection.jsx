import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const PromotionalSection = () => {
  return (
    <div className="laptop">
      <Container>
        <Row>
          <Col md={6}>
            <div className="titlepage">
              <p>Every Computer and laptop</p>
              <h2>Up to 40% off !</h2>
              <Link className="read_more" to="/user/products">
                Shop Now
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="laptop_box">
              <figure>
                <img src="/assets/images/pc.png" alt="Laptop Promotion" />
              </figure>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
