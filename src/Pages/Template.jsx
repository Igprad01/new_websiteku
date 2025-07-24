import React, { useEffect } from "react";
import Navbar from './../Components/Layouts/Navbar/Navbar';
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style
import HeroSection from "../Components/Layouts/Hero_Section/Hero_section";
import About from "../Components/Layouts/About_Me/About";
import Section_Project from "../Components/Layouts/Project_Section/Project_section";
import Sertifikat from './../Components/Layouts/Section_Certification/Certification';
import Footer from "../Components/Layouts/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Skill from '../Components/Layouts/Section_skill/Skill';

const Template = () => (

    <body className="font-montserrat">
        <Navbar />
        <HeroSection />
        <About />
        <Section_Project />
        <Sertifikat />
        <Skill />
        <Footer />
    </body>
)


export default Template