import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'


const AppStoreScreen = () => {
    const dispatch = useDispatch()
    const [showNav, setShowNav] = useState(false)
    const [showNavDropdown, setShowNavDropdown] = useState(false)
    const user = useSelector(state => state.userInfo)
    const handleLogout = () => {
        dispatch(logoutUser())
        // console.log(user);
    }

    return (
        <>
            <div className="dash-area">
                <div className="dash-fl">
                    <div className="dash-left">
                        <div className="dash-logo">
                            <Link title="footer logo" to='/'><img src="/images/footer_logo.png" alt="footer logo" /></Link>
                        </div>
                        <div className="dash-menu">
                            <ul>
                                <li className="acctive"><a href="true"><img src="/images/application.png" alt="" /> Apps</a></li>
                                <li><a href="true"><img src="/images/application.png" alt="" /> Apps</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dash-right">
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
                                                Apps</a></li>
                                            <li><a href="true"><img src="/images/application.png" alt="" /> Apps</a></li>
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
                                    <button onClick={handleLogout} type="button" className="btn btn-primary">Logout</button>
                                </div>
                                <span onClick={() => { showNavDropdown ? setShowNavDropdown(false) : setShowNavDropdown(true) }}><i className="fa fa-chevron-down d-sm-none" style={{ color: "#fff" }}></i></span>
                                <div className={showNavDropdown ? 'position-absolute end-0 bg-light p-2 rounded shadow d-sm-none' : 'position-absolute end-0 bg-light p-2 rounded d-none'} style={{ top: "4rem" }}>
                                    <p className='mb-2'>{user.name}</p>
                                    <p className='mb-0'>{user.email}</p>
                                </div>
                            </div>
                            <div onClick={() => { showNav ? setShowNav(false) : setShowNav(true) }} className={showNav ? 'modal-backdrop fade show' : 'd-none'}></div>
                        </div>
                        <div className="used-area">
                            <div className="container">
                                <div className="section-title">
                                    <h3 className='launch-h3'>Used</h3>
                                </div>
                                <div className="used-fl">
                                    <div className="slider_card">
                                        <div className="top_section">
                                            <div className="image_section">
                                                <img src="/images/slider_image.png" alt="slider" />
                                            </div>
                                            <div className="heart_icon_section">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="bottom_section">
                                            <h3 className='launch-h3'>Akool Marketplace</h3>
                                            <div className="rating_section d-flex align-items-baseline">
                                                <h5 className="mb-0">5.0</h5>
                                                <div className="star_section">
                                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="slider_card">
                                        <div className="top_section">
                                            <div className="image_section">
                                                <img src="/images/slider_image.png" alt="slider" />
                                            </div>
                                            <div className="heart_icon_section">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="bottom_section">
                                            <h3 className='launch-h3'>Akool Marketplace</h3>
                                            <div className="rating_section d-flex align-items-baseline">
                                                <h5 className="mb-0">5.0</h5>
                                                <div className="star_section">
                                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="recommendtion_part">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="heading_text">
                                                <h3 className='launch-h3'>Recommended Apps</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="slider_section top_selected_apps_slider owl-carousel">
                                                <div className="slider_card first_slider_card">
                                                    <div className="top_section">
                                                        <div className="image_section">
                                                            <img src="/images/slider_image.png" alt="slider" />
                                                        </div>
                                                        <div className="heart_icon_section">
                                                            <i className="fa fa-heart"></i>
                                                        </div>
                                                    </div>
                                                    <div className="bottom_section">
                                                        <h3 className='launch-h3'>Akool Marketplace</h3>
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                            dolore eu fugiat.</p>
                                                        <div className="rating_section d-flex align-items-baseline">
                                                            <h5 className="mb-0">5.0</h5>
                                                            <div className="star_section">
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="slider_card first_slider_card">
                                                    <div className="top_section">
                                                        <div className="image_section">
                                                            <img src="/images/slider_image.png" alt="slider" />
                                                        </div>
                                                        <div className="heart_icon_section">
                                                            <i className="fa fa-heart"></i>
                                                        </div>
                                                    </div>
                                                    <div className="bottom_section">
                                                        <h3 className='launch-h3'>Akool Marketplace</h3>
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                            dolore eu fugiat.</p>
                                                        <div className="rating_section d-flex align-items-baseline">
                                                            <h5 className="mb-0">5.0</h5>
                                                            <div className="star_section">
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="slider_card first_slider_card">
                                                    <div className="top_section">
                                                        <div className="image_section">
                                                            <img src="/images/slider_image.png" alt="slider" />
                                                        </div>
                                                        <div className="heart_icon_section">
                                                            <i className="fa fa-heart"></i>
                                                        </div>
                                                    </div>
                                                    <div className="bottom_section">
                                                        <h3 className='launch-h3'>Akool Marketplace</h3>
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                            dolore eu fugiat.</p>
                                                        <div className="rating_section d-flex align-items-baseline">
                                                            <h5 className="mb-0">5.0</h5>
                                                            <div className="star_section">
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="slider_card first_slider_card">
                                                    <div className="top_section">
                                                        <div className="image_section">
                                                            <img src="/images/slider_image.png" alt="slider" />
                                                        </div>
                                                        <div className="heart_icon_section">
                                                            <i className="fa fa-heart"></i>
                                                        </div>
                                                    </div>
                                                    <div className="bottom_section">
                                                        <h3 className='launch-h3'>Akool Marketplace</h3>
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                            dolore eu fugiat.</p>
                                                        <div className="rating_section d-flex align-items-baseline">
                                                            <h5 className="mb-0">5.0</h5>
                                                            <div className="star_section">
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="all_apps_part">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="heading_text">
                                                <h3 className='launch-h3'>All Apps</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="all_apps_nav">
                                            <input type="text" placeholder="Search" />
                                            <div className="category__button">
                                                <ul className="category_parent">
                                                    <li>
                                                        <a href="true" className="category__child_button">Categories <i
                                                            className="fa fa-chevron-down" aria-hidden="true"></i></a>

                                                        <ul className="category_dropdown">
                                                            <li>
                                                                <a href="true">item</a>
                                                            </li>
                                                            <li>
                                                                <a href="true">item</a>
                                                            </li>
                                                            <li>
                                                                <a href="true">item</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <button type="submit" title="search"><i className="fa fa-search"
                                                    aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 view_more_row">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 view_more_row">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 view_more_row">
                                            <div className="slider_card">
                                                <div className="top_section">
                                                    <div className="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div className="heart_icon_section">
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div className="bottom_section">
                                                    <h3 className='launch-h3'>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div className="rating_section d-flex align-items-baseline">
                                                        <h5 className="mb-0">5.0</h5>
                                                        <div className="star_section">
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="see_more_btn">
                                            <a href="true" className="view_more_slider_card">View More <img
                                                src="/images/slider_right_arrow.png" alt="alider arrow" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AppStoreScreen