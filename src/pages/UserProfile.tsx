import "../utils/UserProfile.css";
import { RepoCard } from "../components/RepoCard";

export const UserProfile = () => {
    return(
        <div className="user-profile">
            <header className="user-profile-header">
                <img src="" alt="avatar" />
                <div>
                    <h1>Username</h1>
                    <h3>Name</h3>
                </div>
               <a href="">X</a>
            </header>
             <div>
                <p className="personalBio">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam optio inventore eum, illum, harum molestias nihil quasi in atque animi rerum laudantium ducimus accusantium ut esse mollitia culpa commodi obcaecati eius soluta consectetur neque molestiae consequuntur totam. Perspiciatis iure necessitatibus perferendis rem nemo laboriosam cupiditate consectetur dicta similique unde? Nesciunt!</p>
                <div>
                    <RepoCard />
                    <RepoCard />
                </div>

            </div>
        </div>
    )
}