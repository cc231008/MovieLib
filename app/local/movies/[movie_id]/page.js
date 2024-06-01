'use client';
import React from "react";
import {useEffect} from "react";
import { useState } from "react";
import {useAppContext} from "../../context/AppContext";
export default function Card({params}) {
    const [movieDetails, setMovieDetails] = useState({});
    const [state] = useAppContext();

    // This gets specific movie from a movie list based on id
    const getMovieDetails = () => {
        const movie = state?.movies?.find((movie) => `${movie.id}` === `${params.movie_id}`);
        setMovieDetails(movie);
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return (
        <div className="flex flex-col p-5">
            <h1 className="flex justify-center text-2xl md:text-3xl mb-10">Movie Details</h1>
            <div>
                {movieDetails && (
                    <div className="flex md:flex-row flex-col">
                        <img className="w-full md:w-96" src={movieDetails["poster_url"]} alt="movie poster" />
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
