import SectionHeading from "../../Elements/SectionHeading/SectionHeading";

const Skill = () => {
    const groups = [
        { key: "Backend", items: ["Laravel", "PHP", "Next.js", "MySQL"] },
        { key: "Frontend", items: ["React", "Vue.js", "Tailwind", "JavaScript"] },
        { key: "Data", items: ["Excel", "Python", "Looker Studio"] },
        { key: "Lainnya", items: ["WordPress", "Arduino", "C++"] },
    ];

    return (
        <section id="skill" className="py-24 sm:py-32 border-t border-white/5">
            <div className="container mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-[1fr_2fr] gap-x-14 gap-y-10">
                <div className="lg:sticky lg:top-24 self-start">
                    <SectionHeading num="04" title="Keahlian" desc="Teknologi dan tools yang rutin saya gunakan dalam pekerjaan sehari-hari." />
                </div>

                <div className="border border-white/5 divide-y divide-white/5">
                    {groups.map((g) => (
                        <div key={g.key} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 sm:p-6 hover:bg-white/[0.02] transition-colors">
                            <span className="text-[12px] uppercase tracking-[0.3em] text-[#8a8a8a] w-40 shrink-0">
                                {g.key}
                            </span>
                            <span className="flex flex-wrap gap-2">
                                {g.items.map((t) => (
                                    <span key={t} className="text-[13px] border border-white/10 px-3 py-1.5 text-[#b0ab9f]">
                                        {t}
                                    </span>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;