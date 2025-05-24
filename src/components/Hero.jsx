import React from "react";
import Button from './ui/Button';
import SocialMedia from './ui/SocialMedia';
import HireMe from "./ui/HireMe";

export default function Hero() {
  return (
    <div className="text-black font-sans">
      <section className="min-h-screen bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Building Seamless <br />
                Digital Experiences <br />
                with Code & Creativity
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                Passionate web developer dedicated to crafting clean, functional, and impactful websites that make a difference.
              </p>

              <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                <Button ButtonName="Hire Me!" buttonColor="red" />
              </div>

              {/* Client Section */}
              <div className="flex justify-center lg:justify-start items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Client"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/33.jpg"
                    alt="Client"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    alt="Client"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                </div>
                <span className="text-gray-600 font-medium">1K+ Clients</span>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative max-w-md mx-auto">
                <img
                  src="/4989bf44-45e3-452c-ad34-049246b3f86a.png"
                  alt="Designer"
                  className="w-full object-cover rounded-t-3xl lg:rounded-3xl"
                />
                
                {/* Tags */}
                <div className="absolute top-6 right-6">
                  <span className="bg-yellow-300 px-4 py-2 text-sm font-semibold rounded-full shadow-lg inline-block transform hover:scale-105 transition-transform">
                    UI/UX Designer
                  </span>
                </div>
                
                <div className="absolute bottom-32 right-6">
                  <span className="bg-green-300 px-4 py-2 text-sm font-semibold rounded-full shadow-lg inline-block transform hover:scale-105 transition-transform">
                    Product Designer
                  </span>
                </div>
                
                <div className="absolute bottom-12 left-6">
                  <span className="bg-blue-300 px-4 py-2 text-sm font-semibold rounded-full shadow-lg inline-block transform hover:scale-105 transition-transform">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          I like to make simple and elegant designs
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          As a UI/UX designer with over 10 years of experience in the field, I am responsible
          for creating user interfaces and experiences that are intuitive, visually appealing,
          and easy to use.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          With over a decade of experience, I likely worked on a wide range of projects and have
          developed a strong understanding of user needs and design principles.
        </p>
        <p className="text-gray-600 text-lg">
          Overall, my extensive experience in UI/UX design makes me a valuable asset to any team or
          project that requires intuitive and user-friendly interfaces.
        </p>

        <SocialMedia />
      </section>
      
      <HireMe />
    </div>
  );
}