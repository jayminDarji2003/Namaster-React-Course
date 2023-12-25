// import "../Assets/CSS/Rough.css"
import errImg from "../Assets/Images/error.png"

const Error = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <img src={errImg} alt="Image" className="w-40 sm:w-52 md:w-72 lg:w-80 xl:w-96" />
                <h2 className="text-2xl font-bold">Something went wrong!</h2>
                <h3>Connection error!⛔</h3>
                <p>Please refresh your page.</p>
            </div>
        </>
    )
}

export default Error