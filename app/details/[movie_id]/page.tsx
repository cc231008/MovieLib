'use client';
import React from "react";
import {useEffect} from "react";
import { useState } from "react";
import Link from "next/link";
export default function Card({params}: {
    params: {
        movie_id: string
    }
}) {
    const [movieDetails, setMovieDetails] = useState();
    const getMovieDetails = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.movie_id}?language=en-US&api_key=191cc9b801df0a2851e72996f511f57d`);
        const data = await response.json();
        setMovieDetails(data);
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return (
        <div className="flex flex-col p-5">

            <Link href={"/"}>
            <h1>MovieLib</h1>
            </Link>
                <div>
                <h1 className="flex justify-center">Movie Details</h1>
                </div>


            <div>
                {movieDetails && (
                    <div className="flex flex-row">
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
