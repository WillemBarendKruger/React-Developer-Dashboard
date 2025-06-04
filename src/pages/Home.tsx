import { UserCard } from "../components/UserCard";
import { RiUserSearchFill } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import "../utils/Home.css";

export const Home = () => {
    return(
        <div>
            {/* Header with searchbar & navigation controls */}
            <header className="headerBar">
                <div className="search">
                    <input type="text" placeholder="Search Developer..."/>
                    <button><RiUserSearchFill /></button>
                </div>
                <nav className="navBtns">
                    <button><MdNavigateBefore /></button>
                    <button><MdNavigateNext /></button>
                </nav>
            </header>

            {/* User cards */}
            <UserCard />
        </div>
    )
}