import React, { useEffect } from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Kalimat from "../../Elements/Paragraph/Paragraph";
import Aos from "aos";
import "aos/dist/aos.css"


const About= () => {

    useEffect(() => {
        Aos.init({duration:2000});
    })

    return (
        <div data-aos="fade-up" className={`container mx-auto my-40 px-6 sm:px-6 md:px-10 lg:px-12`} id="about">
            <Heading1 Text={'About Me'} Styling = {`text-center mb-10 text-xl capitalize sm:text-2xl md:text-4xl lg:text-6xl`} />
            <div className={`text-start border p-4 sm:text-justify px-4 md:px-8 lg:px-10`}>
                <div className={`"px-2 py-2 sm:px-4 md:px-6 lg:px-6">`}>
                <Kalimat teks = 'Lulusan S1 Teknik Informatika dengan minat dan pengalaman di bidang pengembangan web front-end serta pengelolaan data. Mahir menggunakan React dan Vue.js untuk membangun antarmuka web yang interaktif dan responsif. Terbiasa menggunakan Python, MySQL, serta tools seperti Microsoft Excel dan Google Workspace untuk kebutuhan analisis dan manajemen data. Selain itu, saya juga memiliki pengalaman dalam administrasi organisasi, termasuk pengarsipan dokumen digital, pencatatan inventaris, serta pengelolaan database internal. Aktif dalam organisasi kampus, saya terbiasa menyusun program kerja, melakukan koordinasi tim, dan mendukung berbagai kegiatan operasional.' Styling={`text-lg sm:text-xl md:text-1xl lg:text-2xl`}/> 
                </div>
            </div>
        </div>
    )
}

export default About