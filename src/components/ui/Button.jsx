import React from 'react'

const colorMap = {
    sky: {
        base: 'bg-sky-200',
        hover: 'hover:bg-sky-300'
    },
    blue: {
        base: 'bg-blue-200',
        hover: 'hover:bg-blue-300'
    },
    red: {
        base: 'bg-red-200',
        hover: 'hover:bg-red-300'
    },
    // Add more as needed
}

export default function Button({ ButtonName, buttonColor = 'sky' }) {
    const color = colorMap[buttonColor] || colorMap['sky'];

    return (
        <button
            type="submit"
            className={`group flex ${color.base} p-1 items-center text-black font-semibold rounded-full transition-all duration-300 ease-in-out ${color.hover}`}
        >
            <p className='px-3 m-0 transition-colors duration-300 group-hover:text-gray-800'>
                {ButtonName}
            </p>

            <svg
                className="w-8 h-8 justify-end bg-black text-gray-600 transition-all duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-90 group-hover:rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-white group-hover:fill-gray-200 transition-colors duration-300"
                ></path>
            </svg>
        </button>
    )
}
