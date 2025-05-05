import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartItem, clearCart } from '../../redux/CartSlice';
import { useNavigate } from 'react-router-dom';

export const CartViewStep = ({ onNext }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const { control, getValues } = useForm();

  const [grandTotal, setGrandTotal] = useState(0);

  // Recalculate grand total whenever cart items or their quantities change
  useEffect(() => {
    const total = cartItems.reduce((acc, product) => {
      const qty = product.quantity || 1;
      const price = product.offerPrice ?? product.price;
      return acc + price * qty;
    }, 0);
    setGrandTotal(total); // Update the grand total state
  }, [cartItems]);

  const handleUpdate = () => {
    const values = getValues();
    Object.keys(values).forEach((key) => {
      const quantity = parseInt(values[key], 10);
      if (quantity > 0) {
        const _id = key.split('_')[1]; // Extract product ID from the key
        dispatch(updateCartItem({ _id, quantity }));
      }
    });

    alert('Cart updated!');
  };

  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleClearCart = () => dispatch(clearCart());

  if (cartItems.length === 0) return <p className="mt-5 text-center fs-5">Your cart is empty.</p>;

  return (
    <form >
      <h2 className="mt-4 mb-3">Step 1: Review Cart</h2>
      <table className="table table-bordered">
        <thead className="table-dark text-center align-middle">
          <tr>
            <th>Product</th>
            <th>Details</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product, index) => {
            const qty = product.quantity || 1;
            const price = product.offerPrice ?? product.price;

            return (
              <tr key={`${product.id}-${index}`}>
                <td>
                  <img src={product.productImageURL} alt={product.name} width="60" height="60" className="rounded"  />
                </td>
                <td>{product.name}</td>
                <td>
                  <Controller
                    name={`quantity_${product._id}`}
                    control={control}
                    defaultValue={qty}
                    render={({ field }) => (
                      <input type="number" min="1" {...field} className="form-control" />
                    )}
                  />
                </td>
                <td className="text-end">
                {product.offerPrice ? (
                      <>
                        <div>
                          <del className="text-muted">${product.price}</del>
                        </div>
                        <div className="fw-bold text-success">${product.offerPrice}</div>
                      </>
                    ) : (
                      <div className="fw-bold">${product.price}</div>
                    )}
                  </td>
                <td>${price * qty}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemove(product._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center">
        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="text-end mt-3">
        <button type="button" className="btn btn-primary me-2" onClick={handleUpdate}>
          Update Cart
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => navigate('/user/shippingstep')}
          disabled={cartItems.length === 0}
        >
          Proceed to Shipping
        </button>
      </div>
    </form>
  );
};
