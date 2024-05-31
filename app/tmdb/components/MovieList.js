import Link from "next/link";

// MovieList component creates a list of movies.
export default function MovieList({ movies }) {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-11 pb-10">
            {movies.length > 0 ? (
                movies.map((movie) => ( // Map through the movies array and render each movie as a card.
                    <Link key={movie.id} href={`/tmdb/movies/${movie.id}`} className="card w-32 md:w-60 shadow-xl hover:bg-zinc-700">
                        <figure><img className="w-36 md:w-full md:h-auto" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} /></figure>
                        <div className="card-body p-3">
                            <h2 className="text-base md:card-title">{movie.title}</h2>
                            <p className="text-sm md:text-lg">Rating: {movie.vote_average}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <h2>No Movies found</h2>
            )}
        </div>
    );
}