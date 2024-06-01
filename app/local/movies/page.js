'use client'
import React, {useContext, useEffect} from 'react';
import { useState } from "react";
import Link from "next/link";
import { useAppContext } from '../context/AppContext';
import { useRouter } from 'next/navigation'
import { SearchContext } from '../context/SearchContext';

export default function MoviesDB() {
    const router = useRouter()
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const [state, setState] = useAppContext();
    const [movieList, setMovieList] = useState([]);

    // getMovies function is needed to get movies based on the current search term
    // When search term is empty we get the whole list of movies
    const getMovies = () => {
        let results = state?.movies;

        if (searchTerm) results = results.filter((movie) => movie.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

        setMovieList(results);
    }

    // This is needed to reset search term so that we get whole list of movies when we come to this page
    useEffect(() => {
        setSearchTerm('');
    }, [])

    useEffect(() => {
        getMovies();
    }, [state?.movies, searchTerm]);

    function onHandleDelete(movieId, e) {
        // This is needed so that our Link component doesn't get click event
        // Before doing this there was a problem where Link also got the click event and redirected to other page which was unintended behavior
        e.stopPropagation();
        e.preventDefault();

        const newMovieList = state?.movies?.filter((movie) => movie.id !== movieId) // We delete movie from a list by filtering it out based on id
        setState({...state, movies: newMovieList});
    }

    function onHandleEdit(movieId, e) {
        e.stopPropagation();
        e.preventDefault();
        router.push(`/local/movies/edit/${movieId}`); // This redirects to a page where user can edit selected movie
    }

    return (
        <div className="flex flex-row flex-wrap justify-evenly gap-10 px-5 pb-5">
            {
                movieList?.length > 0 ? (
                        movieList.map((movie) => (
                            <Link key={movie.id} href={`/local/movies/${movie.id}`} className="card w-96 bg-base-100 shadow-xl hover:bg-zinc-700">
                                <figure><img className="w-52 m-auto mt-4" src={movie.poster_url} alt={movie.title} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{movie.title}</h2>
                                    <button className="btn mt-auto btn-error" onClick={(e) => onHandleDelete(movie.id, e)}>Delete</button>
                                    <button className="btn btn-info" onClick={(e) => onHandleEdit(movie.id, e)}>Edit</button>
                                </div>
                            </Link>
                        ))

                ) : (
                    <h2>No movies found</h2>
                )
            }
        </div>
    );
}