import React, { useState, useEffect } from "react";
import axios from "axios";

const UserViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch all products from the backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("/product/getAllProducts");
      setProducts(res.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shop Products</h1>
      {products.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                width: "250px",
              }}
            >
              {product.productImageURL && (
                <img
                  src={product.productImageURL}
                  alt={product.name}
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
              )}
              <h3>{product.name}</h3>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <p>
                <strong>Category:</strong>{" "}
                {product.categoryId?.name || "N/A"}
              </p>
              <p>
                <strong>Sub Category:</strong>{" "}
                {product.subCategoryId?.name || "N/A"}
              </p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default UserViewProduct;
