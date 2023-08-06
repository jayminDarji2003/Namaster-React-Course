import React from 'react'

// Config Driven UI

const burgerKing = {
    name: "Burger King",
    imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cusines: ["Burger", "American"],
    rating: "4.5"
}


function Card() {
    return (
        <div className="card">
            <img src={burgerKing.imgUrl} alt="Image" />
            <h3>{burgerKing.name}</h3>
            <p>{burgerKing.cusines.join(", ")}</p>
            <p><span className="rating">{burgerKing.rating}</span> starts</p>
        </div>
    )
}

export default Card


