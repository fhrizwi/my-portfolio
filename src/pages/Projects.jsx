import React from 'react';
import CardGrid from '../components/CardGrid';

export default function Projects() {
  return (
    <div>
      <div className='mt-20'>
      </div>
      <p className="h-16 flex items-center p-10 text-3xl font-semibold bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
        style={{
          backgroundImage: "url('/banner.png')",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "cover, contain",
        }}>
        Latest Projects
      </p>
      <CardGrid />
    </div>
  );
}
