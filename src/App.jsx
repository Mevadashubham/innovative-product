import { useState, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import { UserSidebar } from "./components/layouts/UserSidebar";
import axios from "axios";
import "./assets/css/adminlte.css";
import "./assets/css/adminlte.min.css";

import { Signup } from "./components/common/Signup";
import { Login } from "./components/common/Login";

import { VendorSidebar } from "./components/layouts/VendorSidebar";
import { AddProduct } from "./components/vendor/AddProduct";
import PrivateRoutes from "./hooks/PrivateRoutes";
// import LandingPage from "./components/common/LandingPage";
import { ResetPassword } from "./components/common/ResetPassword";
import ViewProduct from "./components/vendor/ViewProduct";
import UpdateProduct from "./components/vendor/UpdateProduct";
import { LandingPage1 } from "./components/user/LandingPage1";
import { About } from "./components/user/About";
// import { UserNavbar } from "./components/layouts/UserNavbar";
import UserLayout from "./components/layouts/UserLayout";
import PublicLayout from "./components/layouts/PublicLayout";
import { ConstactUs } from "./components/user/ConstactUs";
import { Products } from "./components/user/Products";
import { CartViewStep } from "./components/user/CartViewStep";
import { Checkout } from "./components/user/Checkout";
import { ShippingStep } from "./components/user/ShippingStep";
import { ConfirmationStep } from "./components/user/ConfirmationStep";
import { AdminOrders } from "./components/admin/AdminOrders";
import { ProductDetails } from "./components/user/ProductDetails";
import OrderDetails from "./components/user/OrderDeatils";
import UserProfile from "./components/user/UserProfile";

function App() {
  // axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.baseURL = "https://your-backend-name.onrender.com";

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (
    <div
      className={
        location.pathname === "/login" || location.pathname === "/signup"
          ? ""
          : "app-wrapper"
      }
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="resetpassword/:token" element={<ResetPassword />} />

        {/* Public routes - accessible without authentication */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage1 />} />
          <Route path="user/products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>

        {/* Protected routes - requires authentication */}
        <Route path="" element={<PrivateRoutes />}>
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<LandingPage1 />} />
            <Route path="homepage" element={<LandingPage1 />} />
            <Route path="aboutus" element={<About />} />
            <Route path="contactus" element={<ConstactUs />} />

            <Route path="userprofile" element={<UserProfile />} />
            <Route path="cartview" element={<CartViewStep />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="shippingstep" element={<ShippingStep />} />
            <Route path="confirmationstep" element={<ConfirmationStep />} />
          </Route>

          <Route path="/order-details" element={<OrderDetails />} />

          <Route path="/vendor" element={<VendorSidebar />}>
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="viewproduct" element={<ViewProduct />} />
            <Route path="updateproduct/:id" element={<UpdateProduct />}></Route>
          </Route>

          <Route path="/admin/orders" element={<AdminOrders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
