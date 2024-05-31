import Link from "next/link";
import MovieList from "../../components/MovieList";

export default async function searchPage(params) {
    const { searchParams: { s: searchTerm = '' } } = params;
    const API_URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=`; // URL for searching movies.

    const response = await fetch(`${API_URL_SEARCH}${searchTerm}`);
    const data = await response.json();
    const movies = data.results;

    return <MovieList movies={movies} /> // Return the MovieList component with the movies array as a prop.
}