import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderDetails = () => {
  const { state: order } = useLocation();
  const navigate = useNavigate();

  if (!order) {
    return (
      <div className="text-center mt-5">
        <p>Order not found.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>✅ Order Placed Successfully!</h2>
      <p className="text-muted">Order ID: {order._id}</p>

      <h4 className="mt-4">Customer Info</h4>
      {order.customer ? (
      <>
    <p><strong>Name:</strong> {order.customer.name || "N/A"}</p>
    <p><strong>Email:</strong> {order.customer.email || "N/A"}</p>
    <p><strong>Address:</strong> {order.customer.address || "N/A"}</p>
  </>
) : (
  <p>No customer information available.</p>
)}


<h4 className="mt-4">Items Ordered</h4>
      {order?.items?.length > 0 ? (
        <ul className="list-group">
          {order.items.map((item, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between">
              <span>{item?.name} × {item?.quantity}</span>
              <span>₹{(item?.offerPrice ?? item?.price) * item?.quantity}</span>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <strong>Total</strong>
            <strong>₹{order?.total || 'N/A'}</strong>
          </li>
        </ul>
      ) : (
        <div className="p-3 border rounded">No items available.</div>
      )}

      <div className="text-center mt-4">
        <button className="btn btn-secondary" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
};

export default OrderDetails;
