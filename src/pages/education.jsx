import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function Education() {
    return (
        <section id="about" className="bg-[var(--primary-dark)] text-[var(--primary-light)] px-7 pt-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Experience Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-[var(--primary-light)] p-3 rounded-full">
                                <FaBriefcase size={28} className="text-[#171c28]" />
                            </div>
                            <h1 className="text-5xl poppins-semibold ">Experience</h1>
                        </div>

                        <div className="relative border-l-2 border-[var(--primary-light)] ml-4 pl-8 space-y-10">

                            {/* Assistant OOP */}
                            <div className="relative">
                                <div className="absolute -left-[44px] top-1.5 w-5 h-5 bg-[var(--primary-light)]  rounded-full border-4 border-[var(--primary-dark)] "></div>
                                <div className="bg-[var(--primary-light)] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <p className="text-lg poppins-semibold text-[var(--primary-dark)] mb-1">Mar 2025 – Jun 2025</p>
                                    <h4 className="text-xl poppins-medium text-[var(--primary-dark)]">Object-Oriented Programming Lab Assistant</h4>
                                    <p className="text-md poppins-regular text-slate-700 mb-3">Institut Teknologi Nasional Bandung</p>
                                    <p className="text-slate-600 poppins-regular text-sm leading-relaxed">
                                        Assisting students in learning Object-Oriented Programming concepts such as inheritance, polymorphism, and abstraction using Java. Also guiding them in building backend applications with Spring Boot.
                                    </p>
                                </div>
                            </div>

                            {/* Backend Intern */}
                            <div className="relative">
                                <div className="absolute -left-[44px] top-1.5 w-5 h-5 bg-[var(--primary-light)]  rounded-full border-4 border-[var(--primary-dark)]"></div>
                                <div className="bg-[var(--primary-light)]  p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <p className="text-lg poppins-semibold text-[var(--primary-dark)] mb-1">Jul 2025 – Present</p>
                                    <h4 className="text-xl poppins-medium text-[var(--primary-dark)]">Backend Developer Intern</h4>
                                    <p className="text-md  poppins-regular text-slate-700 mb-3">PT Punya Skill Cipta Sinergi</p>
                                    <p className="text-slate-600  poppins-regular text-sm leading-relaxed">
                                        Developed backend systems using Laravel for an online examination platform used in the Minds United assessment program. Handled user management, scoring, and secure test flows.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="mt-8 flex justify-center">
                            <a
                                href="/comingsoon"
                                className="inline-block px-6 py-3 bg-[var(--primary-light)] text-[var(--primary-dark)] rounded-full poppins-semibold hover:bg-gray-100 transition duration-300"
                            >
                                Read More
                            </a>
                        </div>


                    </div>

                    {/* Education Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-[var(--primary-light)]  p-3 rounded-full">
                                <FaGraduationCap size={28} className="text-[var(--primary-dark)]" />
                            </div>
                            <h1 className="text-5xl poppins-semibold text-[var(--primary-light)] ">Education</h1>
                        </div>

                        <div className="relative border-l-2 border-[var(--primary-light)]  ml-4 pl-8 space-y-10">
                            {/* Item 1 */}
                            <div className="relative">
                                <div className="absolute -left-[44px] top-1.5 w-5 h-5 bg-[var(--primary-light)]  rounded-full border-4 border-[var(--primary-dark)] "></div>
                                <div className="bg-[var(--primary-light)]  p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <p className="text-lg poppins-semibold text-[var(--primary-dark)] mb-1">2018 - 2021</p>
                                    <h4 className="text-xl poppins-medium text-[var(--primary-dark)]">SMA Negeri 1 Cileunyi</h4>
                                    <p className="text-md poppins-regular text-slate-700 ">Social Science</p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="relative">
                                <div className="absolute -left-[44px] top-1.5 w-5 h-5 bg-[var(--primary-light)] rounded-full border-4 border-[var(--primary-dark)] "></div>
                                <div className="bg-[var(--primary-light)]  p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <p className="text-lg poppins-semibold text-[var(--primary-dark)] mb-1">2022 - Present</p>
                                    <h4 className="text-xl poppins-medium text-[var(--primary-dark)]">Institut Teknologi Nasional Bandung</h4>
                                    <p className="text-md poppins-regular text-slate-700 ">Informatics</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
