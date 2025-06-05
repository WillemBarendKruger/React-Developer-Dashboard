import "../utils/UserProfile.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { RepoCard } from "../components/RepoCard";
import { RingLoader } from "react-spinners";

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

export const UserProfile = () => {
    const { username } = useParams();
    const [user, setUser] = useState<UserDetails | null>(null);

    useEffect(() => {
        if (username) {
            console.log(username)
            axios.get(`https://api.github.com/users/${username}`)
                .then(res => setUser(res.data));
        }
    }, [username]);

    if (!user) return <div><RingLoader color="#D8E9A8" /></div>;
   
    return(
        <div className="user-profile">
            <header className="user-profile-header">
                <img src={user.avatar_url} alt="avatar" />
                <div>
                    <h1>{user.login}</h1>
                    <h3>{user.name}</h3>
                </div>
                <a href="/" type="button">X</a>
            </header>
            <p className="personalBio">{user.bio}</p>
            <div className="user-repo-container">
                <RepoCard  user={user} />
            </div>
        </div>
    )
}