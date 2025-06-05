import axios from "axios";
import { useEffect } from "react";

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

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

const token: string = import.meta.env.VITE_TOKEN || "";
const axiosConfig = {
    headers: {
        Authorization: `token ${token}`,
    },
};

export const RepoController = (user: UserDetails, setRepos: React.Dispatch<React.SetStateAction<Repo[] | null>>) => {
    useEffect(() => {
        if (user) {
            console.log(user);
            axios
                .get(`https://api.github.com/users/${user.login}/repos`, axiosConfig)
                .then((res) => setRepos(res.data));
        }
    }, []);
}