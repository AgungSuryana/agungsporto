import React from 'react';

// SVG Icon Component (Static)
const ConstructionIcon = () => (
    <div className="relative mb-8 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
        {/* Background Glow (Static) */}
        <div className="absolute w-full h-full bg-yellow-400/10 rounded-full"></div>

        {/* Gears (Static) */}
        <svg className="absolute w-full h-full text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <svg className="absolute w-2/3 h-2/3 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {/* Wrench (Static) */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-1/2 w-1/2 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.471-2.471a2.652 2.652 0 000-3.75l-2.471-2.471a2.652 2.652 0 00-3.75 0L3 14.25l5.877 5.877a2.652 2.652 0 003.543-.001z" />
        </svg>
    </div>
);


export default function ComingSoon() {
    return (
        <main className="bg-gray-900 min-h-screen w-full flex flex-col items-center justify-center p-4 font-sans text-white antialiased">
            <div className="max-w-4xl w-full flex flex-col items-center text-center">

                {/* Static Icon */}
                <ConstructionIcon />

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 tracking-wider uppercase">
                    Coming Soon
                </h1>

                {/* Subheading */}
                <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
                    We're working hard to bring you something amazing. Our new website is under construction but we are getting close to launch!
                </p>

                {/* Footer */}
                <footer className="mt-16 text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </footer>
            </div>
        </main>
    );
}
