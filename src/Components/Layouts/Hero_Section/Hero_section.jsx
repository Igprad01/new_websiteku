import { useEffect, useState } from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Heading2 from "../../Elements/Heading2/Heading2";
import Kalimat from "../../Elements/Paragraph/Paragraph";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection= () => {
    const TextRunning = ['Full Stack Developer', 'System Analysis','Trainne Robotika']
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
            <Heading1 Text = 'i gusti bagus putra pradwi' Styling={`font-bold text-2xl  capitalize sm:text-2xl lg:text-4xl mb-6`} />
            <Heading2 Text = {TextRunning[textIndex]} Styling={`font-bold capitalize text-2xl mb-10 sm:text-2xl lg:text-4xl mb-7`} />
          <div>
          <Kalimat teks = 'Full Stack Developer & Data Analyst dengan 3 tahun pengalaman dalam Laravel dan React Js. Ahli dalam System Analysis dan Pengolahan Data Excel, Python dan Looker Studio. Memiliki latar belakang Trainne Robotika yang memperkuat logika teknis, serta terbiasa bekerja kolaboratif untuk solusi teknologi yang inovatif. ' Styling={`font-italic text-xl text-justify sm:text-lg text-start lg:text-xl`}/>
         </div>
         <div className={`flex flex-row text-center mt-5 gap-5`}>
                    <a href="https://www.linkedin.com/in/putrapradwi/" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10`} />
                    </a>
                    <a href="https://x.com/IPradwi" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10`} />
                    </a>
                    <a href="https://github.com/Igprad01" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="Github" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                    </a>
                    </div>       
            </div>
        </div>
    )
}

export default HeroSection
