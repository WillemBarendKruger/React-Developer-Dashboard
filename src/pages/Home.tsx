import { useState, useEffect } from "react";
import { UserCard } from "../components/UserCard";
import { RiUserSearchFill } from "react-icons/ri";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import axios from "axios";
import "../utils/Home.css";

export const Home = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const USERS_PER_PAGE = 6;

    useEffect(() => {
        axios.get("https://api.github.com/users?per_page=100")
            .then(res => setUsers(res.data));
    }, []);

    const startIdx = (page - 1) * USERS_PER_PAGE;
    const endIdx = startIdx + USERS_PER_PAGE;
    const paginatedUsers = users.slice(startIdx, endIdx);

    const handlePrev = () => setPage((p) => Math.max(1, p - 1));
    const handleNext = () => setPage((p) => (endIdx < users.length ? p + 1 : p));

    return (
        <div className="homePage">
            <header className="headerBar">
                <div className="search">
                    <input type="text" placeholder="Search Developer..." />
                    <button><RiUserSearchFill /></button>
                </div>
                <nav className="navBtns">
                    <button onClick={handlePrev} disabled={page === 1}>
                        <MdNavigateBefore />
                    </button>
                    <span>
                         Page {page} of {Math.ceil(users.length / USERS_PER_PAGE)}
                    </span>
                    <button onClick={handleNext} disabled={page >= Math.ceil(users.length / USERS_PER_PAGE)}>
                        <MdNavigateNext />
                    </button>
                </nav>
            </header>
            <div className="user-card-container">
                {paginatedUsers.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}