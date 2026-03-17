import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("/product/getAllProducts");
      console.log(res.data.data);
      setProducts(res.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle product deletion
  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      await axios.delete(`/product/deleteProduct/${productId}`);
      toast.success("Product deleted successfully!");
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>View Products</h1>
      
      {/* Loading State */}
      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading products...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
          <button 
            className="btn btn-sm btn-outline-danger ms-3" 
            onClick={fetchProducts}
          >
            Retry
          </button>
        </div>
      )}

      {/* Products Display */}
      {!loading && !error && (
        <>
          {products && products.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {products.map((product) => (
            <Card
              key={product._id}
              style={{ width: "250px", minHeight: "400px" }}
              className="shadow-sm"
            >
              {((product.productImages && product.productImages.length > 0) || product.productImageURL) && (
                <Card.Img
                  variant="top"
                  src={product.productImages && product.productImages.length > 0 ? product.productImages[0] : product.productImageURL}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                  loading="lazy"
                />
              )}
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text as="div">
                  {product.offerPrice !== undefined &&
                  product.offerPrice !== null &&
                  product.offerPrice !== product.price ? (
                    <>
                      <p className="mb-1">
                        <strong>Price:</strong>{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          ${product.price}
                        </span>
                      </p>
                      <p className="mb-1">
                        <strong>Offer Price:</strong> ${product.offerPrice}
                      </p>
                    </>
                  ) : (
                    <p className="mb-1">
                      <strong>Price:</strong> ${product.price}
                    </p>
                  )}
                  <p className="mb-1">
                    <strong>Category:</strong>{" "}
                    {product.categoryId?.name || "N/A"}
                  </p>
                  <p className="mb-1">
                    <strong>Sub Category:</strong>{" "}
                    {product.subCategoryId?.name || "N/A"}
                  </p>
                  <p className="mb-1">
                    <strong>Description:</strong> {product.productDetails || "N/A"}
                  </p>
                </Card.Text>
                
                <div className="mt-auto">
                    <Link to={`/vendor/updateproduct/${product._id}`}>
                        <Button variant="primary" className="w-100 mb-2">
                        Update
                        </Button>
                    </Link>
                    <Button variant="danger" className="w-100" onClick={() => handleDelete(product._id)}>
                        Delete
                    </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
        </>
      )}
    </div>
  );
};

export default ViewProduct;
