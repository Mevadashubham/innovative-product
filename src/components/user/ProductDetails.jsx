import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import "../../assets/css/ProductDetails.css"; // optional: move styles here


export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

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

  if (!product) return <p>Loading...</p>;
  
  return (
    <div className="product-details-container">
      <div className="product-details-content">
        <div className="product-image">
          <img src={product.productImageURL} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p><strong>Category:</strong> {product.categoryId?.name}</p>
          <p><strong>Subcategory:</strong> {product.subCategoryId?.name}</p>
          <p><strong>Description:</strong> {product.productDetails}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>

          <button
            className="add-to-cart-btn"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
