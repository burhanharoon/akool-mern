import React, { useState } from 'react'
import { logoutUser } from '../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, Link, useNavigate } from "react-router-dom";

const AppStoreScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(false)
    const [showNavDropdown, setShowNavDropdown] = useState(false)
    const user = useSelector(state => state.userInfo)
    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/')
    }

    return (
        <>
            <div className="dash-area" >
                <div className="dash-fl">
                    <div className="dash-left">
                        <div className="dash-logo">
                            <Link title="footer logo" to='/'><img src="/images/footer_logo.png" alt="footer logo" /></Link>
                        </div>
                        <div className="dash-menu">
                            <ul>
                                <li className={"acctive"}><Link to="/"><img src="/images/application.png" alt="" /> Creation</Link></li>
                                <li className={"acctive"}><Link to="/marketplace"><img src="/images/application.png" alt="" /> Data Marketplace</Link></li>
                                <li className={"acctive"}><Link to="/recognition"><img src="/images/application.png" alt="" /> Recognition</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dash-right" style={{ position: 'relative' }}>
                        <div className="store-baner gap-4" style={{ backgroundImage: "url('images/app_intro_bg.png')" }}>
                            <div title="nav_icon" onClick={() => { showNav ? setShowNav(false) : setShowNav(true) }} className="dash-right-btn col-md-block" data-bs-toggle="offcanvas"
                                role="button" aria-controls="offcanvasExample">
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </div>
                            <div className={showNav ? "offcanvas offcanvas-start col-md-block show" : "offcanvas offcanvas-start col-md-block"} style={showNav ? { visibility: "visible" } : { visibility: "hidden" }} >
                                <div className="offcanvas-header">
                                    <div className="dash-logo">
                                        <Link to={'/'}><img src="/images/footer_logo.png" alt="" /></Link>
                                    </div>
                                    <button type="button" className="btn-close text-reset" onClick={() => { setShowNav(false) }}
                                        aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">


                                    <div className="dash-menu">
                                        <ul>
                                            <li className="acctive"><a href="true"><img src="/images/application.png" alt="" />
                                                Creation</a></li>
                                            <li><a href="true"><img src="/images/application.png" alt="" />Data Marketplace</a></li>
                                            <li><a href="true"><img src="/images/application.png" alt="" />Recognition</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <h3 className='launch-h3 w-100'>App Store</h3>
                            <div className='d-flex align-items-center justify-content-end gap-2 position-relative'>
                                <img className='w-75 w-sm-100' src="/images/man.png" alt="" />
                                <div className='text-white d-none d-sm-block fw-bold fs-6'>
                                    <p className='text-white mb-2'>{user.name}</p>
                                    <p className='text-white mb-2'>{user.email}</p>
                                    <div className='d-flex items-center gap-2'>
                                        <button type="button" className="btn btn-primary w-100">Profile</button>
                                        <button onClick={handleLogout} type="button" className="btn btn-primary">Logout</button>

                                    </div>
                                </div>
                                <span onClick={() => { showNavDropdown ? setShowNavDropdown(false) : setShowNavDropdown(true) }}><i className="fa fa-chevron-down d-sm-none" style={{ color: "#fff" }}></i></span>
                                <div className={showNavDropdown ? 'position-absolute end-0 bg-light p-2 rounded shadow d-sm-none' : 'position-absolute end-0 bg-light p-2 rounded d-none'} style={{ top: "4rem" }}>
                                    <p className='mb-2'>{user.name}</p>
                                    <p className='mb-2'>{user.email}</p>
                                    <button onClick={handleLogout} type="button" className="btn btn-primary">Logout</button>

                                </div>
                            </div>
                            <div onClick={() => { showNav ? setShowNav(false) : setShowNav(true) }} className={showNav ? 'modal-backdrop fade show' : 'd-none'}></div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppStoreScreen