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
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 overflow-visible">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] 
                 bg-gradient-to-b lg:bg-gradient-to-r 
                 from-black to-gray-500 
                 text-transparent bg-clip-text drop-shadow-sm pt-4 pb-6">
                Crafting Seamless <br />
                Digital Experiences <br />
                through Code & Creativity
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
            <div className="lg:w-[35%] relative lg:mr-4 w-[300px]">
              <div className="relative max-w-md mx-auto">
                <img
                  src="/mypic.png"
                  alt="Designer"
                  className="w-full object-cover rounded-t-3xl lg:rounded-3xl"
                />

                {/* Tags */}
                <div className="absolute bottom-48 left-6">
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
      <div className="bg-[radial-gradient(circle_at_30%_30%,_rgba(255,200,200,0.8),_rgba(180,220,255,0.9))] text-black py-3 overflow-hidden relative">
        <div className="whitespace-nowrap animate-slide px-4">
          {Array(10).fill("✦ Code with Purpose ✦ Design with Passion ✦ Build for Users").join("   ")}
        </div>
      </div>




      {/* Simple Design Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          "Simplicity isn’t just a style — it’s a strategy. <br />I build with clarity, purpose, and precision."
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          I'm a passionate Web Developer with a strong interest in creating clean, simple, and user-friendly designs. With a background in UI/UX design and a keen eye for detail, I focus on building websites and web apps that are both functional and visually appealing.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Though I’m at the beginning of my professional journey, I’ve spent years exploring design principles, learning modern web technologies, and working on personal and academic projects that reflect my commitment to intuitive user experiences.
        </p>
        <p className="text-gray-600 text-lg">
          I enjoy combining design and development to bring ideas to life — whether it’s a responsive landing page, a smooth login experience, or a full-featured web app. I'm always excited to learn new tools and improve my skills with every project.
        </p>

        <SocialMedia />
      </section>

      <HireMe />
    </div>
  );
}