import React from 'react';
import {
  GraduationCap,
  Code,
  Laptop,
  BookOpen,
  UserRound,
} from 'lucide-react';

export default function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-800">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <UserRound className="w-7 h-7 text-blue-600" />
        About Me
      </h2>

      <p className="mb-4 text-base sm:text-lg leading-relaxed">
        Hello! I'm <strong className="text-blue-600">Faizul Haque Rizwi</strong>, a curious and hardworking Computer Science undergraduate with a strong passion for building impactful web applications and continuously learning new technologies.
      </p>

      <div className="space-y-5">
        <div className="flex items-start gap-3">
          <GraduationCap className="text-blue-500 w-6 h-6 mt-1" />
          <p className="text-base sm:text-lg">
            Currently pursuing B.Tech in Computer Science. My coursework includes Data Structures & Algorithms, DBMS, Operating Systems, and Software Engineering.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Code className="text-blue-500 w-6 h-6 mt-1" />
          <p className="text-base sm:text-lg">
            Skilled in <strong>HTML, CSS, JavaScript, React, Tailwind CSS</strong>, with backend knowledge of <strong>Java</strong> and <strong>MongoDB</strong>. I enjoy solving real-world problems through clean and efficient code.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Laptop className="text-blue-500 w-6 h-6 mt-1" />
          <p className="text-base sm:text-lg">
            Actively working on personal and college projects, and seeking internship opportunities to learn and grow in a professional environment.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <BookOpen className="text-blue-500 w-6 h-6 mt-1" />
          <p className="text-base sm:text-lg">
            I love exploring new technologies, following coding tutorials, and being part of tech communities that encourage learning and collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}
