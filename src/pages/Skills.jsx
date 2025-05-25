import React from 'react';
import SkillCardGrid from '../components/SkillCardGrid';


export default function Skills() {
  return (
    <div>
      <div className='mt-20'>
      </div>
      <p className="h-16 flex items-center p-10 text-3xl font-semibold bg-white "
        style={{
          backgroundImage: "url('/banner.png')",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "cover, contain",
        }}>
        Skills
      </p>
      <SkillCardGrid />
    </div>
  );
}
