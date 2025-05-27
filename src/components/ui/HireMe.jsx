import { ArrowRight } from "lucide-react";
import React from 'react'
import Button from "./Button";

export default function HireMe() {
  return (
    <section className="bg-white text-black px-6 md:px-10 py-12 md:py-20 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto shadow mt-8 gap-8">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-700 opacity-10 rounded-3xl transform -rotate-12 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-700 opacity-10 rounded-3xl transform rotate-12 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      {/* Text Section */}
      <h2 className="text-3xl md:text-4xl font-semibold max-w-xl text-center md:text-left z-10">
        See the impact of good, <br />
        conversion-oriented design <br />
        on your business.
      </h2>

      {/* Button */}

      <Button ButtonName="Hire Me" />
    </section>
  )
}
