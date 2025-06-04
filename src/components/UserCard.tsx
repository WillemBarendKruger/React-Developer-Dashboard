import "../utils/Usercard.css";
import { CiHeart } from "react-icons/ci";

export const UserCard = () => {

    // Get user info from api


    return(
        <div className="card">

            <div className="header">
                <img className="avatar" src="" alt="Profile" />
                <div className="user-card-info">
                    <h1>UserName</h1>
                    <h2>Name</h2>
                    <h5>location</h5>
                    <span><p>Followers 0</p> <p>Following 0</p></span>
                </div>

                <div className="favoriteBtn">
                    <button type="button" className="favoriteUser"><CiHeart /></button>
                </div>
                
                
            </div>

            <p className="bio">Bio</p>

            <div>
                <h2>Repository Name</h2>
                <p>Description</p>
            </div>

            <button>View More</button>

        </div>
    )
}