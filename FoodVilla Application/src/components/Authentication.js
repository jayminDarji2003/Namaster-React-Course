import "../Assets/CSS/Rough.css"
import img from "../Assets/Images/login_gif.gif"

const Authentication = () => {
    return (
        <>
            <div className="container">
                <img className="gifImg" src={img} alt="Log in image" />
                <h2>Authentication Require.</h2>
                <p>You are now LogedIn ❤️</p>
            </div>
        </>
    )
}

export default Authentication