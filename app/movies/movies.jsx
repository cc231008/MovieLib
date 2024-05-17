'use client';
import React, { useEffect } from 'react';
export default function MoviesDB() {
    const getMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=191cc9b801df0a2851e72996f511f57d');
        const data = await response.json();
        console.log(data.results);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <h1>Movies</h1>
        </div>
    );
}