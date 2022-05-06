import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import axios from 'axios';
import Tool from './Tool';


const RecognitionTools = () => {

    const usedItems = JSON.parse(localStorage.getItem('used'))
    const [recognitionTools, setRecognitionTools] = useState([])
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState([])
    const [search, setSearch] = useState('')

    const searchProduct = () => {
        emptyResults()
        recognitionTools.forEach(product => {
            if (product.title.toLowerCase().includes(search.toLowerCase().trim())) {
                setResult(result => [...result, product])
            }
        })
    }

    const emptyResults = () => setResult([])

    const getCreationTools = async () => {
        const { data } = await axios.get('/api/tools/recognition')
        setRecognitionTools(data)
        setLoading(false)
        setResult(data)
    }
    useEffect(() => {
        getCreationTools()
    }, [])

    useEffect(() => {
        searchProduct()
    }, [search])

    return (
        <div className="used-area">
            <div className="container">
                <div className="section-title">
                    <h3 className='launch-h3'>Recently Used</h3>
                </div>
                <div className="used-fl gap-3">
                    {
                        usedItems?.reverse().map(item =>
                            <div className="slider_card">
                                <div className="top_section">
                                    <div className="image_section">
                                        <img src={item.logo} alt="slider" />
                                    </div>
                                    <div className="heart_icon_section">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="bottom_section">
                                    <h3 className='launch-h3'>{item.title}</h3>
                                    <div className="rating_section d-flex align-items-baseline">
                                        <h5 className="mb-0">{item.rating}</h5>
                                        <div className="star_section">
                                            {Array(item.rating).fill(1).map(x => <span><i className="fa fa-star" aria-hidden="true"></i></span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="all_apps_part mt-5">
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
                            <input onChange={(e) => { setSearch(e.target.value) }} value={search} type="text" placeholder="Search" />
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
                                {/* <button type="submit" title="search"><i className="fa fa-search"
                                    aria-hidden="true"></i></button> */}
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
                            result.map(tool =>

                                <div key={tool._id} className="col-lg-4 col-md-6">
                                    <a href={tool.link} target="_blank" rel="noopener noreferrer">
                                        <Tool title={tool.title} description={tool.description} rating={tool.rating} logo={tool.logo} />
                                    </a>
                                </div>
                            )
                        }
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
    )
}

export default RecognitionTools