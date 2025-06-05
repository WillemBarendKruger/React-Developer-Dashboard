import "../utils/RepoCard.css"
import axios from "axios";
import { useEffect, useState } from "react";

export const RepoCard = ({user}: any) => {
    const [repos, setRepos] = useState<object[] | null>(null)

    const token: string = import.meta.env.VITE_TOKEN || "";
    const axiosConfig = {
        headers: {
            Authorization: `token ${token}`,
        },
    };

    useEffect(() => {
        if (user) {
            console.log(user)
            axios.get(`https://api.github.com/users/${user.login}/repos`, axiosConfig)
                .then(res => setRepos(res.data));
        }
    }, []);

    return(

        repos?.map(( repo: any) => {
            return(
                 <div className="repo-card" key={repo.id}>
                    <h2>{repo.name}</h2>
                    <p>{repo.description ? repo.description : "Repo has no description"}</p>
                    <a href={repo.html_url}>View More</a>
                </div>
            )
        })

       
    )
}