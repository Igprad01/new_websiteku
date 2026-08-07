import Navbar from './../Components/Layouts/Navbar/Navbar';
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import "@fontsource/playfair-display/700.css";
import HeroSection from "../Components/Layouts/Hero_Section/Hero_section";
import About from "../Components/Layouts/About_Me/About";
import Section_Project from "../Components/Layouts/Project_Section/Project_section";
import Sertifikat from './../Components/Layouts/Section_Certification/Certification';
import Footer from "../Components/Layouts/Footer/Footer";
import Skill from '../Components/Layouts/Section_skill/Skill';

const Template = () => {
    return (
        <main className="font-body bg-[#0b0b0d] text-[#d4d0c8] overflow-x-hidden scroll-smooth">
            <Navbar />
            <HeroSection />
            <About />
            <Section_Project />
            <Skill />
            <Sertifikat />
            <Footer />
        </main>
    );
};

export default Template