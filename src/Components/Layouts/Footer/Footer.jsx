import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <footer className="bg-slate-900 text-white py-16 border-t-2 border-slate-800">
            <div data-aos="fade-up" className="container mx-auto px-4 flex flex-col items-center text-center">
                <img 
                    src="/img/fotoProfile.jpg" 
                    alt="I Gusti Bagus Putra Pradwi" 
                    className="w-20 h-20 rounded-full mb-6 border-2 border-primary object-cover shadow-sm" 
                />
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4 capitalize">
                    Mau nongki hingga berdiskusi ide seru?
                </h2>
                <p className="text-slate-400 text-sm sm:text-base max-w-xl mb-8">
                    Atau membicarakan peluang kerja sama untuk mewujudkan project impian Anda? Jangan ragu untuk menghubungi saya.
                </p>
                
                <a href="igustiputra99@gmail.com" className="btn btn-primary rounded-full px-10 text-white shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform mb-12">
                    Kirim Pesan
                </a>

                <div className="flex flex-col items-center border-t border-slate-800 w-full pt-8">
                    <h3 className="font-semibold text-lg text-slate-200 uppercase tracking-wider mb-6">Terhubung</h3>
                    <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm sm:text-base">
                        <a href="https://www.linkedin.com/in/putrapradwi/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://github.com/Igprad01" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
                        <a href="https://instagram.com/putrapradwi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
                    </div>
                
                    <p className="text-slate-500 text-xs sm:text-sm">
                        © {new Date().getFullYear()} I Gusti Bagus Putra Pradwi. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
