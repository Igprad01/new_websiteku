import { useEffect, useState } from "react";

const roles = ['Full Stack Developer', 'System Analyst', 'Data Analyst']

const HeroSection = () => {
    const [index, setIndex] = useState(0)
    const [sub, setSub] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const current = roles[index]
        let t
        if (!deleting && sub === current.length) {
            t = setTimeout(() => setDeleting(true), 1800)
        } else if (deleting && sub === 0) {
            setDeleting(false)
            setIndex((i) => (i + 1) % roles.length)
        } else {
            t = setTimeout(() => setSub((s) => s + (deleting ? -1 : 1)), deleting ? 40 : 90)
        }
        return () => clearTimeout(t)
    }, [sub, deleting, index])

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center relative">
            <div className="container mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-[1.4fr_1fr] gap-14 items-center py-24">
                <div>
                    <p className="text-[13px] uppercase tracking-[0.35em] text-[#8a8a8a] mb-6 animate-fade-up">
                        Portofolio &mdash; 2026
                    </p>
                    <h1 className="font-display text-4xl sm:text-6xl text-[#f2f0ea] leading-[1.05] animate-fade-up">
                        I Gusti Bagus
                        <br />
                        Putra Pradwi
                    </h1>
                    <p className="mt-5 text-lg font-body text-[#b8b3a6] h-7 animate-fade-up">
                        {roles[index].slice(0, sub)}
                        <span className="inline-block w-[2px] h-6 bg-[#c8a24b] ml-1 align-middle"></span>
                    </p>
                    <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-[#9a9589] animate-fade-up">
                        Saya membangun aplikasi web dengan Laravel dan React, merancang alur sistem
                        yang efisien, dan menerjemahkan data menjadi keputusan &mdash; selama 3 tahun
                        terakhir sebagai Full Stack Developer dan System Analyst.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-8 animate-fade-up">
                        <a
                            href="#project"
                            className="group inline-flex items-center gap-3 text-[15px] font-medium text-[#f2f0ea]"
                        >
                            <span className="w-10 h-10 rounded-full border border-[#c8a24b]/60 flex items-center justify-center group-hover:bg-[#c8a24b] group-hover:border-[#c8a24b] transition-colors duration-300">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#c8a24b] group-hover:text-[#0b0b0d] transition-colors duration-300">
                                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Lihat project
                        </a>
                        <a
                            href="#about"
                            className="inline-flex items-center gap-3 text-[15px] font-medium text-[#8a8a8a] hover:text-[#f2f0ea] transition-colors"
                        >
                            Tentang saya
                        </a>
                    </div>
                </div>

                <div className="hidden lg:block animate-fade-up">
                    <div className="relative">
                        <div className="border border-[#c8a24b]/30 rounded-sm p-3">
                            <img
                                src="/img/fotoProfile.webp"
                                alt="I Gusti Bagus Putra Pradwi"
                                className="w-full h-[420px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                                width="400"
                                height="420"
                            />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-[#c8a24b]/40 rounded-sm -z-10"></div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 inset-x-0 container mx-auto px-6 sm:px-10 lg:px-16 flex justify-between text-[11px] uppercase tracking-[0.3em] text-[#55524b]">
                <span>Laravel / React / Data</span>
                <span className="hidden sm:inline">Bali, Indonesia</span>
            </div>
        </section>
    );
};

export default HeroSection;