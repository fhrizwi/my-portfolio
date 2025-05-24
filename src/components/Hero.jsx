import React from "react";
import Button from './ui/Button';
import SocialMedia from './ui/SocialMedia';
import HireMe from "./ui/HireMe";

export default function Hero() {
  return (
    <div className="text-black font-sans">
      <section className="min-h-screen bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Building Seamless <br className="hidden sm:block" />
                Digital Experiences <br className="hidden sm:block" />
                with Code & Creativity
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                Passionate web developer dedicated to crafting clean, functional, and impactful websites that make a difference.
              </p>

              <div className="flex justify-center lg:justify-start mb-8">
                <Button ButtonName="Hire Me!" buttonColor="red" />
              </div>

              {/* Client Section */}
              <div className="flex justify-center lg:justify-start items-center gap-4">
                <div className="flex -space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Client"
                    className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/33.jpg"
                    alt="Client"
                    className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    alt="Client"
                    className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <span className="text-gray-700 font-semibold">1K+ Clients</span>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative max-w-lg mx-auto">
                <img
                  src="/4989bf44-45e3-452c-ad34-049246b3f86a.png"
                  alt="Designer"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                
                {/* Tags with improved positioning and styling */}
                <div className="absolute top-6 right-6 transform transition-transform hover:scale-105">
                  <span className="bg-yellow-300 px-4 py-2 text-sm font-semibold rounded-full shadow-lg inline-block">
                    UI/UX Designer
                  </span>
                </div>
                
                <div className="absolute bottom-32 right-6 transform transition-transform hover:scale-105">
                  <span className="bg-green-300 px-4 py-2 text-sm font-semibold rounded-full shadow-lg inline-block">
                    Product Designer
                  </span>
                </div>
                
                <div className="absolute bottom-12 left-6 transform transition-transform hover:scale-105">
                  <span className="bg-blue-300 px-4 py-2 text-sm font-semibold rounded-full shadow-lg inline-block">
                    Webflow Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-4">
        <div className="flex overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {Array(20).fill("Design ★ Develop ★ Discover").join(" ✦ ")}
          </div>
        </div>
      </div>

      {/* Simple Design Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          I like to make simple and elegant designs
        </h2>
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            As a UI/UX designer with over 10 years of experience in the field, I am responsible
            for creating user interfaces and experiences that are intuitive, visually appealing,
            and easy to use.
          </p>
          <p className="text-gray-600 text-lg">
            With over a decade of experience, I have worked on a wide range of projects and have
            developed a strong understanding of user needs and design principles.
          </p>
          <p className="text-gray-600 text-lg">
            Overall, my extensive experience in UI/UX design makes me a valuable asset to any team or
            project that requires intuitive and user-friendly interfaces.
          </p>
        </div>

        <SocialMedia />
      </section>
      
      <HireMe />
    </div>
  );
}