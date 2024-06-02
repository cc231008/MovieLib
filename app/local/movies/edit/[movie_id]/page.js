'use client'
import React, { useEffect } from 'react';
import { useState } from "react";
import { useAppContext } from '../../../context/AppContext';
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
        console.log(movie)
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

        // This is needed to find index of a movie inside a movies array based on id and then change data of a movie
        const movieIndex = movies.findIndex((movie) => `${movie.id}` === params.movie_id);
        const movie = movies[movieIndex];

        movies[movieIndex] = {...movie, ...formData};

        setState({...state, movies});

        router.push(`/local/movies/${params.movie_id}`);
    };

    return (
        <div className="flex justify-center mt-20">
            <form className="flex items-center flex-col md:flex-row md:content-stretch gap-5 bg-gray-700 flex-wrap w-[45rem] p-5 rounded-lg mx-5 mb-5">
                <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" name="title" value={formData.title} onChange={handleChange} />
                <input type="text" placeholder="Vote Average" className="input input-bordered w-full max-w-xs" name="vote_average" value={formData.vote_average} onChange={handleChange} />
                <input type="text" placeholder="Release Date" className="input input-bordered w-full max-w-xs" name="release_date" value={formData.release_date} onChange={handleChange} />
                <input type="text" placeholder="Runtime" className="input input-bordered w-full max-w-xs" name="runtime" value={formData.runtime} onChange={handleChange} />
                <textarea placeholder="Poster URL" className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="poster_url" value={formData.poster_url} onChange={handleChange}  ></textarea>
                <textarea placeholder="Overview" className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="overview" value={formData.overview} onChange={handleChange} ></textarea>
                <button className="btn btn-active m-auto" onClick={handleSubmit}>Edit Movie</button>
            </form>
        </div>
    );
}