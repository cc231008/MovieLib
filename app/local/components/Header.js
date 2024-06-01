import Link from "next/link";
import React, {useContext, useState} from "react";
import { SearchContext } from '../context/SearchContext';

export default function Header() {
    const [search, setSearch] = useState("");
    const { setSearchTerm } = useContext(SearchContext);

    // "handleKeyDown" function is used to handle the "Enter" key press event on the search input field.
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearchTerm(search);
        }
    };

    //HTML code for the header component with the search input field.
    return (
        <header className="flex flex-col lg:flex-row justify-between p-10 gap-5">
            <Link title="Home Page" href={"/local/movies"}>
                <h1 className="text-2xl md:text-4xl mt-2 md:mt-0 text-center">MovieLib</h1>
            </Link>
            <div className="flex flex-wrap justify-center  gap-4 ">
                <Link href={"/tmdb/movies/"}>
                    <button className="btn btn-ghost text-base">Switch to TMDB server</button>
                </Link>
                <Link href={"/local/movies/create"}>
                    <button className="btn btn-ghost text-base">Create New Movie</button>
                </Link>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="text-sm w-48" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
        </header>
    )
}