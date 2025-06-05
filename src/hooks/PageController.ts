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

export const CountPage = (apiData: UserAccess[] | null, currentPage: number, setTotalPages: React.Dispatch<React.SetStateAction<number>>, setUserData: React.Dispatch<React.SetStateAction<UserDetails[] | null>>) => {
    const cards = 8;
    useEffect(() => {
        if (apiData) {
            setTotalPages(Math.ceil(apiData.length / cards));
            Promise.all(
                apiData
                    .slice((currentPage - 1) * cards, currentPage * cards)
                    .map((user) =>
                        axios
                            .get(`https://api.github.com/users/${user.login}`, axiosConfig)
                            .then((res) => res.data)
                    )
            ).then((users) => setUserData(users));
        }
    }, [apiData, currentPage]);
}