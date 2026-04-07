import { useEffect } from "react";
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
            <Heading1 Text={'Tentang Saya'} Styling = {`text-center mb-10 text-xl capitalize sm:text-2xl md:text-3xl lg:text-4xl`} />
            <div className={`text-start border p-4 sm:text-justify px-4 md:px-8 lg:px-10`}>
                <div className={`"px-2 py-2 sm:px-4 md:px-6 lg:px-6">`}>
                <Kalimat teks = 'Halo! Saya seorang Lulusan Teknik Informatika yang berfokus pada Full Stack Development dan System Analysis. Menguasai Laravel dan React.js, saya berdedikasi menciptakan aplikasi web yang responsif, interaktif, dan berpusat pada pengguna. Tidak hanya membangun tampilan dan fitur, saya memiliki kemampuan mendalam dalam System Analysis untuk merancang alur kerja yang efisien dan arsitektur sistem yang kuat. Ketajaman logika saya diasah melalui pengalaman di bidang Robotika serta kemahiran mengelola data menggunakan Excel, Python, Looker Studio dan MySQL. Dengan pengalaman organisasi yang solid dalam administrasi dan koordinasi tim, saya membawa kombinasi unik antara kreativitas teknis, analisis mendalam, dan keteraturan manajerial dalam setiap proyek yang saya kerjakan' Styling={`text-lg sm:text-lg md:text-lg lg:text-xl`}/> 
                </div>
            </div>
        </div>
    )
}

export default About