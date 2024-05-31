'use client';
import React from "react";
import {useEffect} from "react";
import { useState } from "react";
import Link from "next/link";
import {useAppContext} from "../../../context/AppContext";
import { useRouter } from 'next/navigation'
export default function Card({params}: {
    params: {
        movie_id: string
    }
}) {
    const router = useRouter()
    const [movieDetails, setMovieDetails] = useState({});
    const [state, setState] = useAppContext();
    const getMovieDetails = () => {
        const movie = state?.movies?.find((movie) => `${movie.id}` === `${params.movie_id}`);
        console.log(movie);
        setMovieDetails(movie);
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return (
        <div className="flex flex-col p-5">

            <header className="flex flex-row justify-between p-6">
                <div className="flex gap-10">
                    <Link title="Home Page" href={"/local/movies"}>
                        <h1>MovieLib</h1>
                    </Link>
                    <button className="btn btn-outline btn-primary" onClick={()=>router.push('/tmdb/movies/')}>Switch to TMDB server</button>
                    <button onClick={()=>router.push('/local/movies/create')} className="btn btn-outline">Create New Movie</button>
                </div>
                <Link href="/local/movies/search" title="Search" className="input input-bordered flex items-center gap-2 bg-teal-950 hover:bg-zinc-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </Link>
            </header>

            <div>
            <h1 className="flex justify-center">Movie Details</h1>
            </div>


            <div>
                {movieDetails && (
                    <div className="flex flex-row">
                        <img className="w-96" src={movieDetails["poster_url"]} alt="movie poster" />
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
