import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SocialSidebar() {
    return (
        <>
            {/* Sidebar Sosmed (Desktop) */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4, ease: 'easeOut' }}
                className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-30 text-[var(--primary-dark)] bg-[var(--primary-light)] py-5 px-4 flex-col gap-4 rounded-r-2xl shadow-lg"
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

            {/* Sidebar Sosmed (Mobile) */}
            <div className="flex md:hidden justify-center w-full rounded-t-2xl gap-6 py-3 bg-[var(--primary-dark)] text-[var(--primary-light)] fixed bottom-0 left-0 z-30">
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
        </>
    );
}
