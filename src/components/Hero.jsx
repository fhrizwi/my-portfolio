import React from "react";
import Button from './ui/Button';
import SocialMedia from './ui/SocialMedia';
import HireMe from "./ui/HireMe"

export default function Hero() {
  return (
    <div className="text-black font-sans">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-14 py-20 sm:py-32 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-7xl mx-auto bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Building Seamless <br className="hidden sm:block" />
            Digital Experiences <br className="hidden sm:block" />
            with Code & Creativity
          </h1>
          <p className="text-gray-600 mb-6 text-base sm:text-lg max-w-2xl mx-auto md:mx-0">
            Passionate web developer dedicated to crafting clean, functional, and impactful websites that make a difference.
          </p>

          <div className="flex justify-center md:justify-start mb-8 md:mb-0">
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

        {/* Right Column with Image and Tags */}
        <div className="flex-1 relative max-w-sm mx-auto md:max-w-md lg:max-w-lg">
          <div className="relative">
            <img
              src="/mypic.png"
              alt="Designer"
              className="rounded-2xl w-full h-auto object-cover"
            />

            {/* Tags with improved responsive positioning */}
            <span className="absolute top-4 md:top-8 right-2 md:right-4 lg:right-8 bg-yellow-300 px-3 py-1 text-sm font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform">
              UI/UX Designer
            </span>
            <span className="absolute bottom-20 md:bottom-24 right-2 md:right-4 bg-green-300 px-3 py-1 text-sm font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform">
              Product Designer
            </span>
            <span className="absolute bottom-4 md:bottom-8 left-2 md:left-4 bg-blue-300 px-3 py-1 text-sm font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform">
              Webflow Developer
            </span>
          </div>
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