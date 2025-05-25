import React from 'react';

export default function WorksCard({ companylogo }) {
    return (
        <div className='h-52 w-52 rounded-full outline-slate-500 flex items-center justify-center bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform  mt-6 flex-col space-y-4'>
            <img src={companylogo} alt="Company Logo" className="h-44 w-44 object-contain rounded-full" />
        </div>
    );
}
