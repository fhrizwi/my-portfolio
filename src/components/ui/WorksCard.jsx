import React from 'react';

export default function WorksCard({ companylogo }) {
    return (
        <div className='h-52 w-52 rounded-full outline-slate-500 flex items-center justify-center bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 mt-6 flex-col space-y-4'>
            <img src={companylogo} alt="Company Logo" className="h-24 w-24 object-contain" />
        </div>
    );
}
