import "../Assets/CSS/Rough.css"
import profileImg from "../Assets/Images/profile_gif.gif"

const Profile = () => {
    return (
        <>
            <div className="container">
                <img src={profileImg} className="gifImg" alt="profile image" />
                <h2>Profile - JAYMIN DARJI</h2>
                <p>Learning react from Akshay Saini sir 💥</p>
            </div>
        </>
    )
}

export default Profile