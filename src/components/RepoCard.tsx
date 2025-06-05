import "../utils/RepoCard.css";
import { useState } from "react";
import { RepoController } from "../hooks/RepoController";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
};

export const RepoCard = ({ user }: any) => {
  const [repos, setRepos] = useState<Repo[] | null>(null);

  RepoController(user, setRepos);

  return repos?.map((repo: Repo) => {
    return (
      <div className="repo-card" key={repo.id}>
        <h2>{repo.name}</h2>
        <p>{repo.description ?? "Repo has no description"}</p>
        <a href={repo.html_url}>View More</a>
      </div>
    );
  });
};
