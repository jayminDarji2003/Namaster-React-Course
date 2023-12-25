import "../Assets/CSS/RestaurantMenu.css"
import loader from "../Assets/Images/loader_gif.gif"

const Loader = () => {
    return (
        <div className="loaderContainer">
            <img className="menuLoader" src={loader} alt="loader image" />
        </div>
    )
}

export default Loader;