import { UserCard } from "../components/UserCard";
import { RiUserSearchFill } from "react-icons/ri";
import { useDebounce } from "use-debounce";
import "../utils/Home.css";
import { useState } from "react";
import { PageIndicator } from "../components/PageIndicator";

export const Home = () => {
  const [searchDev, setSearchDev] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedSearch] = useDebounce(searchDev, 500);
  const [totalPages, setTotalPages] = useState(1);

  const onSearch = (value: string): void => {
    setSearchDev(value);
    setCurrentPage(1);
  };

  return (
    <div className="">
      <header className="headerBar">
        <div className="search">
          <input
            type="text"
            placeholder="Search Developer..."
            onChange={(event) => onSearch(event.target.value)}
          />
          <button>
            <RiUserSearchFill />
          </button>
        </div>
        <nav className="navBtns">
          <PageIndicator
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </nav>
      </header>
      <UserCard
        search={debouncedSearch}
        currentPage={currentPage}
        setTotalPages={setTotalPages}
      />
    </div>
  );
};
