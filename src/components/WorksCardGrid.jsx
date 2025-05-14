import React from 'react';
import WorksCard from './ui/WorksCard';

export default function WorksCardGrid() {
    const worksData = [
        { companylogo: '/vite.svg' },
        { companylogo: '/vite.svg' },
        { companylogo: '/vite.svg' },
        { companylogo: '/vite.svg' },
        { companylogo: '/vite.svg' },
    ];

    return (
        <div className="grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-5 gap-4 p-4">
            {worksData.map((item, index) => (
                <WorksCard key={index} companylogo={item.companylogo} />
            ))}
        </div>

    );
}
