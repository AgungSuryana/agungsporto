import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);
    const [instantHoverIndex, setInstantHoverIndex] = useState(null);
    const [isRoundedTop, setIsRoundedTop] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [activePath, setActivePath] = useState('#');

    const hoverTimeoutRef = useRef(null);
    const roundedTimeoutRef = useRef(null);
    const dropdownTimeoutRef = useRef(null);

    const navLinks = [
        { title: 'Home', path: '#', dropdown: [] },
        {
            title: 'About',
            path: '#about',
            dropdown: [
                { title: 'Education', path: '#education' },
                { title: 'Our Story', path: '#story' },
            ],
        },
        {
            title: 'Experience',
            path: '#experience',
            dropdown: [
                { title: 'Work', path: '#work' },
                { title: 'Projects', path: '#project' },
            ],
        },
        { title: 'Contact', path: '#contact', dropdown: [] },
    ];

    useEffect(() => {
        const sectionIds = ['#home', '#about', '#experience', '#contact'];
        const sectionElements = sectionIds
            .map((id) => document.querySelector(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActivePath(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px', // pastikan cukup terlihat
                threshold: 0.3, // ubah threshold agar home juga terdeteksi
            }
        );

        sectionElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'contact'];
            for (let id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActivePath(`#${id}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const isLightSection = ['#about', '#experience', '#contact'].includes(activePath);

    const handleMouseEnter = (index) => {
        setInstantHoverIndex(index);

        clearTimeout(hoverTimeoutRef.current);
        clearTimeout(roundedTimeoutRef.current);
        clearTimeout(dropdownTimeoutRef.current);

        if (navLinks[index].dropdown.length === 0) {
            setHoverIndex(null);
            setIsDropdownVisible(false);
            return;
        }

        hoverTimeoutRef.current = setTimeout(() => {
            setHoverIndex(index);
        }, 300);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeoutRef.current);
        clearTimeout(roundedTimeoutRef.current);
        clearTimeout(dropdownTimeoutRef.current);

        setHoverIndex(null);
        setInstantHoverIndex(null);
    };

    const hoveredHasDropdown =
        instantHoverIndex !== null && navLinks[instantHoverIndex]?.dropdown.length > 0;
    const hasDropdown =
        hoverIndex !== null && navLinks[hoverIndex]?.dropdown.length > 0;

    useEffect(() => {
        if (hoveredHasDropdown) {
            setIsRoundedTop(true);
        } else {
            roundedTimeoutRef.current = setTimeout(() => {
                setIsRoundedTop(false);
            }, 100);
        }

        return () => clearTimeout(roundedTimeoutRef.current);
    }, [hoveredHasDropdown]);

    useEffect(() => {
        if (hasDropdown) {
            setIsDropdownVisible(true);
        } else {
            dropdownTimeoutRef.current = setTimeout(() => {
                setIsDropdownVisible(false);
            }, 200);
        }

        return () => clearTimeout(dropdownTimeoutRef.current);
    }, [hoverIndex]);

    return (
        <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 text-[18px]">
            <div className="relative" onMouseLeave={handleMouseLeave}>
                <div className={`
                    w-[412px] mx-auto shadow-lg flex items-center justify-center gap-6 px-8 py-2
                    transition-all duration-300 ease-in-out
                    ${isRoundedTop ? 'rounded-t-3xl' : 'rounded-full'}
                    ${isLightSection ? 'bg-[var(--primary-light)] text-[var(--primary-dark)]' : 'bg-[var(--primary-dark)] text-[var(--primary-light)] '}
                `}>
                    {navLinks.map((link, index) => (
                        <div
                            key={link.title}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                        >
                            <a
                                href={link.path}
                                onClick={() => setActiveIndex(index)}
                                className={`transition-colors poppins-regular pb-1
    ${isLightSection ? 'text-[var(--primary-dark)] hover:text-gray-500' : 'text-[var(--primary-light)]  hover:text-gray-300'}
    ${activePath === link.path ? 'poppin-bold' : ''}
  `}
                            >
                                {link.title}
                            </a>

                        </div>


                    ))}
                </div>

                <AnimatePresence>
                    {isDropdownVisible &&
                        hoverIndex !== null &&
                        navLinks[hoverIndex]?.dropdown.length > 0 && (
                            <motion.div
                                key="dropdown"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className={`absolute left-0 top-full w-full rounded-b-3xl shadow-md z-40 px-2 py-2
                                    ${isLightSection ? 'bg-[var(--primary-light)]  text-[var(--primary-dark)]' : 'bg-[var(--primary-dark)] text-[var(--primary-light)] '}
                                `}
                            >
                                <ul className="flex flex-col text-base poppins-regular">
                                    {navLinks[hoverIndex].dropdown.map((item, i) => (
                                        <li key={i}>
                                            <a
                                                href={item.path}
                                                className={`block px-4 py-2 rounded-lg transition-colors duration-200
                                                    ${isLightSection
                                                        ? 'hover:bg-gray-100 text-[var(--primary-dark)]c28]'
                                                        : 'hover:bg-gray-700 text-[var(--primary-light)] '}
                                                `}
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                </AnimatePresence>
            </div>
        </nav >
    );
}
