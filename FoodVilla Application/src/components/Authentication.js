// import "../Assets/CSS/Rough.css"
import img from "../Assets/Images/login_gif.gif"

const Authentication = () => {
    return (
        <>
            <div className="Outercontainer flex flex-col justify-center items-center">
                <img className="w-40 sm:w-52 md:w-72 lg:w-80 xl:w-96" src={img} alt="Log in image" />
                <h2 className="text-xl text-blue-500 font-bold">Authentication Require.</h2>
                <p>You are now LogedIn ❤️</p>
            </div>
        </>
    )
}

export default Authentication