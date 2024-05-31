"use client"
// context/AppContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const LOCAL_STORAGE_KEY = 'appState';

export const AppProvider = ({ children }) => {
    const [state, setState] = useState(() => {
        if (typeof window !== 'undefined') { // check if window is defined
            const savedState = localStorage.getItem(LOCAL_STORAGE_KEY); // get the saved state from local storage. Saved state is a string, which we need to parse to an object to use it for the initial state.
            return savedState ? JSON.parse(savedState) : {};
        }
        return {};
    });

    useEffect(() => {
        console.log('local storage');
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state)); // save the state to local storage whenever the state changes (i.e., whenever the user interacts with the app) so that the state is persisted across page reloads.
    }, [state]);

    return (
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
