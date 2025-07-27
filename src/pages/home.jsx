import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Home = () => {
    const words = ['FRONTEND', 'BACKEND', 'MOBILE'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000); // Ganti tiap 2 detik

        return () => clearInterval(interval);
    }, []);
    return (
        <div id='home'>
            <div className="min-h-screen flex flex-col md:pl-56 md:items-start items-center justify-center ">

                {/* Sidebar Sosmed dalam kotak - ANIMASI DARI KANAN */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4, ease: 'easeOut' }}
                    className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-30 text-[var(--primary-dark)] bg-[var(--primary-light)]  py-5 px-4
                            flex-col gap-4 rounded-r-2xl shadow-lg"
                >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl hover:text-gray-400 transition" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl hover:text-gray-400 transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-3xl hover:text-gray-400 transition" />
                    </a>
                </motion.div>

                <div className="flex-grow flex md:items-center ">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.4, ease: 'easeOut' }}
                        className="text-start"
                    >
                        <div className='flex md:justify-start text-[var(--primary-light)] text-3xl lg:text-7xl'>
                            <h1 className="poppins-regular md:ml-20 font-bold">HI I'M</h1>
                            <div className=" ml-3 w-43 lg:w-[500px] lg:h-[70px] relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.h1
                                        key={words[index]}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute poppins-regular "
                                    >
                                        {words[index]}
                                    </motion.h1>
                                </AnimatePresence>
                            </div>
                        </div>
                        <h1 className="tracking-widest poppins-bold text-7xl lg:text-[300px] text-[var(--primary-light)] ">
                            AGUNG
                        </h1>
                        <h1 className="tracking-wider poppins-regular text-7xl lg:text-[300px] text-[var(--primary-light)] ">
                            SURYANA
                        </h1>
                    </motion.div>
                </div>

                <div className="flex md:hidden justify-center w-50 rounded-t-2xl gap-6 py-3 bg-[var(--primary-dark)] text-[var(--primary-light)]">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl hover:text-gray-400 transition" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl hover:text-gray-400 transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-3xl hover:text-gray-400 transition" />
                    </a>
                </div>

            </div>

            {/* <ScrollVelocity
                texts={['React Bits', 'Scroll Down']}
                velocity={50}
                className=
                "custom-scroll-text"
            /> */}
            {/* Versi mobile */}
        </div>
    );
};

export default Home;
