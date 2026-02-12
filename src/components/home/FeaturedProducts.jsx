import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const FeaturedProducts = () => {
  const products = [
    { name: "Computers", image: "product11.png" },
    { name: "Laptop", image: "product10.jpg" },
    { name: "Tablet", image: "produnt12.jpg" },
    { name: "Speakers", image: "product4.png" },
    { name: "Internet", image: "product5.png" },
    { name: "Hardisk", image: "product6.png" },
    { name: "Rams", image: "product7.png" },
    { name: "Bettery", image: "product8.png" },
    { name: "Drive", image: "product9.png" },
  ];

  return (
    <div className="products">
      <Container>
        <Row>
          <Col md={12}>
            <div className="titlepage">
              <h2>Our Products</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="our_products">
              <Row>
                {products.map((product, index) => (
                  <Col key={index} md={4} className="margin_bottom1">
                    <Link
                      to={`/user/products?category=${encodeURIComponent(
                        product.name
                      )}`}
                    >
                      <div className="product_box">
                        <figure>
                          <img
                            src={`/assets/images/${product.image}`}
                            alt={product.name}
                          />
                        </figure>
                        <h3>{product.name}</h3>
                      </div>
                    </Link>
                  </Col>
                ))}

                <Col md={12}>
                  <Link className="read_more" to="/user/products">
                    See More
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
