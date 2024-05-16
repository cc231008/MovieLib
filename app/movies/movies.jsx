export default function Movies() {
    const getMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=191cc9b801df0a2851e72996f511f57d');
        const data = await response.json();
    }
    return (
        <div>
        <h1>Movies</h1>
        </div>
    );
}