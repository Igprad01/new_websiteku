import Image from "../../image/Image";

const Card = ({ Teks, Title, Imgsrc, link, textbutton, stack }) => {
    return (
        <a
            href={link}
            target={link && link.startsWith("#") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex flex-col h-full border border-white/5 bg-white/[0.02] hover:border-[#c8a24b]/40 transition-colors duration-300"
        >
            <div className="overflow-hidden relative">
                <Image
                    src={Imgsrc}
                    alt={Title}
                    styleImg="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
            </div>
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg text-[#f2f0ea] leading-snug">
                    {Title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-[#8a8a8a] flex-1">
                    {Teks}
                </p>
                {stack && (
                    <div className="flex flex-wrap gap-2 mt-5">
                        {stack.map((t) => (
                            <span key={t} className="text-[11px] px-2.5 py-1 border border-white/10 text-[#8a8a8a]">
                                {t}
                            </span>
                        ))}
                    </div>
                )}
                <span className={`mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] ${textbutton ? "text-[#c8a24b]" : "text-[#c8a24b]"}`}>
                    {textbutton || "Lihat project"}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-300">
                        <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>
        </a>
    );
};

export default Card;