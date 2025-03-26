import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ViewProduct = () => {
  const [products, setProducts] = useState([])

  // Function to fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get('/getAllProducts')
      console.log(res.data)
      setProducts(res.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

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
              }}
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                />
              )}
              <h3>{product.name}</h3>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              {/* Assuming that product includes category information */}
              <p>
                <strong>Category:</strong>{' '}
                {product.category_name ? product.category_name : 'N/A'}
              </p>
              <p>
                <strong>Sub Category:</strong>{' '}
                {product.sub_category_name ? product.sub_category_name : 'N/A'}
              </p>
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
