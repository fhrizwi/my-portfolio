import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className=" text-slate-900 border-b border-slate-300 p-4 flex items-center justify-between fixed w-full top-0 z-50">
                <div className="flex items-center space-x-4">
                    <img
                        src="/vite.svg"
                        alt="Logo"
                        className="h-10 w-10 rounded-full"
                    />
                    <span className="text-xl sm:text-2xl font-bold">Faizul.dev</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center text-lg">
                    <Link to="/" className="hover:text-slate-800">Home</Link>
                    <Link to="/about" className="hover:text-slate-800">About</Link>
                    <Link to="/works" className="hover:text-slate-800">Works</Link>
                    <Link to="/skills" className="hover:text-slate-800">Skills</Link>
                    <Link to="/projects">
                        <Button ButtonName="Project" />
                    </Link>
                </nav>

                {/* Mobile Hamburger Menu */}
                <button
                    className="md:hidden flex flex-col justify-center items-center space-y-1.5 w-8 h-8"
                    onClick={toggleSidebar}
                    aria-label="Toggle menu"
                >
                    <span className="w-6 h-0.5 bg-slate-900"></span>
                    <span className="w-6 h-0.5 bg-slate-900"></span>
                    <span className="w-6 h-0.5 bg-slate-900"></span>
                </button>
            </header>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white text-slate-900 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button
                        className="text-2xl"
                        onClick={toggleSidebar}
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                </div>
                <nav className="flex flex-col space-y-4 p-4 text-lg">
                    <Link to="/" onClick={toggleSidebar} className="hover:text-slate-800">
                        Home
                    </Link>
                    <Link to="/about" onClick={toggleSidebar} className="hover:text-slate-800">
                        About
                    </Link>
                    <Link to="/works" onClick={toggleSidebar} className="hover:text-slate-800">
                        Works
                    </Link>
                    <Link to="/skills" onClick={toggleSidebar} className="hover:text-slate-800">
                        Skills
                    </Link>
                    <Link to="/projects" onClick={toggleSidebar} className="hover:text-slate-800">
                        Download CV
                    </Link>
                </nav>
            </div>

            {/* Overlay for sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900 bg-opacity-20 z-40 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
}