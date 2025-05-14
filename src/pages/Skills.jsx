import React from 'react';
import SkillCardGrid from '../components/SkillCardGrid';


export default function Skills() {
  return (
    <div>
      <div className='mt-20'>
      </div>
      <p className='h-16 flex items-center p-10 text-3xl font-semibold bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300'>
        Projects
      </p>
      <SkillCardGrid />
      <p>Skills Page</p>
    </div>
  );
}
