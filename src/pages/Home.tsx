import { UserCard } from "../components/UserCard"

export const Home = () => {
    return(
        <div>
            {/* Header with searchbar & navigation controls */}
            <header>
                <div>
                    <input type="text" />
                <button>search</button>
                </div>
                <nav>
                    <button>back</button>
                    <button>forward</button>
                </nav>
            </header>

            {/* User cards */}
            <UserCard />
        </div>
    )
}