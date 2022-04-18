import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../Components/Carousel'


const AppsScreen = () => {
    return (
        <>
            <section className="banner_two launch_banner_two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="apps-banner_text text-center">
                                <h3 className='launch-h3'>Build With Akool</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/*  Recommended Apps slider part start  */}
            <section id="main_body">
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
                                <Carousel />
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
                                <div className="category__button d-flex w-100 gap-3 gap-sm-5 align-items-center justify-content-end justify-content-sm-center">
                                    <select name="" id="" className='border-0'>
                                        <option value="">Popular</option>
                                    </select>
                                    <button type="submit" className='m-0' title="search"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <Link to={'/apps/1'}>
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
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                                </Link>
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
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                                <Link to={'/apps/1'}>
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
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                                </Link>
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
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
                            <div className="see_more_btn text-center">
                                <a href="true" className="view_more_slider_card">View More <img src="/images/slider_right_arrow.png" alt="alider arrow" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recommended Apps slider part end  */}
            <section className="last_part d-flex">
                <div className="image_section">
                    <img src="/images/lunch_last.png" alt="lunch" className="img-fluid w-100 h-100" />
                </div>
                <div className="last_text_part">
                    <h3 className='launch-h3'>Build With Akool</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. </p>
                    <div className="buttons d-flex">
                        <a href="true">Register</a>
                        <a href="true">Login</a>
                    </div>
                </div>
            </section>

            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer_content_section">
                                <div className="footer_logo">
                                    <a href="true">
                                        <img src="/images/footer_logo.png" alt="footer logo" />
                                    </a>
                                </div>
                                <div className="footer_nav_section">
                                    <div className="footer_page_links">
                                        <ul className="first_list">
                                            <li><a href="true">Products</a></li>
                                            <li><a href="true">Company</a></li>
                                            <li><a href="true">Privacy Policy</a></li>
                                        </ul>
                                        <ul className="last_list">
                                            <li><a href="true">Solution</a></li>
                                            <li><a href="true">Pricing</a></li>
                                            <li><a href="true">Terms of Services</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer_register_btn">
                                        <a href="true">Register</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </section>

            <section className="copyright__social_links ">
                <div className="container">
                    <div className="row">
                        <div className="copyright_section_content">
                            <div className="social_links">
                                <ul>
                                    <li>
                                        <a href="true" title="Facebook">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="true" title="Facebook">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="true" title="Facebook">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="true" title="Facebook">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright_text">
                                <p>© 2021 by Akool Ltd. All rights reserved.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AppsScreen