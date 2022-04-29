import React from 'react'

const Tool = ({ key, title, logo, description, rating, link }) => {

    const addToUsed = () => {
        const items =
        {
            title,
            logo,
            description,
            rating,
            link
        }
        if (localStorage.getItem('used')) {
            let usedItems = JSON.parse(localStorage.getItem('used'))
            usedItems.push(items)
            localStorage.setItem('used', JSON.stringify(usedItems))
        } else {
            localStorage.setItem('used', JSON.stringify([items]))
        }
    }

    return (
        <div className="col-lg-4 col-md-6">
            <a _target href={link ? link : ''} onClick={addToUsed}>
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
            </a>
        </div>
    )

}

export default Tool