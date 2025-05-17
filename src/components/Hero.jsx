import React from "react";
import Button from './ui/Button';
import SocialMedia from './ui/SocialMedia';
import HireMe from "./ui/HireMe"

export default function Hero() {
  return (
    <div className="text-black font-sans ">
      {/* Hero Section */}
      <section
        className="px-6 sm:px-10 lg:px-14 py-32 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
            Designing for <br className="hidden sm:block" />
            Amazing <br className="hidden sm:block" />
            People
          </h1>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Designing user interfaces for over 10 years as visual designer
          </p>
          <div className="flex justify-center md:justify-start">
            <Button ButtonName="Hire Me!" buttonColor="red" />
          </div>

          {/* Client Section */}
          <div className="flex justify-center md:justify-start items-center gap-3 mt-6">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/33.jpg"
                alt="Client"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/34.jpg"
                alt="Client"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <span className="text-sm text-gray-600">1K+ Clients</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 relative mt-8 md:mt-0">
          <img
            src="/vite.svg"
            alt="Designer"
            className="rounded-2xl w-full max-w-sm mx-auto"
          />

          {/* Tags */}
          <span className="absolute top-16 right-4 sm:right-20 bg-yellow-300 px-3 py-1 text-sm font-semibold rounded-full">
            UI/UX Designer
          </span>
          <span className="absolute bottom-32 right-4 sm:right-12 bg-green-300 px-3 py-1 text-sm font-semibold rounded-full">
            Product Designer
          </span>
          <span className="absolute bottom-12 left-4 bg-blue-300 px-3 py-1 text-sm font-semibold rounded-full">
            Webflow Developer
          </span>
        </div>
      </section>


      {/* Marquee Section */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-4 text-sm font-medium text-center whitespace-nowrap overflow-hidden">
        <div className="inline-block animate-marquee">
          {Array(20)
            .fill("Design ★ Develop ★ Discover")
            .join(" ✦ ")}
        </div>
      </div>


      {/* Simple Design Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          I like to make a simple and elegant design
        </h2>
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          As a UI/UX designer with over 10 years of experience in the field, I am responsible
          for creating user interfaces and experiences that are intuitive, visually appealing,
          and easy to use.
        </p>
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          With over a decade of experience, I likely worked on a wide range of projects and have
          developed a strong understanding of user needs and design principles...
        </p>
        <p className="text-gray-600 text-base sm:text-lg">
          Overall, my extensive experience in UI/UX design makes me a valuable asset to any team or
          project that requires intuitive and user-friendly interfaces.
        </p>

        {/* Import Social Media Section */}
        <SocialMedia />
      </section>
      <HireMe />
    </div>
  );
}
