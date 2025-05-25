import '../css/Favorites.css';
import  useMovieContext  from '../contexts/useMovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const { favorites } = useMovieContext();

    if(favorites){
        return (
            <div className='favorites'>
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {/* map() iterates over the array and passes each element to the function */}
                    {/* and then returns a new array with the results (jsx code) */}

                    {favorites.map(movie => 
                    (<MovieCard movie={movie} key={movie.id}/>))}
                </div>
            </div>
        )
    }

    return <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
}

export default Favorites;

