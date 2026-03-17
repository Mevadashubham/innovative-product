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
              <Row className="justify-content-center">
                {products.map((product, index) => (
                  <Col key={index} md={4} sm={6} xs={12} className="margin_bottom1 mb-3 [">
                    <Link
                      to={`/user/products?category=${encodeURIComponent(
                        product.name
                      )}`}
                      className="text-decoration-none"
                    >
                      <div 
                        className="product-box" 
                        style={{
                          backgroundColor: '#fff',
                          borderRadius: '10px',
                          padding: '10px',
                          boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                          transition: 'all 0.3s ease',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          cursor: 'pointer',
                          marginBottom: '10px'
      
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
                        }}
                      >
                        <div className="product-img-wrapper mb-2" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                          <img
                            src={`/assets/images/${product.image}`}
                            className="card-img-top"
                            alt={product.name}
                            style={{ height: '120px', objectFit: 'contain', width: '200px' }}
                            loading="lazy"
                          />
                        </div>
                        <h3 style={{ textAlign: 'center', margin: '5px 0 0', color: '#333', fontWeight: '600', fontSize: '1rem' }}>{product.name}</h3>
                      </div>
                    </Link>
                  </Col>
                ))}

                <Col md={12} className="text-center mt-4">
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
