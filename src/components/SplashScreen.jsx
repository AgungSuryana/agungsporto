import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [slideOut, setSlideOut] = useState(false);

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => setProgress(p => p + 1), 15); // loading speed
            return () => clearTimeout(timer);
        } else {
            // Jangan munculkan dulu komponen lain — tunggu slide-out selesai
            setTimeout(() => {
                setSlideOut(true); // mulai animasi geser

                // ⏳ setelah animasi slide 700ms selesai, baru panggil onComplete
                setTimeout(() => {
                    onComplete();
                }, 600); // <— waktu sesuai class 'duration-700'
            }, 900); // delay sedikit sebelum mulai geser
        }
    }, [progress, onComplete]);
    return(
        <div
            className={`fixed inset-0 z-50 bg-[#171c28] text-white flex items-end justify-start text-8xl font-bold transition-transform duration-700 ${slideOut ? 'translate-x-full' : 'translate-x-0'
                }`}
        >
            {progress}%
        </div>
    );
}
