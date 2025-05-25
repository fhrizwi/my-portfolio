import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function ProCard({ title, tags, image, link }) {
    return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-[300px]">
            <Link to={link || ""}>
                <div className="bg-white flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img
                        className="h-48 w-full object-cover"
                        src={image}
                        alt={title}
                    />
                    <div className="px-4 py-3">
                        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
                        <p className="text-gray-700 text-sm mb-4 break-words">
                            {Array.isArray(tags) ? tags.join(', ') : tags}
                        </p>
                        <Button ButtonName="View Project" buttonColor="blue" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
