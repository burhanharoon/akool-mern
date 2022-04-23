import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


const AppStoreScreen = () => {
    const [showNav, setShowNav] = useState(false)
    const userDetails = useSelector(state => state.userInfo)

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
                        <div className="store-baner" style={{ backgroundImage: "url('images/app_intro_bg.png')" }}>
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
                            <h3 className='launch-h3'>App Store</h3>
                            <a title="nav_icon" href="true" className='d-flex align-items-center gap-2 '>
                                <img src="/images/man.png" alt="" />
                                <div className='text-white'>
                                    <p className='text-white mb-2'>Burhan Haroon</p>
                                    <p className='text-white mb-0'>Burhan Haroon</p>

                                </div>
                                <span><i className="fa fa-chevron-down" aria-hidden="true" style={{ color: "#fff;" }}></i></span>
                            </a>
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