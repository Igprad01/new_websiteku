const SectionHeading = ({ num, title, desc }) => {
    return (
        <header className="mb-16">
            <div className="flex items-center gap-4 mb-5">
                <span className="text-[12px] font-body uppercase tracking-[0.35em] text-[#c8a24b]">
                    {num}
                </span>
                <span className="h-px w-12 bg-[#c8a24b]/50"></span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-[#f2f0ea] leading-tight">
                {title}
            </h2>
            {desc && (
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#8a8579]">
                    {desc}
                </p>
            )}
        </header>
    );
};

export default SectionHeading;