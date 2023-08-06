import React from 'react'


const burgerKing = {
    name : "Burger King",
    imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",

}

function Card() {
    return (
        <div className="card">
            <img src={burgerKing.imgUrl} alt="Image" />
            <h3>{burgerKing.name}</h3>
            <p>Burgers, American</p>
            <p>4.5 Stars</p>
        </div>
    )
}

export default Card
