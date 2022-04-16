import React, { useState } from 'react'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href='true' title="Home">
                    <img src="images/logo.png" alt="" />
                </a>
                <button onClick={() => { showNav ? setShowNav(false) : setShowNav(true) }} className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div className={showNav ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link page_link" href='true'>Akool</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page_link" href='true'>Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page_link" href='true'>Akool</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page_link" href='true'>Products</a>
                        </li>
                        <li>
                            <div className="gap"></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='true'>Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav_btn one" href='true'>Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav_btn two" href='true'>Login</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>)
}

export default Navbar