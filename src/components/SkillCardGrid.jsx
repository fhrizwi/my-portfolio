

import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiFigma } from 'react-icons/si';

import SkillCard from './ui/SkillCard'

const skills = [
  { Icon: FaReact, name: 'React', level: 'Intermediate' },
  { Icon: SiTailwindcss, name: 'Tailwind', level: 'Advanced' },
  { Icon: SiJavascript, name: 'JavaScript', level: 'Advanced' },
  { Icon: SiMongodb, name: 'MongoDB', level: 'Beginner' },
  { Icon: FaNodeJs, name: 'Node.js', level: 'Intermediate' },
  { Icon: FaGitAlt, name: 'Git', level: 'Advanced' },
  { Icon: SiFigma, name: 'Figma', level: 'Intermediate' },
];


export default function SkillCardGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 sm:px-8 place-items-center">
      {skills.map((skill, index) => (
        <SkillCard key={index} Icon={skill.Icon} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
}

