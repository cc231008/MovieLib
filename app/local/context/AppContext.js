"use client"
// context/AppContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const LOCAL_STORAGE_KEY = 'appState'; // Define a property key for the local storage item that will store the app state.

export const AppProvider = ({ children }) => {
    const [state, setState] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
            return savedState ? JSON.parse(savedState) : {};
        }
        return {};
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state)); // Save the app state to the local storage which stores properties in key-value pairs.
    }, [state]);

    return (
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
