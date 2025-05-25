import { useContext } from "react";
import { MovieContext } from "./MovieContextBase";

const useMovieContext = () => useContext(MovieContext);

export default useMovieContext;