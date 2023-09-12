// import "../Assets/CSS/Rough.css"
import profileImg from "../Assets/Images/profile_gif.gif"

const Profile = () => {
    return (
        <>
            <div className="Outercontainer flex justify-center items-center flex-col">
                <img src={profileImg} className="w-40 sm:w-52 md:w-72 lg:w-80 xl:w-96" alt="profile image" />
                <h2 className="text-xl font-bold text-blue-500">Profile - JAYMIN DARJI</h2>
                <p className="">Learning react from Akshay Saini sir 💥</p>
            </div>
        </>
    )
}

export default Profile