import SectionHeading from "../../Elements/SectionHeading/SectionHeading";

const About = () => {
    const points = [
        { label: "Full Stack", tech: "Laravel, React" },
        { label: "System Analysis", tech: "flow, arsitektur" },
        { label: "Data", tech: "Excel, Python, Looker" },
        { label: "Logika teknis", tech: "Robotika" },
    ];

    return (
        <section id="about" className="py-24 sm:py-32 border-t border-white/5">
            <div className="container mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-[1fr_1.4fr] gap-14">
                <SectionHeading num="01" title="Tentang Saya" />
                <div>
                    <p className="text-[15px] sm:text-base leading-relaxed text-[#b0ab9f] animate-fade-up">
                        Lulusan Teknik Informatika yang berfokus pada pengembangan web dan analisis
                        sistem. Saya membangun aplikasi yang tidak hanya menyesuaikan kebutuhan,
                        tetapi nyaman digunakan &mdash; responsif, rapi, dan berpusat pada pengguna.
                    </p>
                    <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-[#8a8a8a] animate-fade-up">
                        Di luar pengkodean, pengalaman saya di bidang Robotika mengasah cara berpikir
                        yang logis dan terstruktur, sementara kemahiran data membantu setiap keputusan
                        berdiri di atas angka, bukan asumsi.
                    </p>
                    <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
                        {points.map((p, i) => (
                            <li key={p.label} className="flex items-baseline gap-4 border-b border-white/5 pb-4 animate-fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                                <span className="text-[12px] text-[#c8a24b] font-mono">/</span>
                                <span className="text-[#f2f0ea] font-medium">{p.label}
                                    <span className="block text-[13px] text-[#8a8a8a] font-normal mt-0.5">{p.tech}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;