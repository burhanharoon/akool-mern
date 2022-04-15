import React from 'react'

const HomeScreen = () => {
    return (

        <body>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href title="Home">
                        <img src="assets/images/logo.png" alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link page_link" href>Akool</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page_link" href>Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page_link" href>Akool</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page_link" href>Products</a>
                            </li>
                            <li>
                                <div class="gap"></div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href>Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav_btn one" href>Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav_btn two" href>Login</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <section id="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="text_section">
                                <h3>Commerce</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                    <span>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.

                                    </span>
                                </p>
                                <a href title="buy button">Start Building Today</a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image_section">
                                <div class="image text-center">
                                    <img src="assets/images/banner_content.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="go_to_bottom_icon">

                    <img src="assets/images/go_to_bottom.png" alt="" />
                </div>
            </section>

            <section id="use_case_section">
                <img src="assets/images/use_case_banenr.png" alt="" class="uae_banner_image" />
                <div class="container use_case_section_container">
                    <div class="row">
                        <div class="col-lg-6 m-auto">
                            <div class="heading_text text-center">
                                <h3>Use Case</h3>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 px-0 px-col-false col-md-6 mb-md-2">
                            <div class="use_case_card pb-38">
                                <div class="image_section">
                                    <img src="assets/images/use_case_card.png" alt="" />
                                </div>
                                <div class="text_section">
                                    <h3>3D Object
                                        Creation</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-md-2">
                            <div class="use_case_card">
                                <div class="image_section">
                                    <img src="assets/images/use_case_card.png" alt="" />
                                </div>
                                <div class="text_section single_text">
                                    <h3>Storage</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 px-0 px-col-false col-md-6 mb-md-2">
                            <div class="use_case_card pb-38">
                                <div class="image_section">
                                    <img src="assets/images/use_case_card.png" alt="" />
                                </div>
                                <div class="text_section">
                                    <h3>Content
                                        Manage</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-md-2">
                            <div class="use_case_card">
                                <div class="image_section">
                                    <img src="assets/images/use_case_card.png" alt="" />
                                </div>
                                <div class="text_section single_text">
                                    <h3>Deploy</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid use_case_section_container px-0">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="video_image_section">
                                <img src="assets/images/video_bg.png" alt="video bg" class="w-100" />
                                <div class="video_icon ">
                                    <div class="icon_inner">
                                        <a title="play" class="venobox" data-vbtype="iframe"
                                            href="https://www.youtube.com/watch?v=L_eyhzcFJ9Q">
                                            <i class="fa fa-play" aria-hidden="true" style={{ color: "black" }}></i>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="use_case_text_section">
                                <h3>Storage</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.

                                    <span>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.

                                    </span>
                                    <span class="last_span">
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum

                                    </span>
                                </p>

                                <a href title="explore">Explore</a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* feature part start  */}
            <section id="feature">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 m-auto">
                            <div class="heading_text text-center">
                                <h3>Features</h3>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="feature_cards">
                            <div class="feature_card d-flex align-items-start">
                                <div class="image_section">
                                    <img src="assets/images/feature_card_image.png" alt="feature" />
                                </div>
                                <div class="text_section">
                                    <h3>Feature 1</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                            <div class="feature_card d-flex align-items-start ml-22">
                                <div class="image_section">
                                    <img src="assets/images/feature_card_image.png" alt="feature" />
                                </div>
                                <div class="text_section">
                                    <h3>Feature 1</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                            <div class="feature_card d-flex align-items-start ml-22">
                                <div class="image_section">
                                    <img src="assets/images/feature_card_image.png" alt="feature" />
                                </div>
                                <div class="text_section">
                                    <h3>Feature 1</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            {/*  feature part end  */}

            {/* Top Selected Commerce Apps slider part start */}
            <section id="top_selected_apps_section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="heading_text_section">
                                <h3 class="mb-0">Top Selected Commerce Apps</h3>
                                <p class="mb-0">Akool video solutions enpower live video analytics from security camera, webcam,
                                    phone camera, et al. Hardware is optional.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="slider_section top_selected_apps_slider owl-carousel">
                                <div class="slider_card first_slider_card">
                                    <div class="top_section">
                                        <div class="image_section">
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
            </section>
            {/* Top Selected Commerce Apps slider part End  */}

            <section id="three_d_app_section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="heading_text_section">
                                <h3 class="mb-0">3D Commerce Apps</h3>
                                <p class="mb-0">Akool 3D & video solutions enpower you to create 3D videos and 3D objects with
                                    one click.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="slider_section top_selected_apps_slider owl-carousel">
                                <div class="slider_card">
                                    <div class="top_section">
                                        <div class="image_section">
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
            </section>

            {/* Commerce Assets Editing Apps start  */}
            <section id="assets_editing_apps">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="heading_text_section">
                                <h3 class="mb-0">3D Commerce Apps</h3>
                                <p class="mb-0">Akool 3D & video solutions enpower you to create 3D videos and 3D objects with
                                    one click.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="slider_section top_selected_apps_slider owl-carousel">
                                <div class="slider_card">
                                    <div class="top_section">
                                        <div class="image_section">
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
            </section>
            {/* Commerce Assets Editing Apps End  */}
            <section id="ai_apps">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="heading_text_section">
                                <h3 class="mb-0">3D Commerce Apps</h3>
                                <p class="mb-0">Akool 3D & video solutions enpower you to create 3D videos and 3D objects with
                                    one click.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="slider_section top_selected_apps_slider owl-carousel">
                                <div class="slider_card">
                                    <div class="top_section">
                                        <div class="image_section">
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
                                            <img src="assets/images/slider_image.png" alt="slider" />
                                        </div>
                                        <div class="heart_icon_section">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                    </div>
                                    <div class="bottom_section">
                                        <h3>Akool Marketplace</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.</p>
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
            </section>

            <section id="customer_stories_section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 m-auto">
                            <div class="heading_text text-center">
                                <h3>Customer Stories</h3>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-11 m-auto">
                            <div class="customer_stories_slider owl-carousel">
                                <div class="customer_stories_slider_card d-flex">
                                    <div class="image_section">
                                        <img src="assets/images/young-beautiful-woman-casual-outfit-isolated-studio.png"
                                            alt="lady pic" />
                                    </div>
                                    <div class="text_section">
                                        <h3 class="mb-0">Jane Johnson</h3>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.
                                            <span class="d-block">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                                id est laborum.
                                            </span>
                                        </p>
                                        <h5 class="mb-0">August 5th, 2021</h5>
                                    </div>
                                </div>
                                <div class="customer_stories_slider_card d-flex">
                                    <div class="image_section">
                                        <img src="assets/images/young-beautiful-woman-casual-outfit-isolated-studio.png"
                                            alt="lady pic" />
                                    </div>
                                    <div class="text_section">
                                        <h3 class="mb-0">Jane Johnson</h3>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.
                                            <span class="d-block">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                                id est laborum.
                                            </span>
                                        </p>
                                        <h5 class="mb-0">August 5th, 2021</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer_content_section">
                                <div class="footer_logo">
                                    <a href>
                                        <img src="assets/images/footer_logo.png" alt="footer logo" />
                                    </a>
                                </div>
                                <div class="footer_nav_section">
                                    <div class="footer_page_links">
                                        <ul class="first_list">
                                            <li><a href>Products</a></li>
                                            <li><a href>Company</a></li>
                                            <li><a href>Privacy Policy</a></li>
                                        </ul>
                                        <ul class="last_list">
                                            <li><a href>Solution</a></li>
                                            <li><a href>Pricing</a></li>
                                            <li><a href>Terms of Services</a></li>
                                        </ul>
                                    </div>
                                    <div class="footer_register_btn">
                                        <a href>Register</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6"></div>
                    </div>
                </div>
            </section>

            <section class="copyright__social_links ">
                <div class="container">
                    <div class="row">
                        <div class="copyright_section_content">
                            <div class="social_links">
                                <ul>
                                    <li>
                                        <a href title="Facebook">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href title="Facebook">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href title="Facebook">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href title="Facebook">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="copyright_text">
                                <p>© 2021 by Akool Ltd. All rights reserved.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <script src="assets/js/jquery-3.2.1.min.js"></script>
            <script src="assets/js/bootstrap.bundle.min.js"></script>
            <script src="assets/js/Font-Awesome.js"></script>
            <script src="assets/js/venobox.min.js"></script>
            <script src="assets/js/owl.carousel.min.js"></script>
            <script src="assets/js/custom.js"></script>
        </body>

    )
}

export default HomeScreen