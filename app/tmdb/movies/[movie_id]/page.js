export default async function Card({params}) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.movie_id}?language=en-US&api_key=${process.env.API_KEY}`);
    const movieDetails = await response.json();

    return (
        <div>
            <h1 className="flex justify-center text-2xl md:text-3xl">Movie Details</h1>
            <div>
                {movieDetails && (
                    <div className="flex md:flex-row flex-col">
                        <img src={`https://image.tmdb.org/t/p/w400${movieDetails["poster_path"]}`} alt="movie poster" />
                        <div className="flex flex-col p-5 gap-y-5 text-xl">
                            <h2>{movieDetails["title"]}</h2>
                            <p>Rating: {movieDetails["vote_average"]}</p>
                            <p>Release Date: {movieDetails["release_date"]}</p>
                            <p>Runtime: {movieDetails["runtime"]} minutes</p>
                            <p>{movieDetails["overview"]}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
