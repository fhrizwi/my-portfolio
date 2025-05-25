import React from 'react';
import WorksCardGrid from '../components/WorksCardGrid';

export default function Works() {
  return (
    <div>
      <div className="mt-20"></div>

      <p
        className="h-16 flex items-center p-10 text-3xl font-semibold bg-white "
        style={{
          backgroundImage: "url('/banner.png')",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "cover, contain",
        }}
      >
        Companies I've Worked With
      </p>
      <WorksCardGrid />
    </div>
  );
}
