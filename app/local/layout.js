'use client'
import { AppProvider } from './context/AppContext';
import {SearchProvider} from "./context/SearchContext";
import Link from "next/link";
import React from "react";
import Header from "./components/Header";

export default function LocalLayout({ children }) {
    return (
        <AppProvider>
            <SearchProvider>
                <Header />
                {children}
            </SearchProvider>
        </AppProvider>
    );
}