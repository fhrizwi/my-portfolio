import React from 'react';
import WorksCardGrid from '../components/WorksCardGrid';

export default function Works() {
  return (
    <div>
      <div className='mt-20'>
      </div>
      <p className='h-16 flex items-center p-10 text-3xl font-semibold bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300'>
        Companies I've Worked With
      </p>
      <WorksCardGrid />
      <p>Works Page</p>
    </div>
  );
}
