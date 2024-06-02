/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/tmdb',
                destination: '/tmdb/movies',
                permanent: false,
            },
            {
                source: '/',
                destination: '/tmdb/movies',
                permanent: false,
            },
            {
                source: '/local',
                destination: '/local/movies',
                permanent: true,
            },
            {
                source: '/local/movies/edit',
                destination: '/local/movies',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
