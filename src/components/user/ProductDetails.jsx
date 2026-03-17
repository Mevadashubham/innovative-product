import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  Badge,
  Breadcrumb,
  Tabs,
  Tab,
  Card,
  Carousel,
} from "react-bootstrap";
import "../../assets/css/ProductDetails.css";

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    axios
      .get(`/product/getProductById/${id}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  if (!product)
    return (
      <Container className="my-5 text-center">
        <h3>Loading...</h3>
      </Container>
    );

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) setQuantity(value);
  };

  const handleAddToCart = () => {
    // Dispatch check logic if needed
    dispatch(addToCart(product));
  };

  const discountPercentage = product.offerPrice
    ? Math.round(((product.price - product.offerPrice) / product.price) * 100)
    : 0;

  return (
    <Container className="my-5 product-details-page">
      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/user/products" }}>
          Products
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        {/* Product Image */}
        <Col md={6} className="mb-4">
          <div className="product-image-container text-center border rounded p-3 bg-white">
            {product?.productImages && product.productImages.length > 0 ? (
              <Carousel data-bs-theme="dark">
                {product.productImages.map((img, index) => (
                  <Carousel.Item key={index}>
                    <div
                      style={{
                        height: "500px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        fluid
                        style={{ maxHeight: "100%", objectFit: "contain" }}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <Image
                src={product.productImageURL}
                alt={product.name}
                fluid
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            )}
          </div>
        </Col>

        {/* Product Info */}
        <Col md={6}>
          <h1 className="display-5 fw-bold">{product.name}</h1>
          <div className="mb-3 text-muted">
            <span>Category: {product.categoryId?.name}</span> |{" "}
            <span>Subcategory: {product.subCategoryId?.name}</span>
          </div>

          <div className="mb-3">
            {/* Ratings Placeholder */}
            <span className="text-warning">★ ★ ★ ★ ☆</span>{" "}
            <span className="text-muted">(4.0)</span>
          </div>

          <div className="mb-4">
            {product.offerPrice ? (
              <h3>
                <span className="text-danger fw-bold me-2">
                  ₹{product.offerPrice}
                </span>
                <span className="text-muted text-decoration-line-through fs-5 me-2">
                  ₹{product.price}
                </span>
                <Badge bg="success">{discountPercentage}% OFF</Badge>
              </h3>
            ) : (
              <h3>₹{product.price}</h3>
            )}
          </div>

          <p className="lead">{product.productDetails}</p>

          <Row className="align-items-center mb-4">
            <Col xs="auto">
              <Form.Label className="me-2 fw-bold">Quantity:</Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Control
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                style={{ width: "80px" }}
              />
            </Col>
          </Row>

          <div className="d-grid gap-2 d-md-block">
            <Button
              variant="primary"
              size="lg"
              className="me-md-3"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button variant="outline-secondary" size="lg">
              Buy Now
            </Button>
          </div>

          <div className="mt-4">
            <small className="text-muted">
              <i className="bi bi-truck"></i> Free Delivery &nbsp;&nbsp;
              <i className="bi bi-arrow-repeat"></i> 30 Days Return
            </small>
          </div>
        </Col>
      </Row>

      {/* Product Details Tabs */}
      <Row className="mt-5">
        <Col>
          <Tabs
            id="product-tabs"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3"
          >
            <Tab eventKey="description" title="Description">
              <Card className="border-0">
                <Card.Body>
                  <h5>Product Description</h5>
                  <p>{product.productDetails}</p>
                  {/* Placeholder for more detailed description if available */}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="reviews" title="Reviews (0)">
              <Card className="border-0">
                <Card.Body>
                  <p>No reviews yet.</p>
                  <Button variant="outline-primary" size="sm">
                    Write a Review
                  </Button>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
