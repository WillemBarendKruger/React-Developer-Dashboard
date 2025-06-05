import { UserCard } from "../components/UserCard";
import { RiUserSearchFill } from "react-icons/ri";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useDebounce } from "use-debounce";
import "../utils/Home.css";
import { useState } from "react";

export const Home = () => {
    const [searchDev, setSearchDev] = useState("");
    useDebounce(searchDev, 500);

    const onSearch = (value:string): void => {
        setSearchDev(value);
    }

    return(
        <div className="">
            {/* Header with searchbar & navigation controls */}
            <header className="headerBar">
                <div className="search">
                    <input type="text" placeholder="Search Developer..." onChange={(event) => onSearch(event.target.value)}/>
                    <button><RiUserSearchFill /></button>
                </div>
                <nav className="navBtns">
                    <button><MdNavigateBefore /></button>
                    <button><MdNavigateNext /></button>
                </nav>
            </header>

            {/* User cards */}
            <UserCard search={searchDev}/>
        </div>
    )
}