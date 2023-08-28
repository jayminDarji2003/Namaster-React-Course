import "../Assets/CSS/Rough.css"
import cartImg from "../Assets/Images/cart_gif.gif"

const Cart = () => {
    return (
        <>
            <div className="Outercontainer">
                <img className="gifImg" src={cartImg} autoPlay loop />
                <h2>This is CART</h2>
                <p>No item added here 🎉</p>
            </div>
        </>
    )
}

export default Cart