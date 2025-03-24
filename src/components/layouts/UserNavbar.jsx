import React from 'react'

export const UserNavbar = () => {
    return (
        <div>
            <nav className="app-header navbar navbar-expand bg-body">
                {/*begin::Container*/}
                <div className="container-fluid">
                    {/*begin::Start Navbar Links*/}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-lte-toggle="sidebar"
                                href="#"
                                role="button"
                            >
                                <i className="bi bi-list" />
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-block">
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
                        </li>
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
                                <span className="d-none d-md-inline"> Add Employee |</span>
                                <a href='login'> Login | </a>
                                <a href='Signup'> Signup </a>


                            </a>
                            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                            </ul>
                        </li>
                        {/*end::User Menu Dropdown*/}
                    </ul>
                    {/*end::End Navbar Links*/}
                </div>
                {/*end::Container*/}
            </nav>
        </div>
    )
}