import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { appData } from '../appData'
import Carousel from '../Components/Carousel'

const AppIntroScreen = () => {
    const { title } = useParams()
    const [product, setProduct] = useState({
        title: "3D Modelling",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor viverra sollicitudin. Pellentesque velit tellus, cursus at scelerisque nec, elementum at diam.",
        logo: "/images/creation/3D Modelling/logo.png",
        rating: 5,
        downloadLink: '/',
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor viverra sollicitudin. Pellentesque velit tellus, cursus at scelerisque nec, elementum at diam",
        goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor viverra sollicitudin. Pellentesque velit tellus, cursus at scelerisque nec, elementum at diam",
        testimonials: [
            {
                image: '/images/app_intro_content.png',
                name: 'Sterling Lambert',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor viverra sollicitudin. Pellentesque velit tellus, cursus at scelerisque nec, elementum at diam",
                date: Date.now(),
                rating: 4,
            },
            {
                image: '/images/app_intro_content.png',
                name: 'Sterling Lambert',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor viverra sollicitudin. Pellentesque velit tellus, cursus at scelerisque nec, elementum at diam",
                date: Date.now(),
                rating: 4,
            }
        ],
        faq: [
            {
                question: 'What is this app?',
                answer: " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
            },
            {
                question: 'What is this app?',
                answer: " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
            }
        ]
    })
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        const { data } = await axios.post(`/api/tools/find/${title}`)
        setLoading(false)
        setProduct(data)
        console.log(data);
    }
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     // getProducts()
    // }, [])

    return (
        <>
            <section className="banner_two">
                <div className="container banner_container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="banner_text">
                                <h3 className='app-intro-h3'>{product.title}</h3>
                                <p>{product.description}</p>
                                <div className="rating_section d-flex align-items-baseline">

                                    <div className="star_section">
                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                    </div>
                                    <h5 className="mb-0">5.0</h5>
                                </div>
                            </div>

                        </div>

                        <div className="banner_content_image">
                            <img src={product.logo} alt=" app intro" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="app_about_section">
                <div className="container">
                    <div className="row">
                        <div className="download_btn m-auto text-center">
                            <a href={product.downloadLink} title="download">Download an App</a>
                        </div>
                    </div>

                </div>

                <div className="app_intro_custom_container">
                    <div className="row">
                        <div className="app_about_bottom_section d-flex align-items-center justify-content-between">
                            <div className="about_text_part">
                                <h3 className='app-intro-h3'>About the App</h3>
                                <p>{product.about}</p>
                            </div>
                            <div className="about_image_part">
                                <img src="/images/app_intro_about.png" alt="about" className="img-fluid" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="about_section_two">
                <div className="app_intro_custom_container_two">
                    <div className="row">
                        <div className="row">
                            <div className="app_about_bottom_section d-flex align-items-center justify-content-between">
                                <div className="about_image_part">
                                    <img src="/images/about_section_two.png" alt="about" className="img-fluid" />
                                </div>
                                <div className="about_text_part">
                                    <h3 className='app-intro-h3'>What's our main goal?</h3>
                                    <p>{product.goal}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testmonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="heading_text text-center">
                                <h3 className='app-intro-h3'>Testimonials</h3>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Carousel />
                        </div>
                    </div>
                </div>

            </section>

            <section id="faq_section">

                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="heading_text text-center">
                                <h3 className='app-intro-h3'>FAQs</h3>
                            </div>

                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button bg-white" type="button">
                                            <p className="mb-0">Question 1</p>
                                            <span>
                                                {faq.faq1 ? <i className="fa fa-minus faq_minus" aria-hidden="true"></i> :
                                                    <i className="fa fa-plus faq_plus" aria-hidden="true"></i>}
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className={faq.faq1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button bg-white" type="button">
                                            <p className="mb-0">Question 2</p>
                                            <span>
                                                {faq.faq2 ? <i className="fa fa-minus faq_minus" aria-hidden="true"></i> :
                                                    <i className="fa fa-plus faq_plus" aria-hidden="true"></i>}
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className={faq.faq2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button bg-white" type="button">
                                            <p className="mb-0">Question 3</p>
                                            <span>
                                                {faq.faq3 ? <i className="fa fa-minus faq_minus" aria-hidden="true"></i> :
                                                    <i className="fa fa-plus faq_plus" aria-hidden="true"></i>}
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className={faq.faq3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> */}
                </div>
            </section>



            <section className="app_intro_feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="heading_text text-center">
                                <h3 className='app-intro-h3'>Why Akool Marketplace</h3>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- <div className="row">
                <div className="col-lg-4">
                    <div className="feature_card d-flex align-items-start">
                        <div className="image_section">
                            <img src="/images/feature_card_image.png" alt="feature">
                        </div>
                        <div className="text_section">
                            <h3 className='app-intro-h3'>Feature 1</h3>
                            <p>Lorem ipsum dolor sit amet<br>, consectetur adipiscing elit, sed do<br> eiusmod tempor incididunt ut labore et<br> dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="feature_card d-flex align-items-start">
                        <div className="image_section">
                            <img src="/images/feature_card_image.png" alt="feature">
                        </div>
                        <div className="text_section">
                            <h3 className='app-intro-h3'>Feature 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="feature_card d-flex align-items-start">
                        <div className="image_section">
                            <img src="/images/feature_card_image.png" alt="feature">
                        </div>
                        <div className="text_section">
                            <h3 className='app-intro-h3'>Feature 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
            </div> --> */}


                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="feature_cards">
                            <div className="feature_card d-flex align-items-start">
                                <div className="image_section">
                                    <img src="/images/app_intro_feature.png" alt="feature" />
                                </div>
                                <div className="text_section">
                                    <h3 className='app-intro-h3'>Feature 1</h3>
                                    <p>Utilize deep learning to fully automate content Mi quis hendrerit dolor magna. </p>
                                </div>
                            </div>
                            <div className="feature_card d-flex align-items-start ml-22">
                                <div className="image_section">
                                    <img src="/images/app_intro_feature.png" alt="feature" />
                                </div>
                                <div className="text_section">
                                    <h3 className='app-intro-h3'>Feature 1</h3>
                                    <p>Utilize deep learning to fully automate content Mi quis hendrerit dolor magna. </p>
                                </div>
                            </div>
                            <div className="feature_card d-flex align-items-start ml-22">
                                <div className="image_section">
                                    <img src="/images/app_intro_feature.png" alt="feature" />
                                </div>
                                <div className="text_section">
                                    <h3 className='app-intro-h3'>Feature 1</h3>
                                    <p>Utilize deep learning to fully automate content Mi quis hendrerit dolor magna. </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section id="cta_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="heading_text text-center">
                                <h3 className='app-intro-h3'>CTA Section</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <a href="true">Download an App</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cta_top_shape">

                </div>
            </section>
        </>
    )
}

export default AppIntroScreen