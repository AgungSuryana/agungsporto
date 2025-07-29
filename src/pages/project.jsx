import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoMdLink } from 'react-icons/io';
import { Link } from 'react-router-dom'; // Bisa diganti <a> jika tanpa routing

const projects = [
    {
        image: 'https://placehold.co/800x600/1e293b/ffffff?text=Proyek+A',
        title: 'Desain Ulang Situs Web E-commerce',
        description:
            'Perombakan total antarmuka pengguna dan pengalaman pengguna untuk platform e-commerce.',
        tags: ['UI/UX', 'React', 'Next.js'],
        github: 'https://github.com/username/ecommerce-redesign',
    },
    {
        image: 'https://placehold.co/800x600/475569/ffffff?text=Proyek+B',
        title: 'Aplikasi Mobile Manajemen Tugas',
        description:
            'Aplikasi lintas platform untuk membantu tim tetap terorganisir.',
        tags: ['React Native', 'Firebase', 'Mobile'],
        external: 'https://taskapp.example.com',
    },
    {
        image: 'https://placehold.co/800x600/94a3b8/1e293b?text=Proyek+C',
        title: 'Dasbor Analitik Data',
        description: 'Dasbor interaktif memvisualisasikan data penjualan kompleks.',
        tags: ['Data Viz', 'D3.js', 'Dashboard'],
    },
    {
        image: 'https://placehold.co/800x600/1e3a8a/ffffff?text=Proyek+D',
        title: 'Platform Blogging Berbasis AI',
        description:
            'Menggunakan AI untuk menyarankan topik, draf, dan optimasi SEO.',
        tags: ['AI', 'Next.js', 'SEO'],
        github: 'https://github.com/username/ai-blog-platform',
        external: 'https://aiblog.example.com',
    },
];

const ProjectCard = ({ project }) => (
    <div className="flex flex-col sm:flex-row bg-[var(--second-dark)] rounded-2xl overflow-hidden shadow-md sm:h-96 relative">
        {/* Gambar di kanan */}
        <div className="mt-15 w-full sm:w-1/2 h-48 sm:h-full relative order-1 sm:order-2">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
            />
        </div>

        {/* Konten di kiri */}
        <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center relative order-2 sm:order-1">
            {/* Ikon di kiri atas */}
            {(project.github || project.external) && (
                <div className="absolute top-4 left-5 flex gap-3 text-[var(--primary-dark)] text-2xl z-10">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--primary-light)] p-2 rounded-full hover:bg-sky-500 transition transform hover:scale-110"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                    )}
                    {project.external && (
                        <a
                            href={project.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--primary-light)] p-2 rounded-full hover:bg-sky-500 transition transform hover:scale-110"
                            aria-label="External Link"
                        >
                            <IoMdLink />
                        </a>
                    )}
                </div>
            )}

            <h3 className="poppins-semibold mt-12 text-2xl font-bold text-[var(--primary-light)] mb-3">{project.title}</h3>
            <p className="poppins-light text-[var(--primary-light)]  text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="poppins-semibold bg-[var(--primary-light)] text-[var(--primary-dark)] text-xs font-medium px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);
const Project = () => {
    return (
        <div className="max-w-[1500px] mx-auto px-6 py-8">
            <h1 className="poppins-semibold text-[var(--primary-light)] text-7xl mb-15 text-left">
                LATEST PROJECT
            </h1>
            <div className="grid grid-cols-2 gap-6">
                {projects.slice(0, 4).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            {/* Tombol See More */}
            <div className="mt-10 text-center">
                <Link
                    to="/comingsoon"
                    className="poppins-semibold inline-block px-6 py-3 bg-[var(--primary-light)] text-[var(--primary-dark)] font-medium rounded-full hover:bg-sky-700 transition"
                >
                    See More Projects →
                </Link>
            </div>
        </div>
    );
};

export default Project;
