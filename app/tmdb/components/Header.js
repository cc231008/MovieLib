'use client';
import Link from "next/link";
import React, {useEffect, useRef} from 'react';
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Header() {
    const router = useRouter()
    const inputRef = useRef(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && search !== '') {
            router.push(`/tmdb/movies/search?s=${search}`);
        }
    };

    return (
        <header className="flex flex-row justify-between p-6 gap-x-5">
            <div className="flex gap-10">
                <Link title="Home Page" href={"/tmdb/movies"}>
                    <h1 className="text-2xl md:text-4xl mt-2 md:mt-0">MovieLib</h1>
                </Link>
                <Link href={"/local/movies"}>
                    <button className="btn btn-outline btn-primary">Switch to local server</button>
                </Link>
            </div>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="text-sm w-20 md:w-48" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
        </header>
    );
}