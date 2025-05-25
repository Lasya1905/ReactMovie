import { useState, useEffect} from "react";
import { MovieContext } from "./MovieContextBase";

//context is a way to pass data through the component tree without having to pass props down manually at every level

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Load favorites from local storage when the component mounts
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            try {
                const parsedFavorites = JSON.parse(storedFavorites);
                setFavorites(parsedFavorites);
            } catch (error) {
                console.error("Error loading favorites:", error);
                localStorage.removeItem("favorites");
            }
        }
    }, []);

    // only runs when the favorites state changes
    useEffect(() => {
        // Save favorites to local storage whenever they change
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => { 
        setFavorites(prev => [...prev, movie]);
    } 

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }


    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>; 

}
