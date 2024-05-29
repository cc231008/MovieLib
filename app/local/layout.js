'use client'
import { AppProvider } from '../context/AppContext';

export default function LocalLayout({ children }) {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    );
}