import "../utils/Usercard.css";
import { CiHeart } from "react-icons/ci";
import { useState, useEffect } from "react";
import axios from "axios";

type UserSummary = {
    login: string;
    id: number;
};

type UserDetails = {
    id: number;
    login: string;
    name: string | null;
    location: string | null;
    avatar_url: string;
    followers: number;
    following: number;
    bio: string | null;
};

type UserCardProps = {
    user: UserSummary;
};

export const UserCard = ({ user }: UserCardProps) => {
    const [apiData, setApiData] = useState<UserSummary[] | null>(null);
    const [userData, setUserData] = useState<UserDetails[] | null>(null);

    useEffect(() => {
        axios.get("https://api.github.com/users").then((response) => {
            setApiData(response.data);
            console.log("Requesting API data...");
        });
    }, []);

    useEffect(() => {
        if (apiData) {
            console.log("API data received:");
            Promise.all(
                apiData.map((user) =>
                    axios.get(`https://api.github.com/users/${user.login}`).then((res) => res.data)
                )
            ).then((users) => setUserData(users));
        }
    }, [apiData]);

    if (!userData) return <div>Loading...</div>;

    return (
        <div className="user-card-container">
            {userData.map((user) => (
                <div className="card" key={user.id}>
                    <div className="header">
                        <img className="avatar" src={user.avatar_url} alt="Profile" />
                        <div className="user-card-info">
                            <h1>{user.login}</h1>
                            <h2>{user.name ?? "No Name Provided"}</h2>
                            <h5>{user.location ?? "No Location Provided"}</h5>
                            <span>
                                <p>Followers {user.followers}</p>
                                <p>Following {user.following}</p>
                            </span>
                        </div>
                        <div className="favoriteBtn">
                            <button type="button" className="favoriteUser">
                                <CiHeart />
                            </button>
                        </div>
                    </div>
                    <p className="bio">{user.bio ?? "No Bio Available"}</p>
                    <button>View More</button>
                </div>
            ))}
        </div>
    );
};
