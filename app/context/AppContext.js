"use client"
// context/AppContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const LOCAL_STORAGE_KEY = 'appState';

export const AppProvider = ({ children }) => {
    const [state, setState] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
            return savedState ? JSON.parse(savedState) : {};
        }
        return {};
    });

    useEffect(() => {
        console.log('local storage');
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    return (
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
