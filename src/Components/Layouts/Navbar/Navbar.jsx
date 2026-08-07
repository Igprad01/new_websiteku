import { useEffect, useState } from "react";
import NavbarList from "../../Elements/NavbarList/NavbarList";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            const ids = ["home", "about", "project", "sertifikasi", "skill"];
            let current = "home";
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 160) current = id;
            }
            setActive(current);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled ? "bg-[#0b0b0d]/90 backdrop-blur border-b border-white/5" : ""
            }`}
        >
            <div className="container mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-16">
                <a href="#home" className="font-display text-lg text-[#f2f0ea] tracking-wide">
                    IG<span className="text-[#c8a24b]">P</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <NavbarList active={active} />
                    <a
                        href="#contact"
                        className="text-[13px] uppercase tracking-[0.2em] text-[#c8a24b] border border-[#c8a24b]/50 px-4 py-2 hover:bg-[#c8a24b] hover:text-[#0b0b0d] transition-colors duration-300"
                    >
                        Kontak
                    </a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9"
                >
                    <span className={`block h-px bg-[#f2f0ea] transition-all duration-300 w-6 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`}></span>
                    <span className={`block h-px bg-[#f2f0ea] transition-all duration-300 w-6 ${open ? "opacity-0" : ""}`}></span>
                    <span className={`block h-px bg-[#f2f0ea] transition-all duration-300 w-6 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`}></span>
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-[#0b0b0d]/95 border-b border-white/5 px-6 py-4">
                    <NavbarList styling="flex flex-col gap-4" active={active} onNavigate={() => setOpen(false)} />
                </div>
            )}
        </nav>
    );
};

export default Navbar;