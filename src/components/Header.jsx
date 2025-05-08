import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';


export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img
                    src="/vite.svg"
                    alt="Logo"
                    className="h-10 w-10 rounded-full" />

                <span className="text-2xl font-bold">Faizul.dev</span>
            </div>

            <nav className="space-x-8 flex items-center text-lg">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/works">Works</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects"><Button /></Link>
            </nav>
        </header>
    );
}
