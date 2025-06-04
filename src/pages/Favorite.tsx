import { UserCard } from "../components/UserCard";
import "../utils/Favorites.css";

export const  Favorite = () => {
    return (
        <div>
            <header>Favorites <a href="">X</a></header>
            <div>
                <UserCard />
                <UserCard />
            </div>
        </div>
    )
}