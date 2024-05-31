import MovieList from "../components/MovieList";

export default async function MoviesDB() {
    const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`;

    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    const movies = data.results;

    return <MovieList movies={movies} />
}



