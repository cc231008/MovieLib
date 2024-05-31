'use client'
import React, { useEffect } from 'react';
import { useState } from "react";
import Link from "next/link";
import { useAppContext } from '../../context/AppContext';
import { useRouter } from 'next/navigation'

export default function MoviesDB() {
    const router = useRouter()
    const [state, setState] = useAppContext();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Or a loading spinner
    }

    function onHandleDelete(movieId, e) {
        e.stopPropagation();
        e.preventDefault();
        const newMovies = state?.movies?.filter((movie) => movie.id !== movieId)
        setState({...state, movies: newMovies});
    }

    function onHandleEdit(movieId, e) {
        e.stopPropagation();
        e.preventDefault();
        router.push(`/local/movies/edit/${movieId}`);
    }

    return (
        <div>
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

            <div className="flex flex-row flex-wrap justify-between gap-5 px-5 pb-5">
                {
                    state?.movies?.length > 0 ? (
                            state.movies.map((movie) => (
                                <Link href={`/local/movies/${movie.id}`} className="card w-96 bg-base-100 shadow-xl hover:bg-zinc-700">
                                    <figure><img className="w-52 m-auto mt-4" src={movie.poster_url} alt={movie.title} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{movie.title}</h2>
                                        <button className="btn mt-auto btn-error" onClick={(e) => onHandleDelete(movie.id, e)}>Delete</button>
                                        <button className="btn btn-info" onClick={(e) => onHandleEdit(movie.id, e)}>Edit</button>
                                    </div>
                                </Link>
                            ))

                    ) : (
                        <h2>No Movies Yet</h2>
                    )
                }
                <div className="w-96"></div>
            </div>
        </div>
    );
}