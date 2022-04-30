import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = ({ hideNavItems }) => {
    const [showNav, setShowNav] = useState(false)
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to={'/'} title="Home">
                        <img src="/images/logo.png" alt="" />
                    </Link>
                    <button onClick={() => { showNav ? setShowNav(false) : setShowNav(true) }} className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className={showNav ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">

                        {hideNavItems ?
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href='true'>Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <Link to='register' className="nav-link nav_btn one" href='true'>Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav_btn two" to='/login'>Login</Link>
                                </li>
                            </ul> :
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link page_link">Akool</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link page_link" to='/apps'>Products</Link>
                                </li>
                                <li>
                                    <div className="gap"></div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='true'>Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <Link to='register' className="nav-link nav_btn one">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav_btn two" to='login'>Login</Link>
                                </li>
                            </ul>}
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar