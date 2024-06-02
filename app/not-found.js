import Link from 'next/link'
import Header from "./tmdb/components/Header";

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center mt-40 gap-y-10">
                <h2 className="text-3xl md:text-4xl">Not Found!</h2>
                <h1 className="text-6xl md:text-9xl">(^-^*)</h1>
                <h3 className="flex text-center">Couldn't Find Requested Resource!</h3>
                <Link href="/">
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4">
                        Return Home
                    </button>
                </Link>
            </div>
        </>
    )
}