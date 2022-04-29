import React from 'react'

const Tool = ({ title, logo, description, rating }) => {
    return (

        <div className="col-lg-4 col-md-6">
            <div className="slider_card">
                <div className="top_section">
                    <div className="image_section">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="heart_icon_section">
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
                <div className="bottom_section">
                    <h3 className='launch-h3'>{title}</h3>
                    <p>{description}</p>
                    <div className="rating_section d-flex align-items-baseline">
                        <h5 className="mb-0">5.0</h5>
                        <div className="star_section">
                            {Array(rating).fill(1).map(x => <span><i className="fa fa-star" aria-hidden="true"></i></span>)}
                        </div>
                    </div>
                </div>

            </div>
        </div>)

}

export default Tool