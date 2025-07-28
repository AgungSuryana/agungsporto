import React, { useState } from 'react';

// Komponen untuk ikon SVG agar lebih rapi
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


// Komponen utama aplikasi
export default function Sidebar() {
    // State untuk mengontrol status buka/tutup sidebar
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Fungsi untuk toggle sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Daftar item menu
    const menuItems = [
        { name: 'HOME', href: '#home', level: 0 },
        { name: 'ABOUT', href: '#about', level: 0 },
        { name: '  EDUCATION', href: '#education', level: 1 },
        { name: '  EXPERIENCE', href: '#experience', level: 1 },
        { name: '  SKILLS', href: '#experience', level: 1 },
        // { name: '    Work', href: '#work', level: 2 },
        { name: '    LATEST PROJECT', href: '#project', level: 0 },
        { name: 'CONTACT', href: '#contact', level: 0 },
    ];

    // Lebar sidebar dalam rem (w-72 -> 18rem)
    const sidebarWidthRem = 31.25;
    const buttonRightPositionOpen = `${sidebarWidthRem}rem`; // Posisi tombol saat sidebar terbuka
    const buttonRightPositionClosed = '0rem'; // Posisi tombol saat sidebar tertutup

    return (
        <div className="">
            {/* Tombol Hamburger - Gaya baru yang lebih panjang dan menyatu */}
            <button
                onClick={toggleSidebar}
                className="fixed top-7 z-50 px-5 py-7 bg-[var(--primary-light)] text-[var(--primary-dark)] rounded-l-xl shadow-lg hover:bg-gray-700   transition-all duration-500 ease-in-out"
                style={{ right: isSidebarOpen ? buttonRightPositionOpen : buttonRightPositionClosed }}
                aria-label="Toggle menu"
            >
                {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Konten Utama Halaman */}

            {/* Overlay - Latar belakang gelap saat sidebar terbuka */}
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ease-in-out"
                    aria-hidden="true"
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 h-full w-[500px] bg-[var(--primary-light)] text-[var(--primary-dark)] shadow-2xl transform transition-transform duration-500 ease-in-out z-40 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-7">
                    <h2 className="text-2xl font-semibold mb-8 border-b border-gray-600 pb-4">Navigation</h2>
                    <nav>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index} className="mb-1">
                                    <a
                                        href={item.href}
                                        style={{ paddingLeft: `${item.level * 3}rem` }}
                                        className="wiggle flex items-center p-4 text-5xl poppins-medium rounded-lg transition-all duration-200 group"
                                    >
                                        <span className="flex-1 whitespace-nowrap timbul-3d timbul-3d-hover">
                                            {item.name}
                                        </span>
                                    </a>
                                </li>


                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
}
