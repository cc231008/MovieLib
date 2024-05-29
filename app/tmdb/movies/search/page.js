'use client';
import React, {useEffect, useRef} from 'react';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

//
//As different pages have different API links, we need to create props in the MoviesDB component so that each page had its own API links.

export default function searchPage() {
    const router = useRouter()
    const inputRef = useRef(null);
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const API_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=191cc9b801df0a2851e72996f511f57d&query='
    const getMovie = async () => {
        if (!search) return;
        const response = await fetch(`${API_URL_SEARCH}${search}`);
        const data = await response.json();
        setMovies(data.results);
    }
    useEffect(() => {
        getMovie();
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter' && search !== '') {
            const response = await fetch(`${API_URL_SEARCH}${search}`);
            const data = await response.json();
            setMovies(data.results);
        }
    };

    return (
        <div>
            <header className="flex flex-row justify-between p-6 gap-x-5">
                <Link title="Home Page" href={"/"}>
                <h1 className="text-2xl md:text-4xl mt-2 md:mt-0">MovieLib</h1>
                </Link>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="text-sm w-20 md:w-48" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </header>

            <div className="flex flex-row flex-wrap justify-center gap-11">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Link href={`../movies/${movie.id}`} className="card w-32 md:w-60 shadow-xl hover:bg-zinc-700">
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
        </div>
    );
}