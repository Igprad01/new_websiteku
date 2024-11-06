import React, { useEffect, useState } from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Heading2 from "../../Elements/Heading2/Heading2";
import Kalimat from "../../Elements/Paragraph/Paragraph";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection= () => {
    const TextRunning = ['front end developer', 'data engineer']
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
        <div data-aos="fade-up" className={`container mx-auto px-4 sm:px-6 lg:px-8 py-8`}>
            <div>
            <Heading1 Text = 'putra pradwi.' Styling={`font-bold text-3xl mb-10 capitalize sm:text-4xl lg:text-6xl mb-6`} />
            <Heading2 Text = {TextRunning[textIndex]} Styling={`font-bold capitalize text-xl mb-10 sm:text-2xl lg:text-7xl mb-7`} />
          <div>
          <Kalimat teks = '2 tahun berpengalaman dalam dunia programming, dimulai dengan PHP untuk membangun website dinamis, lalu beralih ke C++ guna mempelajari dasar-dasar pemrograman. Saat ini sedang fokus pada React JS, khususnya dalam pengembangan website front-end' Styling={`font-italic text-xl text-justify sm:text-2xl text-start lg:text-3xl`}/>
         </div>
            </div>
        </div>
    )
}

export default HeroSection
