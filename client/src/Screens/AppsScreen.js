import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../Components/Carousel'
import Tool from '../Components/Tool'
import { Spinner } from 'react-bootstrap'
import TopApps from '../Components/TopApps'
import Helmet from 'react-helmet'

const AppsScreen = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState([])
    const [search, setSearch] = useState('')

    const searchProduct = () => {
        emptyResults()
        products.forEach(product => {
            if (product.title.toLowerCase().includes(search.toLowerCase().trim())) {
                setResult(result => [...result, product])
            }
        })
    }
    const emptyResults = () => setResult([])


    const getProducts = async () => {
        const { data } = await axios.get('/api/tools/creation')
        setLoading(false)
        setProducts(data)
        setResult(data)
    }
    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        searchProduct()
    }, [search])

    return (
        <>
            <Helmet>
                <title>Products</title>
            </Helmet>
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
                                {/* <TopApps /> */}
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
                                <input onChange={(e) => { setSearch(e.target.value) }} value={search} type="text" placeholder="Search" />                                <div className="category__button d-flex w-100 gap-3 gap-sm-5 align-items-center justify-content-end justify-content-sm-center">
                                    <select name="" id="" className='border-0'>
                                        <option value="">Popular</option>
                                    </select>
                                    {/* <button type="submit" className='m-0' title="search"><i className="fa fa-search" aria-hidden="true"></i></button> */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {loading ?
                                <div className='w-full d-flex justify-content-center'>
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </div>
                                :
                                result.map(item =>
                                    <div key={item._id} className="col-lg-4 col-md-6">
                                        <Tool title={item.title} logo={item.logo} description={item.description} rating={item.rating} link={item.title} maintainHistory={false} />
                                    </div>
                                )
                            }
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
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
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
                                        <Link to='/register'>Register</Link>
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