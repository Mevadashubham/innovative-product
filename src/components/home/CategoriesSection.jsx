import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const CategoriesSection = () => {
  return (
    <div className="three_box">
      <Container>
        <Row>
          <Col md={4}>
            <div className="box_text">
              <i>
                <img src="/assets/images/thr.png" alt="Computer Category" />
              </i>
              <h3>Computer</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="box_text">
              <i>
                <img src="/assets/images/thr1.png" alt="Laptop Category" />
              </i>
              <h3>Laptop</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="box_text">
              <i>
                <img src="/assets/images/thr2.png" alt="Tablet Category" />
              </i>
              <h3>Tablet</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
