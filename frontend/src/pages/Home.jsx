import MovieCard from "../components/MovieCard";
import {useState, useEffect} from "react";
import '../css/Home.css'; //importing the Home.css file
import {searchMovies, getPopularMovies} from '../services/api'; //importing the searchMovies and getPopularMovies functions from the services/movies.js file

function Home() {
    // useState is a React hook that allows you to add state to functional components
    // It returns an array with two elements: the current state and a function to update it

    // searchQuery is the state variable that holds the current value of the search input
    // setSearchQuery is the function that updates the state variable

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]); 
    // state variable to hold the list of movies
    const [error, setError] = useState(null);
    // state variable to hold the error message
    const [loading, setLoading] = useState(true);
    // state variable to hold the loading state

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                // fetch the popular movies from the API
                // and set the movies state variable to the result
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch(err){
                // if there is an error, set the error state variable to the error message
                console.log(err);
                setError(err.message);
            }
            finally {
                // set the loading state variable to false
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, []); 
    // useEffect is a React hook that allows you to perform side effects in functional components
    // consists of two arguments: a function and an array
    // if the dependency array is empty, the function will only run once when the component mounts
    // if the dependency array contains variables, the function will run whenever those variables change



    const handleSearch = async (event) => {
        event.preventDefault(); 
        // Prevents the default form submission behavior -> does not refresh the page
        if(!searchQuery.trim()) return;
        if(loading) return;

        setLoading(true);
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null); // Clear any previous error
        } catch(err){
            console.log(err);
            setError('Failed to search movies...');
        }finally {
            setLoading(false);
        }
        setSearchQuery('');// Clear the search input
    }

    return( 
        <div className="home">

            <form action="" onSubmit={handleSearch} className="">
                <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>


            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">
                    Loading...
                </div>
            ) : (
                 <div className="movies-grid">
                {/* map() iterates over the array and passes each element to the function */}
                {/* and then returns a new array with the results (jsx code) */}

                {movies.map(movie => 
                (<MovieCard movie={movie} key={movie.id}/>))}
                </div>
            )}

           
        </div>
    )
}

export default Home;