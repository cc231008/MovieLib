'use client'
import React, { useEffect } from 'react';
import { useState } from "react";
import Link from "next/link";
import { useAppContext } from '../../../../context/AppContext';
import { useRouter } from 'next/navigation'

export default function EditMovie({params}) {
    const router = useRouter()
    const [state, setState] = useAppContext();
    const [formData, setFormData] = useState({
        title: '',
        vote_average: '',
        release_date: '',
        runtime: '',
        poster_url: '',
        overview: '',
    });

    useEffect(() => {
        const movie = state?.movies?.find((movie) => `${movie.id}` === `${params.movie_id}`);
        if (!movie){
            router.push('/local/movies');
            return;
        }

        setFormData(movie);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const movies = state.movies || [];
        const movieIndex = movies.findIndex((movie) => `${movie.id}` === params.movie_id);
        const movie = movies[movieIndex];

        movies[movieIndex] = {...movie, ...formData};

        setState({...state, movies});

        router.push(`/local/movies/${params.movie_id}`);
    };

    return (
        <div >
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

            <div className="flex justify-center mt-15">
                <form className="flex bg-white flex-wrap w-[45rem] p-5 rounded content-stretch gap-5">
                    <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" name="title" value={formData.title} onChange={handleChange} />
                    <input type="text" placeholder="Vote Average" className="input input-bordered w-full max-w-xs" name="vote_average" value={formData.vote_average} onChange={handleChange} />
                    <input type="text" placeholder="Release Date" className="input input-bordered w-full max-w-xs" name="release_date" value={formData.release_date} onChange={handleChange} />
                    <input type="text" placeholder="Runtime" className="input input-bordered w-full max-w-xs" name="runtime" value={formData.runtime} onChange={handleChange} />
                    <textarea placeholder="Poster URL" className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="poster_url" value={formData.poster_url} onChange={handleChange}  ></textarea>
                    <textarea placeholder="Overview" className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="overview" value={formData.overview} onChange={handleChange} ></textarea>
                    <button className="btn btn-active m-auto" onClick={handleSubmit}>Edit Movie</button>
                </form>
            </div>

        </div>
    );
}