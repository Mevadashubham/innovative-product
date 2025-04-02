import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewProduct = () => {
  const [products, setProducts] = useState([])

  // Function to fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get('/product/getAllProducts')
      console.log(res.data.data)
      setProducts(res.data.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

// Function to handle product deletion
const handleDelete = async (productId) => {
  if (!window.confirm('Are you sure you want to delete this product?')) {
      return;
  }

  try {
      await axios.delete(`/product/deleteProduct/${productId}`);
      alert('Product deleted successfully!');
      setProducts(products.filter(product => product._id !== productId)); // Remove from UI
  } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
  }
};

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>View Products</h1>
      {products && products.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                width: '250px',
                display: "flex",
                flexDirection: "column", // Ensures children stack vertically
                // justifyContent: "space-between", // Pushes button to bottom
                minHeight: "400px", // Ensures cards have the same height
              }}
            >
              {product.productImageURL && (
                <img
                  src={product.productImageURL}
                  alt={product.name}
                  style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                />
              )}
              <h3>{product.name}</h3>
              {product.offerPrice !== undefined && product.offerPrice !== null && product.offerPrice !== product.price ? (
                <>
                  <p>
                    <strong>Price:</strong>{' '}
                    <span style={{ textDecoration: 'line-through' }}>${product.price}</span>
                  </p>
                  <p>
                    <strong>Offer Price:</strong> ${product.offerPrice}
                  </p>
                </>
              ) : (
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
              )}
              {/* <p>
                <strong>Price:</strong> ${product.price}
              </p> */}
              {/* Assuming that product includes category information */}
              <p>
                <strong>Category:</strong>{' '}
                {product.categoryId && product.categoryId.name ? product.categoryId.name : 'N/A'}
              </p>
              <p>
                <strong>Sub Category:</strong>{' '}
                {product.subCategoryId && product.subCategoryId.name ? product.subCategoryId.name : 'N/A'}
              </p>
              <p>
                <strong>Description:</strong>{' '}
                {product.productDetails || 'N/A'}
              </p>
              <div style={{ flexGrow: 1 }}></div>
              <Link to={`/vendor/updateproduct/${product._id}`}>
                                <button style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#6a11cb",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                  >Update</button>
             </Link>
              {/* Delete Button */}
              
                                <button
                                    onClick={() => handleDelete(product._id)}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        backgroundColor: '#dc3545', // Bootstrap danger red
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        marginTop: '10px',
                                    }}
                                >
                                    Delete
                                </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  )
}

export default ViewProduct
