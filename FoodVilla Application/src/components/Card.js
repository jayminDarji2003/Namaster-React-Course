import React from 'react'

function Card({ imgUrl, name, cuisines, rating }) {
    return (
        <div className="card">
            <img src={imgUrl} alt="Image" />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p><span className="rating">{rating}</span> starts</p>
        </div>
    )
}

export default Card


