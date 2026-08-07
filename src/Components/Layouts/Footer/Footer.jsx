const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.35em] text-[#c8a24b] mb-6">
            Kontak
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-[#f2f0ea] leading-tight">
            Ada project atau peluang yang ingin dibicarakan?
          </h2>
          <p className="mt-5 text-[15px] text-[#8a8a8a] leading-relaxed">
            Silakan kirim pesan lewat email. Saya biasanya membalas dalam satu
            hari kerja.
          </p>
          <a
            href="mailto:putrapradwi01@gmail.com"
            className="mt-10 inline-flex items-center gap-3 group text-lg font-medium text-[#f2f0ea]"
          >
            igustiputra99@gmail.com
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-5 text-[#c8a24b] transition-transform group-hover:translate-x-1 duration-300"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7v9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
          <p className="text-[12px] text-[#55524b]">
            © {new Date().getFullYear()} I Gusti Bagus Putra Pradwi.
          </p>
          <div className="flex gap-6 text-[12px] uppercase tracking-[0.2em]">
            <a
              href="https://www.linkedin.com/in/putrapradwi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8a8a] hover:text-[#c8a24b] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Igprad01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8a8a] hover:text-[#c8a24b] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://x.com/IPradwi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8a8a] hover:text-[#c8a24b] transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;-
