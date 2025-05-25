import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="bg-white text-gray-800 flex flex-col lg:flex-row gap-8 p-4 sm:p-8 lg:p-16 justify-between items-start lg:items-center border-t border-gray-200 border-[1.5px] mt-10">
                <div className="flex flex-col gap-8 w-full">
                    {/* First Row: Navigation and Services (side-by-side on mobile and desktop) */}
                    <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:gap-16">
                        {/* Navigation */}
                        <div>
                            <h3 className="font-semibold mb-2 text-base sm:text-lg">Navigation</h3>
                            <ul className="space-y-1 text-gray-500 text-sm sm:text-base">
                                <li className="hover:text-sky-500 cursor-pointer">Home</li>
                                <li className="hover:text-sky-500 cursor-pointer">About</li>
                                <li className="hover:text-sky-500 cursor-pointer">Expertise</li>
                                <li className="hover:text-sky-500 cursor-pointer">Website Service</li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="font-semibold mb-2 text-base sm:text-lg">Services</h3>
                            <ul className="space-y-1 text-gray-500 text-sm sm:text-base">
                                <li className="hover:text-sky-500 cursor-pointer">Branding</li>
                                <li className="hover:text-sky-500 cursor-pointer">UI/UX Design</li>
                                <li className="hover:text-sky-500 cursor-pointer">Development</li>
                                <li className="hover:text-sky-500 cursor-pointer">Digital Marketing</li>
                            </ul>
                        </div>

                        {/* Social Media (hidden on mobile, shown on desktop) */}
                        <div className="hidden sm:block">
                            <h3 className="font-semibold mb-2 text-base sm:text-lg">Social Media</h3>
                            <div className="text-gray-500 text-sm sm:text-base flex flex-col items-start space-y-1">
                                <a href="https://github.com/fhrizwi" className="hover:text-sky-500" target="_blank" rel="noopener noreferrer">Github</a>
                                <a href="https://www.linkedin.com/in/faizul-haque-rizwi-2aa05732a/" className="hover:text-sky-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://instagram.com/fhrizwi" className="hover:text-sky-500" target="_blank" rel="noopener noreferrer">Instagram</a>
                                <a href="https://twitter.com/fhrizwi" className="hover:text-sky-500" target="_blank" rel="noopener noreferrer">Twitter</a>
                            </div>
                        </div>
                    </div>

                    {/* Second Row: Social Media and Information (side-by-side on mobile, Information only on desktop) */}
                    <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:gap-16">
                        {/* Social Media (shown on mobile, hidden on desktop) */}
                        <div className="block sm:hidden">
                            <h3 className="font-semibold mb-2 text-base sm:text-lg">Social Media</h3>
                            <div className="text-gray-500 text-sm sm:text-base flex flex-col items-start space-y-1">
                                <a href="https://github.com/fhrizwi" className="hover:text-sky-500" target="_blank" rel="noopener noreferrer">Github</a>
                                <a href="https://www.linkedin.com/in/faizul-haque-rizwi-2aa05732a/" className="hover:text-sky-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://instagram.com/fhrizwi" className="hover:text-sky-500" target="_blank" rel="noopener noreferrer">Instagram</a>
                                <a href="https://twitter.com/fhrizwi" className="hover:text-sky-500" target="_blank" rel="noopener noreferrer">Twitter</a>
                            </div>
                        </div>

                        {/* Information */}
                        <div>
                            <h3 className="font-semibold mb-2 text-base sm:text-lg">Information</h3>
                            <ul className="text-gray-500 text-sm sm:text-base space-y-2">
                                <li>faizulhaque2002@gmail.com</li>
                                <li>Hostel-16 MMDU Mullana, Ambala, Haryana, 133207</li>
                                <li>(+91) 6206957650</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-end">
                    <div className="space-y-6 sm:space-y-10">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold mb-4 text-center lg:text-right">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 animate-pulse">
                                Design That Talks,
                                <br />
                                Code That Walks.
                            </span>
                        </h2>

                        {/* Email Form */}
                        <div className="flex justify-between bg-sky-300 p-1 font-medium border border-gray-300 rounded-full overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-72 px-4 py-2 bg-sky-300 placeholder:text-black text-black focus:outline-none"
                            />
                            <button className="bg-black flex items-center justify-center w-10 h-10 hover:bg-slate-950 rounded-full text-white p-1 rounded-r-full">
                                <svg
                                    className="w-6 h-6 bg-black text-white ease-linear duration-300 rounded-full p-1 rotate-90"
                                    viewBox="0 0 16 19"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                        className="fill-white"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="text-gray-400 border-t border-gray-200 border-[1.5px] py-4 flex items-center justify-center p-3 flex-col text-xs sm:text-sm">
                <p className="hover:text-sky-500 transition duration-300">© 2025 Faizul.dev. All rights reserved.</p>
            </div>
        </>
    );
}
