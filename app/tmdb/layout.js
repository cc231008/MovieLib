import Header from "./components/Header";
require('dotenv').config()

export default function TMDBLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}