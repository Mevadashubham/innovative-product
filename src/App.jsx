import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import { UserSidebar } from "./components/layouts/UserSidebar";
// import { UserProfile } from "./components/user/UserProfile";
import axios from "axios";
import "./assets/css/adminlte.css";
import "./assets/css/adminlte.min.css";
import { Signup } from "./components/common/Signup";
import { Login } from "./components/common/Login";
import { UserProfile } from "./components/user/UserProfile";
import { VendorSidebar } from "./components/layouts/VendorSidebar";
import { AddProduct } from "./components/vendor/AddProduct";
import PrivateRoutes from "./hooks/PrivateRoutes";
import LandingPage from "./components/common/LandingPage";
import { ResetPassword } from "./components/common/ResetPassword";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  
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
    <div className={location.pathname === "/login" || location.pathname === "/signup" ? "" : "app-wrapper"}>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
<Route path="" element={<LandingPage />} />
<Route path="resetpassword/:token" element={<ResetPassword />} />

      <Route path="" element={<PrivateRoutes />}>
        {/* <Route path="/user" element={<UserSidebar />}>
          <Route path="profile" element={<UserProfile/>} />
        </Route> */}

          <Route path="/vendor" element={<VendorSidebar />}>
           <Route path="addproduct" element={<AddProduct />} />
          </Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;