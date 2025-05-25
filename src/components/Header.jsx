import {
    Home,
    User,
    Briefcase,
    BadgeCheck,
    Folder,
    Download,
} from 'lucide-react';

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './ui/Button';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <header className="bg-white/70 backdrop-blur-md text-slate-900 border-b border-slate-300 p-4 flex items-center justify-between fixed w-full top-0 z-50">
                <div className="flex items-center space-x-4">
                    <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
                    <span className="text-xl sm:text-2xl font-bold">Faizul.dev</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-1 items-center text-lg">
                    <Link
                        to="/"
                        className={`flex items-center space-x-2 rounded-md px-3 py-1 ${isActive('/') ? 'text-blue-700 font-normal' : 'hover:text-blue-700'}`}
                    >
                        <Home className="w-5 h-5" />
                        <span>Home</span>
                    </Link>
                    <Link
                        to="/about"
                        className={`flex items-center space-x-2 rounded-md px-3 py-1 ${isActive('/about') ? 'text-blue-700 font-normal' : 'hover:text-blue-700'}`}
                    >
                        <User className="w-5 h-5" />
                        <span>About</span>
                    </Link>
                    <Link
                        to="/works"
                        className={`flex items-center space-x-2 rounded-md px-3 py-1 ${isActive('/works') ? 'text-blue-700 font-normal' : 'hover:text-blue-700'}`}
                    >
                        <Briefcase className="w-5 h-5" />
                        <span>Works</span>
                    </Link>
                    <Link
                        to="/skills"
                        className={`flex items-center space-x-2 rounded-md px-3 py-1 ${isActive('/skills') ? 'text-blue-700 font-normal' : 'hover:text-blue-700'}`}
                    >
                        <BadgeCheck className="w-5 h-5" />
                        <span>Skills</span>
                    </Link>
                    <Link
                        to="/projects"
                        className={`flex items-center space-x-2 rounded-md px-3 py-1 ${isActive('/projects') ? 'text-blue-700 font-normal' : 'hover:text-blue-700'}`}
                    >
                        <Folder className="w-5 h-5" />
                        <span>Projects</span>
                    </Link>
                    <a
                        href="/fhrizwiCV.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:text-blue-700 rounded-md px-3 py-1"
                    >
                        <Button ButtonName="Download CV" />
                    </a>
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
                className={`fixed top-0 right-0 h-full w-64 bg-white text-slate-900 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button
                        className="text-4xl"
                        onClick={toggleSidebar}
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                </div>
                <nav className="flex flex-col text-lg px-4">
                    <Link
                        to="/"
                        onClick={toggleSidebar}
                        className={`flex items-center space-x-2 px-3 py-2 border-b border-slate-200 ${isActive('/') ? 'text-blue-700 font-semibold' : 'hover:text-slate-800 hover:bg-slate-100'}`}
                    >
                        <Home className="w-5 h-5" />
                        <span>Home</span>
                    </Link>
                    <Link
                        to="/about"
                        onClick={toggleSidebar}
                        className={`flex items-center space-x-2 px-3 py-2 border-b border-slate-200 ${isActive('/about') ? 'text-blue-700 font-semibold' : 'hover:text-slate-800 hover:bg-slate-100'}`}
                    >
                        <User className="w-5 h-5" />
                        <span>About</span>
                    </Link>
                    <Link
                        to="/works"
                        onClick={toggleSidebar}
                        className={`flex items-center space-x-2 px-3 py-2 border-b border-slate-200 ${isActive('/works') ? 'text-blue-700 font-semibold' : 'hover:text-slate-800 hover:bg-slate-100'}`}
                    >
                        <Briefcase className="w-5 h-5" />
                        <span>Works</span>
                    </Link>
                    <Link
                        to="/skills"
                        onClick={toggleSidebar}
                        className={`flex items-center space-x-2 px-3 py-2 border-b border-slate-200 ${isActive('/skills') ? 'text-blue-700 font-semibold' : 'hover:text-slate-800 hover:bg-slate-100'}`}
                    >
                        <BadgeCheck className="w-5 h-5" />
                        <span>Skills</span>
                    </Link>
                    <Link
                        to="/projects"
                        onClick={toggleSidebar}
                        className={`flex items-center space-x-2 px-3 py-2 border-b border-slate-200 ${isActive('/projects') ? 'text-blue-700 font-semibold' : 'hover:text-slate-800 hover:bg-slate-100'}`}
                    >
                        <Folder className="w-5 h-5" />
                        <span>Projects</span>
                    </Link>
                    <a
                        href="/fhrizwiCV.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleSidebar}
                        className="flex items-center space-x-2 px-3 py-2 border-b border-slate-200 hover:text-slate-800 hover:bg-slate-100"
                    >
                        <Download className="w-5 h-5" />
                        <span>Download CV</span>
                    </a>
                </nav>
            </div>

            {/* Overlay for sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900 bg-opacity-20 backdrop-blur-sm z-40 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
}
