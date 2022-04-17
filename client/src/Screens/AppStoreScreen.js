import React from 'react'

const AppStoreScreen = () => {
    return (
        <>

            <div class="dash-area">
                <div class="dash-fl">
                    <div class="dash-left">
                        <div class="dash-logo">
                            <a title="footer logo" href="true"><img src="/images/footer_logo.png" alt="footer logo" /></a>
                        </div>
                        <div class="dash-menu">
                            <ul>
                                <li class="acctive"><a href="true"><img src="/images/application.png" alt="" /> Apps</a></li>
                                <li><a href="true"><img src="/images/application.png" alt="" /> Apps</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="dash-right">
                        <div class="store-baner" style={{ backgroundImage: "url('images/app_intro_bg.png')" }}>
                            <a title="nav_icon" class="dash-right-btn col-md-block" data-bs-toggle="offcanvas"
                                href="trueoffcanvasExample" role="button" aria-controls="offcanvasExample">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </a>
                            <div class="offcanvas offcanvas-start col-md-block" tabindex="-1" id="offcanvasExample"
                                aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">
                                    <div class="dash-logo">
                                        <a href="true"><img src="/images/footer_logo.png" alt="" /></a>
                                    </div>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">


                                    <div class="dash-menu">
                                        <ul>
                                            <li class="acctive"><a href="true"><img src="/images/application.png" alt="" />
                                                Apps</a></li>
                                            <li><a href="true"><img src="/images/application.png" alt="" /> Apps</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <h3>App Store</h3>
                            <a title="nav_icon" href="true">
                                <img src="/images/man.png" alt="" />
                                <span><i class="fa fa-chevron-down" aria-hidden="true" style={{ color: "#fff;" }}></i></span>
                            </a>
                        </div>
                        <div class="used-area">
                            <div class="container">
                                <div class="section-title">
                                    <h3>Used</h3>
                                </div>
                                <div class="used-fl">
                                    <div class="slider_card">
                                        <div class="top_section">
                                            <div class="image_section">
                                                <img src="/images/slider_image.png" alt="slider" />
                                            </div>
                                            <div class="heart_icon_section">
                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div class="bottom_section">
                                            <h3>Akool Marketplace</h3>
                                            <div class="rating_section d-flex align-items-baseline">
                                                <h5 class="mb-0">5.0</h5>
                                                <div class="star_section">
                                                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="slider_card">
                                        <div class="top_section">
                                            <div class="image_section">
                                                <img src="/images/slider_image.png" alt="slider" />
                                            </div>
                                            <div class="heart_icon_section">
                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div class="bottom_section">
                                            <h3>Akool Marketplace</h3>
                                            <div class="rating_section d-flex align-items-baseline">
                                                <h5 class="mb-0">5.0</h5>
                                                <div class="star_section">
                                                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="recommendtion_part">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="heading_text">
                                                <h3>Recommended Apps</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="slider_section top_selected_apps_slider owl-carousel">
                                                <div class="slider_card first_slider_card">
                                                    <div class="top_section">
                                                        <div class="image_section">
                                                            <img src="/images/slider_image.png" alt="slider" />
                                                        </div>
                                                        <div class="heart_icon_section">
                                                            <i class="fa fa-heart"></i>
                                                        </div>
                                                    </div>
                                                    <div class="bottom_section">
                                                        <h3>Akool Marketplace</h3>
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                            dolore eu fugiat.</p>
                                                        <div class="rating_section d-flex align-items-baseline">
                                                            <h5 class="mb-0">5.0</h5>
                                                            <div class="star_section">
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="slider_card first_slider_card">
                                                    <div class="top_section">
                                                        <div class="image_section">
                                                            <img src="/images/slider_image.png" alt="slider" />
                                                        </div>
                                                        <div class="heart_icon_section">
                                                            <i class="fa fa-heart"></i>
                                                        </div>
                                                    </div>
                                                    <div class="bottom_section">
                                                        <h3>Akool Marketplace</h3>
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                            dolore eu fugiat.</p>
                                                        <div class="rating_section d-flex align-items-baseline">
                                                            <h5 class="mb-0">5.0</h5>
                                                            <div class="star_section">
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="slider_card first_slider_card">
                                                    <div class="top_section">
                                                        <div class="image_section">
                                                            <img src="/images/slider_image.png" alt="slider" />
                                                        </div>
                                                        <div class="heart_icon_section">
                                                            <i class="fa fa-heart"></i>
                                                        </div>
                                                    </div>
                                                    <div class="bottom_section">
                                                        <h3>Akool Marketplace</h3>
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                            dolore eu fugiat.</p>
                                                        <div class="rating_section d-flex align-items-baseline">
                                                            <h5 class="mb-0">5.0</h5>
                                                            <div class="star_section">
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="slider_card first_slider_card">
                                                    <div class="top_section">
                                                        <div class="image_section">
                                                            <img src="/images/slider_image.png" alt="slider" />
                                                        </div>
                                                        <div class="heart_icon_section">
                                                            <i class="fa fa-heart"></i>
                                                        </div>
                                                    </div>
                                                    <div class="bottom_section">
                                                        <h3>Akool Marketplace</h3>
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                            dolore eu fugiat.</p>
                                                        <div class="rating_section d-flex align-items-baseline">
                                                            <h5 class="mb-0">5.0</h5>
                                                            <div class="star_section">
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="all_apps_part">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="heading_text">
                                                <h3>All Apps</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="all_apps_nav">
                                            <input type="text" placeholder="Search" />
                                            <div class="category__button">
                                                <ul class="category_parent">
                                                    <li>
                                                        <a href="true" class="category__child_button">Categories <i
                                                            class="fa fa-chevron-down" aria-hidden="true"></i></a>

                                                        <ul class="category_dropdown">
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
                                                <button type="submit" title="search"><i class="fa fa-search"
                                                    aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 view_more_row">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 view_more_row">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 view_more_row">
                                            <div class="slider_card">
                                                <div class="top_section">
                                                    <div class="image_section">
                                                        <img src="/images/slider_image.png" alt="slider" />
                                                    </div>
                                                    <div class="heart_icon_section">
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <h3>Akool Marketplace</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                        dolore eu fugiat.</p>
                                                    <div class="rating_section d-flex align-items-baseline">
                                                        <h5 class="mb-0">5.0</h5>
                                                        <div class="star_section">
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                            <span><i class="fa fa-star" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="see_more_btn">
                                            <a href="true" class="view_more_slider_card">View More <img
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