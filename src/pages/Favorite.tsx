import "../utils/Favorites.css";
import { useEffect, useState } from "react";

export const Favorite = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    setFavorites(stored ? JSON.parse(stored) : []);
  }, []);

  return (
    <div>
      <header>
        Favorites <a href="/">X</a>
      </header>
      <div>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <ul>
            {favorites.map((login) => (
              <li key={login}>{login}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};