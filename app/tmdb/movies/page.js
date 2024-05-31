import MovieList from "../components/MovieList";

export default async function MoviesDB() {
    const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`;

    const response = await fetch(`${API_URL}`); // Fetch data from API.
    const data = await response.json();
    const movies = data.results;

    return <MovieList movies={movies} /> // Pass the movies data to the MovieList component, in order to render the list of movies that we fetched from the API.
}



