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
                <h1>MovieLib</h1>
                <Link href="search" title="Search" className="input input-bordered flex items-center gap-2 bg-teal-950 hover:bg-zinc-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </Link>
            </header>

            <div className="flex flex-row flex-wrap justify-between gap-5">
                {movies.map((movie) => (
                        <Link href={`details/${movie.id}`} className="card w-96 bg-base-100 shadow-xl hover:bg-zinc-700">
                            <figure><img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{movie.title}</h2>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}