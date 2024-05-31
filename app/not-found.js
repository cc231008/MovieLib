import Link from 'next/link'
import Header from "./tmdb/components/Header";

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center mt-48">
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4">
                        Return Home
                    </button>
                </Link>
            </div>
        </>
    )
}