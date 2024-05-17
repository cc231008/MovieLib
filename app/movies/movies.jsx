'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
export default function MoviesDB() {
    const [movies, setMovies] = useState([]);

    const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=191cc9b801df0a2851e72996f511f57d'

    const getMovies = async () => {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        setMovies(data.results);
    }
    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);

    return (
        <div>
            <div className="container">
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}