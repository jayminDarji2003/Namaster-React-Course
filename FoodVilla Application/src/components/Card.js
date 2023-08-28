import React from 'react'

function Card({ cloudinaryImageId, name, cuisines, avgRating }) {
    console.log()
    return (
        <div className="resCard">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Image" />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p><span className="rating">{avgRating}</span> starts</p>
        </div>
    )
}
    
export default Card


