import SectionHeading from "../../Elements/SectionHeading/SectionHeading";

const Sertifikat = () => {
    const Kartu = [
        { id: 1, judul: 'BNSP Audit Teknologi Informasi', link: '#' },
        { id: 2, judul: 'Front End Web Development', source: 'Udemy', link: 'https://drive.google.com/file/d/1fmV3KfYFv_dY8_jyTdhr2q5pOKhRKs9E/view?usp=sharing' },
        { id: 3, judul: 'Belajar Dasar AI', source: 'Dicoding', link: 'https://www.dicoding.com/certificates/JMZVE239OPN9' },
        { id: 4, judul: 'Data Analysis with Python', source: 'FreeCodeCamp', link: 'https://www.freecodecamp.org/certification/Igprad/data-analysis-with-python-v7' },
        { id: 5, judul: 'SQL Fundamental', source: 'DQLab', link: 'https://academy.dqlab.id/Certificate_check/result/DQLABSQLT1RSWSFV#mycertificate' },
        { id: 6, judul: 'Excel Pivot Table', source: 'MySkill', link: 'https://drive.google.com/file/d/1nZ7h6-0pq2u8megQc0dvLTLhHa4mHDPt/view?usp=drive_link' },
    ];

    return (
        <section id="sertifikasi" className="py-24 sm:py-32 border-t border-white/5">
            <div className="container mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-[1fr_2fr] gap-x-14 gap-y-10">
                <div className="lg:sticky lg:top-24 self-start">
                    <SectionHeading num="03" title="Sertifikat" desc="Pencapaian belajar yang memperkuat fondasi teknis dan analisis data." />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {Kartu.map((c) => (
                        <a
                            key={c.id}
                            href={c.link}
                            target={c.link === "#" ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 border border-white/5 bg-white/[0.02] p-5 hover:border-[#c8a24b]/40 transition-colors duration-300"
                        >
                            <div>
                                <h3 className="font-display text-[17px] text-[#f2f0ea] leading-snug">{c.judul}</h3>
                                {c.source && <p className="mt-1 text-[12px] text-[#8a8a8a]">{c.source}</p>}
                            </div>
                            <span className="text-[#c8a24b] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sertifikat;