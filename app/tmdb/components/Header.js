'use client';  //We use "use client" to use Hooks in the component
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter()
    const [search, setSearch] = useState("");

    // "handleKeyDown" function is used to handle the "Enter" key press event on the search input field.
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && search !== '') {
            router.push(`/tmdb/movies/search?s=${search}`);
        }
    };

    //HTML code for the header component with the search input field.
    return (
        <header className="flex p-6 gap-x-5 justify-between">
            <div className="gap-10">
                <Link title="Home Page" href={"/tmdb/movies"}>
                    <h1 className="text-2xl md:text-4xl mt-2 md:mt-0">MovieLib</h1>
                </Link>
            </div>
                <div className="flex flex-row gap-x-5">
                <Link href={"/local/movies"}>
                    <button className="btn btn-ghost text-xs md:text-base">Switch to local server</button>
                </Link>

            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="text-sm w-8 md:w-48" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
        </div>
        </header>
    );
}