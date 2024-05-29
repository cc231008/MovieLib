'use client';
import React, { useEffect } from 'react';
import { useState } from "react";
import Link from "next/link";
import {useAppContext} from "./context/AppContext";

export default function MoviesDB() {
    const [movies, setMovies] = useState([]);
    const [state, setState] = useAppContext();
    const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=191cc9b801df0a2851e72996f511f57d';
    const getMovies = async () => {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        getMovies();
        setState({ ...state, newValue: 'New Data' });
        console.log(state);
    }, []);

    return (
        <div>
            <header className="flex flex-row justify-between p-6">
                <h1 className="text-2xl md:text-4xl mt-2 md:mt-0">MovieLib</h1>
                <Link href="search" title="Search" className="input input-bordered flex items-center gap-2 bg-teal-950 hover:bg-zinc-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </Link>
            </header>

            <div className="flex flex-row flex-wrap justify-center gap-11">
                {movies.map((movie) => (
                        <Link href={`details/${movie.id}`} className="card w-32 md:w-60 shadow-xl hover:bg-zinc-700">
                            <figure><img className="w-36 md:w-full md:h-auto" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} /></figure>
                            <div className="card-body p-3">
                                <h2 className="text-base md:card-title">{movie.title}</h2>
                                <p className="text-sm md:text-lg">Rating: {movie.vote_average}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}