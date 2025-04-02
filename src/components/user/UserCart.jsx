// import React from "react";

// const UserCart = ({ cart, setCart }) => {
//   // Remove item from cart
//   const removeFromCart = (index) => {
//     setCart(cart.filter((_, i) => i !== index));
//   };

//   // Calculate total price
//   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((product, index) => (
//             <div
//               key={index}
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 marginBottom: "10px",
//                 borderBottom: "1px solid #ddd",
//                 paddingBottom: "10px",
//               }}
//             >
//               <div>
//                 <strong>{product.name}</strong> - ${product.price}
//               </div>
//               <button onClick={() => removeFromCart(index)}>Remove</button>
//             </div>
//           ))}
//           <h3>Total: ${totalPrice.toFixed(2)}</h3>
//           <button style={{ marginTop: "10px" }}>Proceed to Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserCart;
