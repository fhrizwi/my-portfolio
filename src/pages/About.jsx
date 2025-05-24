import React from 'react';
import AboutContent from '../components/AboutContent';

export default function About() {
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

      </p>
      <AboutContent />
    </div>
  );
}
