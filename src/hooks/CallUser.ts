import axios from "axios";
import { useEffect } from "react";

type UserAccess = {
    login: string;
    id: number;
};

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

const token: string = import.meta.env.VITE_TOKEN || "";
const axiosConfig = {
    headers: {
        Authorization: `token ${token}`,
    },
};

export const FetchUser = async (username: string | undefined, setUser: React.Dispatch<React.SetStateAction<UserDetails | null>>) => {


    useEffect(() => {
        if (username) {
            console.log(username);
            axios
                .get(`https://api.github.com/users/${username}`, axiosConfig)
                .then((res) => setUser(res.data));
        }
    }, [username]);
};

export const FetchAllUsers = async (setApiData: React.Dispatch<React.SetStateAction<UserAccess[] | null>>) => {
    axios
        .get("https://api.github.com/users", axiosConfig)
        .then((response) => {
            setApiData(response.data);
        });
};

export const SearchUser = async (search: string | undefined, setApiData: React.Dispatch<React.SetStateAction<UserAccess[] | null>>) => {
    useEffect(() => {
        if (search && search.trim() !== "") {
            axios
                .get(`https://api.github.com/search/users?q=${search}`, axiosConfig)
                .then((response) => {
                    setApiData(response.data.items);
                });
        } else {
            FetchAllUsers(setApiData);
        }
    }, [search]);
};