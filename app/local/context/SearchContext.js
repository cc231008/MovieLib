"use client"

import React, { createContext, useState } from 'react';

// Create a Context for the search bar
const SearchContext = createContext();

// Create a Provider component
const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchProvider };
