import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const ContactSection = () => {
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col md={12}>
            <div className="titlepage">
              <h2>Contact Now</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <form id="request" className="main_form">
              <Row>
                <Col md={12}>
                  <input
                    className="contactus"
                    placeholder="Name"
                    type="text"
                    name="Name"
                  />
                </Col>
                <Col md={12}>
                  <input
                    className="contactus"
                    placeholder="Email"
                    type="email"
                    name="Email"
                  />
                </Col>
                <Col md={12}>
                  <input
                    className="contactus"
                    placeholder="Phone Number"
                    type="tel"
                    name="Phone Number"
                  />
                </Col>
                <Col md={12}>
                  <textarea
                    className="textarea"
                    placeholder="Message"
                    name="Message"
                    defaultValue={""}
                  />
                </Col>
                <Col md={12}>
                  <button className="send_btn">Send</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
