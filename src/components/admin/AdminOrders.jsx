import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error('Error fetching orders:', err));
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`/api/orders/${id}/status`, { status });
      setOrders((prev) =>
        prev.map((order) =>
          order._id === id ? { ...order, status } : order
        )
      );
    } catch (err) {
      alert('Failed to update status');
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <h2>Admin: Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Total</th>
              <th>Items</th>
              <th>Created</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.customer.name}</td>
                <td>{order.customer.email}</td>
                <td>${order.total}</td>
                <td>
                  <ul className="mb-0">
                    {order.items.map((item, i) => (
                      <li key={i}>
                        {item.name} × {item.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
                <td>
                  <select
                    className="form-select"
                    value={order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  >
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
