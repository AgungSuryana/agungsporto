import React from 'react';
// import ScrollReveal from '../animation/ScrollReveal';
import { FaInstagram, FaYoutube, FaTiktok, FaGlobe, FaWhatsapp } from 'react-icons/fa';
import Education from './education';
import GitHubCalendar from 'react-github-calendar';


export default function About() {
    return (
        <section id="about" className="bg-[var(--primary-dark)] min-h-screen px-6 py-24 text-[var(--primary-light)]">
            <div className="w-full max-w-7xl mx-auto">
                {/* Judul */}
                <div className="mb-10">
                    <h1 className="poppins-semibold text-7xl font-bold text-left">
                        About Me
                    </h1>
                    {/* <h1 className="poppins-semibold text-[29px] font-bold mb-8 text-left">
                        Education & Experience
                    </h1> */}
                </div>

                {/* Konten */}
                <div className="text-justify text-2xl poppins-light leading-relaxed space-y-8">
                    {/* Profil */}
                    <p>
                        Hi! I’m Agung Suryana, a Software Developer from Bandung, Indonesia. I work on both frontend (React.js, Tailwind CSS) and backend (Express.js, Laravel, Golang). I also explore Python for data and machine learning. Currently learning Web3 and cybersecurity, I enjoy creating meaningful software and constantly improving my skill.
                    </p>

                    {/* Founder Amigdevs */}
                    <div className="mt-4">
                        <h2 className="text-3xl poppins-semibold mb-2">Co-Founder of Amigdevs</h2>
                        <p>
                            Amigdevs is a platform where developers connect, share, and build meaningful tech projects together. We empower the tech community through collaboration, educational content, and real-world software development. Beyond community building, we also offer development services for individuals, startups, and businesses who need reliable and scalable tech solutions.
                        </p>
                        <div className="flex items-center justify-end space-x-5  text-4xl">
                            <a href="https://www.tiktok.com/@amigdevs" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-transform hover:scale-110">
                                <FaTiktok />
                            </a>
                            <a href="https://instagram.com/amigdevs" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform hover:scale-110">
                                <FaInstagram />
                            </a>
                            <a href="https://www.youtube.com/@amigdevs" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-transform hover:scale-110">
                                <FaYoutube />
                            </a>
                            <a href="https://amigdevs.site" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-transform hover:scale-110">
                                <FaGlobe />
                            </a>
                            <a href="https://chat.whatsapp.com/your-wa-community-link" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-transform hover:scale-110">
                                <FaWhatsapp />
                            </a>
                        </div>

                    </div>
                </div>

                <Education />

                <div className='flex justify-center mt-20 bg-py-5 bg-[var(--second-dark)]  rounded-2xl py-5 px-5'>
                    <GitHubCalendar
                        username="agungsuryana"
                        colorScheme="dark"
                        blockSize={18}
                        blockMargin={5}
                        fontSize={14}
                    />
                </div>



            </div>
        </section>
    );
}
