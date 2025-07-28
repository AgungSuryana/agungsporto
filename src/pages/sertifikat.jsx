import React, { useState, useEffect, useRef } from 'react';

// --- Data Sertifikat ---
// Anda bisa mengganti ini dengan data asli dari API atau sumber lain.
const certificateData = [
    {
        id: 1,
        title: 'Sertifikasi Pengembang Web Front-End',
        institution: 'Dicoding Indonesia',
        year: '2023',
        description: 'Sertifikasi ini memvalidasi keahlian dalam membangun antarmuka web yang responsif dan interaktif menggunakan HTML, CSS, dan JavaScript modern. Proyek akhir melibatkan pembuatan aplikasi web single-page yang kompleks.',
        imageUrl: 'https://placehold.co/600x400/0E7490/FFFFFF?text=Sertifikat+Front-End',
    },
    {
        id: 2,
        title: 'React - The Complete Guide',
        institution: 'Academind by Maximilian Schwarzmüller',
        year: '2023',
        description: 'Menyelesaikan kursus mendalam tentang React, mencakup fundamental, hooks, Redux, React Router, dan praktik terbaik. Membangun beberapa proyek untuk memperkuat pemahaman konsep-konsep inti.',
        imageUrl: 'https://placehold.co/600x400/581C87/FFFFFF?text=Sertifikat+React',
    },
    {
        id: 3,
        title: 'Tailwind CSS From Scratch',
        institution: 'Traversy Media',
        year: '2024',
        description: 'Kursus ini mengajarkan cara memanfaatkan utility-first framework Tailwind CSS untuk membangun desain kustom dengan cepat tanpa meninggalkan HTML. Fokus pada desain responsif dan kustomisasi tema.',
        imageUrl: 'https://placehold.co/600x400/155E75/FFFFFF?text=Sertifikat+Tailwind',
    },
    {
        id: 4,
        title: 'Cloud Practitioner Essentials',
        institution: 'Amazon Web Services (AWS)',
        year: '2024',
        description: 'Memperoleh pemahaman dasar tentang layanan cloud AWS, termasuk komputasi, penyimpanan, database, dan keamanan. Sertifikasi ini menunjukkan pengetahuan fundamental tentang platform AWS.',
        imageUrl: 'https://placehold.co/600x400/BE123C/FFFFFF?text=Sertifikat+AWS',
    },
];

const CertificateSection = React.forwardRef(({ certificate }, ref) => (
    <section
        ref={ref}
        id={`cert-${certificate.id}`}
        className="mb-20 mt-9" // buang min-h dan justify-center
    >
        <div>
            <h3 className="text-sm poppins-semibold font-bold uppercase tracking-widest text-cyan-400">
                {certificate.institution} - {certificate.year}
            </h3>
            <h2 className="mt-2 text-3xl md:text-4xl poppins-semibold font-bold text-white">
                {certificate.title}
            </h2>
            <p className="mt-6 poppins-light text-lg leading-relaxed text-gray-400">
                {certificate.description}
            </p>
        </div>
    </section>
));



// --- Komponen Utama Aplikasi ---
export default function Sertifikat() {
    const [activeCertificate, setActiveCertificate] = useState(certificateData[0]);
    const sectionRefs = useRef([]);

    // Inisialisasi array refs, satu untuk setiap sertifikat
    sectionRefs.current = certificateData.map(
        (_, i) => sectionRefs.current[i] ?? React.createRef()
    );

    useEffect(() => {
        // Intersection Observer untuk mendeteksi bagian mana yang sedang terlihat
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Temukan sertifikat yang sesuai dengan section yang terlihat
                        const newActiveCertificate = certificateData.find(
                            (cert) => `cert-${cert.id}` === entry.target.id
                        );
                        if (newActiveCertificate) {
                            setActiveCertificate(newActiveCertificate);
                        }
                    }
                });
            },
            {
                root: null, // Mengamati persimpangan relatif terhadap viewport
                threshold: 0.5, // Callback dipicu saat 50% elemen terlihat
                rootMargin: '-50px 0px -50px 0px', // Margin untuk memperkecil area deteksi
            }
        );

        // Mulai mengamati setiap section
        sectionRefs.current.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        // Cleanup: berhenti mengamati saat komponen di-unmount
        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []); // Jalankan sekali saat komponen dimuat

    return (
        <div className="container mt-32 mx-auto px-7">
            <h1 className="poppins-semibold text-5xl font-bold text-left">
                CERTIFICATE
            </h1>
            <div className="mt-10 bg-[var(--second-dark)] rounded-xl px-10 py-4 shadow-md backdrop-blur-md">
                <div className="flex flex-col ml-10 items-start mt-4">
                    <span className="poppins-medium text-lg text-[var(--primary-light)] animate-bounce">Scroll down</span>
                    <svg
                        className="w-6 h-6 ml-10 text-[var(--primary-light)] 0 animate-bounce mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">

                    <div className="h-[400px] overflow-y-auto p-6 rounded-xl backdrop-blur-sm scrollbar-hide flex flex-col justify-start">
                        {certificateData.map((cert, index) => (
                            <CertificateSection
                                key={cert.id}
                                certificate={cert}
                                ref={sectionRefs.current[index]}
                            />
                        ))}
                    </div>

                    {/* Kolom Kanan: Gambar Sertifikat (Sticky) */}
                    <div className="hidden md:flex items-center justify-center max-h-[500px] sticky top-20">

                        <div className="w-full max-w-md lg:max-w-lg p-4">
                            {/* Menggunakan 'key' pada gambar agar React me-remount 
                   dan memicu transisi saat gambar berubah */}
                            <img
                                key={activeCertificate.id}
                                src={activeCertificate.imageUrl}
                                alt={`Gambar Sertifikat untuk ${activeCertificate.title}`}
                                className="rounded-xl shadow-2xl shadow-cyan-500/20 object-cover w-full h-auto aspect-video animate-fade-in"
                            />
                        </div>
                    </div>

                </div>
            </div>
            {/* CSS untuk animasi fade-in */}
            <style>{`
        @keyframes fade-in {
          from { opacity: 0.5; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
        </div>
    );
}
