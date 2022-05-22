import React, { useState } from 'react'
import { logoutUser } from '../actions/userActions'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';

const Navbar = ({ hideNavItems }) => {
    const [showNav, setShowNav] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector(state => state.userInfo)

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/')
    }
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
                        <div className='w-100'>
                            <ul className="navbar-nav ms-auto flex justify-content-center items-center position-relative">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link page_link">Akool</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link page_link" to='/apps'>Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link page_link" to='/apps'>Solutions</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='true'>Pricing</a>
                                </li>
                                <div className='d-flex flex-column gap-3 bg-primary p-2'>
                                    <Link to='/' className='text-light d-flex justify-content-center align-items-center'>
                                        <img src="/images/smart camera.png" width={40} alt="smart camera" />
                                        <p>Smart Camera</p>
                                    </Link>

                                </div>
                            </ul>
                        </div>
                        <ul className="navbar-nav ms-auto">
                            {user ?
                                <li className="nav-item">
                                    <Button onClick={handleLogout} variant="danger" className='p-2 px-3'>Logout</Button>
                                </li> :
                                <>
                                    <li className="nav-item">
                                        <Link to='/register' className="nav-link nav_btn one">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav_btn two" to='/login'>Login</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar