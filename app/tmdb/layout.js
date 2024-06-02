import Header from "./components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next"
require('dotenv').config()

export default function TMDBLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}