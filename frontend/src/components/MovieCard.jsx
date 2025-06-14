import '../css/MovieCard.css'; //importing the MovieCard.css file
//import {MovieContext} from '../contexts/MovieContext'; //importing the MovieContext from the MovieContext.js file
import useMovieContext from '../contexts/useMovieContext'; //importing the useMovieContext from the useMovieContext.js file

 function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavouriteClick(e) {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? 'active': ''}`} onClick={onFavouriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split('-')[0]}</p>
        </div>
    </div>
}

export default MovieCard;
//export this file so that we can use it in other files
//To use this component in another file, we need to import it
