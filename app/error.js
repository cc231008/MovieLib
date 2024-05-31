'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Header from "./tmdb/components/Header";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center mt-48">
                <h2>Something went wrong!</h2>
                <button
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4"
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </button>
            </div>
        </>
    )
}