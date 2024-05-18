'use client';
import React, { useEffect } from 'react';
import { useState } from "react";

export default function MoviesDB() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const API_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=191cc9b801df0a2851e72996f511f57d&query='
    const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=191cc9b801df0a2851e72996f511f57d';
    const getMovies = async () => {
        if (!search) return;
        const response = await fetch(`${API_URL_SEARCH}${search}`);
        const data = await response.json();
        setMovies(data.results);
    }
    useEffect(() => {
        getMovies();
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
            <header className="flex flex-row justify-between p-6">
            <h1>MovieLib</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </header>

            <div className="flex flex-row flex-wrap justify-between gap-5">
                {movies.length > 0 ? (
                        movies.map((movie) => (
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{movie.title}</h2>
                                    <div className="card-actions justify-end">
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h2>No Movies found</h2>
                )}
            </div>
        </div>
    );
}