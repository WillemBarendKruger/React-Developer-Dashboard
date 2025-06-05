import "../utils/Usercard.css";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { SearchUser } from "../hooks/CallUser";
import { CountPage } from "../hooks/PageController";

type UserAccess = {
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
  search?: string;
  currentPage: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
};

export const UserCard = ({
  search,
  currentPage,
  setTotalPages,
}: UserCardProps) => {
  const [apiData, setApiData] = useState<UserAccess[] | null>(null);
  const [userData, setUserData] = useState<UserDetails[] | null>(null);

  SearchUser(search, setApiData);

  CountPage(apiData, currentPage, setTotalPages, setUserData);

  if (!userData)
    return (
      <div className="loader">
        <RingLoader color="#D8E9A8" />
      </div>
    );

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
          <button>
            <Link to={`/UserProfile/${user.login}`}>View More</Link>
          </button>
        </div>
      ))}
    </div>
  );
};
