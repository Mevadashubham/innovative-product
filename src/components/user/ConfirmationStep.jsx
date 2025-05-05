import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { clearCart } from "../../redux/CartSlice";
import { useNavigate } from "react-router-dom";

export const ConfirmationStep = () => {
  const shippingData = useSelector((state) => state.order.shippingData);
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const grandTotal = cartItems.reduce((acc, item) => {
    const qty = item.quantity || 1;
    const price = item.offerPrice ?? item.price;
    return acc + price * qty;
  }, 0);

  const handlePlaceOrder = async () => {
    const orderPayload = {
      customer: shippingData,
      items: cartItems,
      total: grandTotal,
    };

    try {
      const res = await axios.post("/api/orders", orderPayload); // adjust your API route
      const orderData = res.data;

      alert("Order placed successfully!");
      dispatch(clearCart()); // Clear cart after placing order
      navigate("/order-details", { state: orderData });
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to place order. Try again.");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Step 3: Order Confirmation</h2>

      <h4 className="mt-4">Shipping Information</h4>
      <p>
        <strong>Name:</strong> {shippingData.name}
      </p>
      <p>
        <strong>Email:</strong> {shippingData.email}
      </p>
      <p>
        <strong>Address:</strong> {shippingData.address}
      </p>

      <h4 className="mt-4">Order Summary</h4>
      <ul className="list-group mb-3">
        {cartItems.map((item) => {
          const qty = item.quantity || 1;
          const price = item.offerPrice ?? item.price;
          return (
            <li
              className="list-group-item d-flex justify-content-between"
              key={item._id || `${item.name}-${index}`}
            >
              <span>
                {item.name} × {qty}
              </span>
              <span>${(qty * price).toFixed(2)}</span>
            </li>
          );
        })}
        <li className="list-group-item d-flex justify-content-between">
          <strong>Total</strong>
          <strong>${grandTotal.toFixed(2)}</strong>
        </li>
      </ul>

      <div className="text-center">
        <button className="btn btn-success" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};
