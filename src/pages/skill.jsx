import React from 'react';
import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
    FaGitAlt, FaFigma, FaDatabase
} from 'react-icons/fa';
import {
    SiTailwindcss, SiNextdotjs, SiVite, SiExpress,
    SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiVercel
} from 'react-icons/si';

// Gabungkan semua skill jadi satu array
const allSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-orange-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
];

// Komponen untuk satu skill item
const SkillItem = ({ name, icon }) => (
    <div className="group flex flex-col items-center justify-center p-4 bg-[var(--second-dark)] rounded-lg transition-all duration-300 ease-in-out hover:bg-slate-600 hover:scale-105 cursor-pointer">
        <div className="text-4xl mb-2 transition-transform duration-300 group-hover:-translate-y-1">
            {icon}
        </div>
        <p className="poppins-regular text-sm text-slate-300 group-hover:text-white">{name}</p>
    </div>
);

// Komponen utama
export default function Skill() {
    return (
        <div className='px-7 mt-32'>
            <h1 className="poppins-semibold text-5xl font-bold text-left">
                SKILLS
            </h1>
            <div className="mt-10 bg-[var(--second-dark)] border border-slate-700 rounded-xl p-6 backdrop-blur-sm">

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-4">
                    {allSkills.map((skill, index) => (
                        <SkillItem key={index} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>
        </div>

    );
}
