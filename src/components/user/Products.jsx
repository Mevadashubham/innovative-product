import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';

export const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');


  // Fetch products
  useEffect(() => {
    axios.get('/product/getAllProducts')
      .then(res => {
        setProducts(res.data.data);
        setFilteredProducts(res.data.data);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  // Fetch categories
  useEffect(() => {
    axios.get('/category/getAllCategories')
      .then(res => setCategories(res.data.data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  // Fetch subcategories
  useEffect(() => {
    axios.get('/subCategory/getAllSubCategories')
      .then(res => setSubCategories(res.data.data))
      .catch(err => console.error("Error fetching subcategories:", err));
  }, []);

 // Handle auto-selection via query param (e.g., ?category=Computer)
 const location = useLocation();

 // Utility to parse query params
 const getQueryParams = (search) => {
   return new URLSearchParams(search);
 };
 
 useEffect(() => {
   const query = getQueryParams(location.search);
   const categoryName = query.get('category');
   if (categoryName && categories.length > 0) {
     const matchedCategory = categories.find(cat =>
       cat.name.toLowerCase() === categoryName.toLowerCase()
     );
     if (matchedCategory) {
       setSelectedCategory(matchedCategory._id);
     }
   }
 }, [location.search, categories]);

  // Filter logic
  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(
        product => product.categoryId?._id === selectedCategory
      );
    }

    if (selectedSubCategory) {
      filtered = filtered.filter(
        product => product.subCategoryId?._id === selectedSubCategory
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSubCategory, products]);

  return (
    <Container className="my-4">
      <h2 className="mb-4">Products</h2>

      {/* Filters */}
      <Row className="mb-4">
  <Col md={4}>
    <Form.Select
      value={selectedCategory}
      onChange={(e) => {
        const selected = e.target.value;
        setSelectedCategory(selected);
        setSelectedSubCategory(''); // reset subcategory when category changes
      }}
    >
      <option value="">Filter by Category</option>
      {categories.map(cat => (
        <option key={cat._id} value={cat._id}>{cat.name}</option>
      ))}
    </Form.Select>
  </Col>

  <Col md={4}>
  <Form.Select
  value={selectedSubCategory}
  onChange={(e) => setSelectedSubCategory(e.target.value)}
  disabled={!selectedCategory}
>
  {!selectedCategory ? (
    <option value="">Please select a category first</option>
  ) : (
    <>
      <option value="">Filter by Subcategory</option>
      {subCategories
        .filter(sub => sub.categoryId?._id === selectedCategory)
        .map(sub => (
          <option key={sub._id} value={sub._id}>{sub.name}</option>
        ))}
    </>
  )}
</Form.Select>

  </Col>
</Row>

      {/* Product Cards */}
      <Row>
        {filteredProducts.map(product => (
              <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card>
                   {product.offerPrice && (
                  <span className="badge bg-success position-absolute top-0 end-0 m-2">
                    {Math.round(100 - (product.offerPrice / product.price) * 100)}% OFF
                  </span>
                )}
              <Card.Img
                variant="top"
                src={product.productImageURL}
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
  <Card.Title>{product.name}</Card.Title>

  <div className="text-end">
    {product.offerPrice ? (
      <>
      <div style={{ fontSize: '0.9rem' }} className="text-muted text-decoration-line-through">
        ₹{product.price}
      </div>
      <div style={{ fontSize: '1.1rem' }} className="text-danger fw-bold">
        ₹{product.offerPrice}
      </div>
    </>
    ) : (
      <div className="fw-bold">₹{product.price}</div>
    )}
  </div>

  <div className="d-flex justify-content-between mt-2">
    <Button
      variant="primary"
      onClick={() => dispatch(addToCart(product))}
    >
      Add to Cart
    </Button>
    <Link to={`/products/${product._id}`}>
      <Button variant="outline-secondary">View Details</Button>
    </Link>
  </div>
</Card.Body>


            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
