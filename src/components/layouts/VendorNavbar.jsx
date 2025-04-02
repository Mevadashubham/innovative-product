import React from 'react'
import { useNavigate } from 'react-router-dom';
import hamburgermenu from "../../assets/images/hamburgermenu.png";
// import "../../assets/css/VendorNavbar.css"

export const VendorNavbar = ({ isSidebarOpen,toggleSidebar }) => {

    const navigate = useNavigate();
    const onLogout = () => {
      // Clear authentication (modify as needed)
      localStorage.removeItem('id'); // Example: Remove token from storage
  
      // Redirect to login page
      navigate('/login');
    };


  return (  
            <nav className={`app-header navbar navbar-expand bg-body ${isSidebarOpen ? '' : 'collapsed'}`}>
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
                color: "black",
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
              <img src={hamburgermenu} style={{height:"25px",width:"25px"}}></img>
            </a>
                        </li>
                        {/* <li className="nav-item d-none d-md-block">
                            <a href="#" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a href="#" className="nav-link">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a href="#" className="nav-link">
                                Admin
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a href="#" className="nav-link">
                                User
                            </a>
                        </li>*/}
                    </ul> 
                    {/*end::Start Navbar Links*/}
                    {/*begin::End Navbar Links*/}
                    <ul className="navbar-nav ms-auto">

                        {/*begin::User Menu Dropdown*/}
                        <li className="nav-item dropdown user-menu">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                {/* <span className="d-none d-md-inline"> Add Employee |</span> */}
                                <a style={{position:'relative', left:"20px" }} href='/login'> Login | </a>
                                <a style={{position:'relative', left:"20px" }} href='/signup'> Signup </a>


                            </a>
                            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                            </ul>
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

            )}