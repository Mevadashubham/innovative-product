import React from 'react'
import { useNavigate } from 'react-router-dom';
import hamburgermenu from "../../assets/images/hamburgermenu.png";
import nightModeIcon from "../../assets/images/night-mode.png";
import lightModeIcon from "../../assets/images/light-mode.png";
// import "../../assets/css/VendorNavbar.css"

export const VendorNavbar = ({ isSidebarOpen, toggleSidebar, darkMode, toggleDarkMode }) => {

    const navigate = useNavigate();
    const onLogout = () => {
      // Clear authentication (modify as needed)
      localStorage.removeItem('id'); // Example: Remove token from storage
  
      // Redirect to login page
      navigate('/login');
    };


  return (  
            <nav 
              className={`app-header navbar navbar-expand bg-body ${isSidebarOpen ? '' : 'collapsed'}`}
              data-bs-theme={darkMode ? "dark" : "light"}
            >
                {/*begin::Container*/}
                <div className="container-fluid">
                    {/* begin::Start Navbar Links */}
                     <ul className="navbar-nav">
                        <li className="nav-item">
                        <a
              className="nav-link btn btn-light"
              href="#"
              role="button"
              style={{
                // color: "black", // Removed hardcoded black
                padding: "5px 10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                transition: "0.3s ease-in-out",
              }}
              onClick={(e) => {
                e.preventDefault(); // Prevent any default action
                toggleSidebar(); // Call the function
              }}
              >
              <img src={hamburgermenu} style={{height:"25px",width:"25px", filter: darkMode ? "invert(1)" : "none"}}></img> 
              {/* Invert hamburger icon color in dark mode if it's an image. 
                  Actually, the image source is 'hamburgermenu.png'. If it's black lines on transparent, it needs inversion. 
                  Using CSS filter to invert it if darkMode is active. 
              */}
            </a>
                        </li>
                    </ul> 
                    {/*end::Start Navbar Links*/}

                    {/*begin::End Navbar Links*/}
                    <ul className="navbar-nav ms-auto align-items-center">

                        {/* Theme Toggle Button */}
                        <li className="nav-item">
                            <button 
                                className="btn btn-outline-secondary rounded-circle" 
                                onClick={toggleDarkMode}
                                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                style={{
                                    width: '40px', 
                                    height: '40px', 
                                    padding: 0, 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    border: 'none', // Optional: remove border if icons look better without
                                    background: 'white'
                                }}
                            >
                                <img 
                                    src={darkMode ? lightModeIcon : nightModeIcon} 
                                    alt={darkMode ? "Light Mode" : "Dark Mode"}
                                    style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                                />
                            </button>
                        </li>

                        {/* Login/Signup Links - Cleaned up */}
                        <li className="nav-item d-flex align-items-center ms-2">
                             <a href='/login' className="nav-link px-2">Login</a>
                             <span className="text-muted">|</span>
                             <a href='/signup' className="nav-link px-2">Signup</a>
                        </li>
                        
                          {/* Logout Button */}
                          <li className="nav-item">
                                <button className="btn btn-danger ms-3" onClick={onLogout}>Logout</button>
                          </li>
                        {/*end::User Menu Dropdown*/}
                    </ul>
                    {/*end::End Navbar Links*/}
                
              {/*end::Container*/}
              </div>
            </nav>   

            )
}