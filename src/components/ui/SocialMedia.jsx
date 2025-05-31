import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex flex-col items-center mt-6 space-y-4">
      <h1 className="text-xl font-semibold">Follow Me On</h1>

      <div className="flex gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/fhrizwi"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform  hover:scale-105 flex items-center justify-center p-4 rounded-full text-2xl text-slate-700 hover:text-black"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/fhrizwi"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform  hover:scale-105 flex items-center justify-center p-4 rounded-full text-2xl text-slate-700 hover:text-sky-700"
        >
          <FaLinkedin />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/fhrizwi"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform  hover:scale-105 flex items-center justify-center p-4 rounded-full text-2xl text-slate-700 hover:text-sky-500"
        >
          <FaTwitter />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/faizulhaque_77"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform  hover:scale-105 flex items-center justify-center p-4 rounded-full text-2xl text-slate-700 hover:text-pink-500"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
