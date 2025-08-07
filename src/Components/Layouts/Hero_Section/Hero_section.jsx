import React, { useEffect, useState } from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Heading2 from "../../Elements/Heading2/Heading2";
import Kalimat from "../../Elements/Paragraph/Paragraph";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection= () => {
    const TextRunning = ['front end dev', 'Data entry']
    const [textIndex, setTextIndex] = useState(0)

    useEffect(() => {
        const intervalIndex = setInterval(() => {
            setTextIndex((pratext) => (pratext + 1) % TextRunning.length);
        }, 1000);
        return () => clearInterval(intervalIndex);
    }, [TextRunning.length]);

    useEffect(() => {
        Aos.init({duration:2000});
    })


    return (
        <div data-aos="fade-up" className={`container mx-auto px-4 sm:px-6 lg:px-8 py-8`} id="home">
            <div>
            <Heading1 Text = 'putra pradwi.' Styling={`font-bold text-3xl mb-10 capitalize sm:text-4xl lg:text-5xl mb-6`} />
            <Heading2 Text = {TextRunning[textIndex]} Styling={`font-bold capitalize text-xl mb-10 sm:text-2xl lg:text-6xl mb-7`} />
          <div>
          <Kalimat teks = 'Berpengalaman 2 tahun di dunia programming, mulai dari pengembangan website dinamis dengan PHP hingga berfokus pada Vue JS. Terbiasa dengan data entry dan administrasi menggunakan Microsoft Excel, Google Workspace, Python dan mampu bekerja kolaboratif, serta siap berkembang dalam dunia teknologi ' Styling={`font-italic text-xl text-justify sm:text-xl text-start lg:text-2xl`}/>
         </div>
         <div className={`flex flex-row text-center mt-5 gap-5`}>
                    <a href="https://www.linkedin.com/in/putrapradwi/" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10`} />
                    </a>
                    <a href="https://x.com/IPradwi" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                    </a>
                    <a href="https://github.com/Igprad01" target="_blank" rel="noopener noreferrer">
                    <img src="#" alt="Github" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                    </a>
                    </div>       
            </div>
        </div>
    )
}

export default HeroSection
