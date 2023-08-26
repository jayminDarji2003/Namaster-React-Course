import "../Assets/CSS/Rough.css"
import errImg from "../Assets/Images/error.png"

const Error = () => {
    return (
        <>
            <div className="container errorBox">
                <img src={errImg} alt="Image" />
                <h2>Something went wrong!</h2>
                <h3>Connection error!⛔</h3>
                <p>Please refresh your page.</p>
            </div>
        </>
    )
}

export default Error