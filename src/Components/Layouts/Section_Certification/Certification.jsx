import React, { useEffect } from "react";
import Card from "../../Elements/Card/Card";
import Heading1 from "../../Elements/Heading1/Heading1";
import Aos from "aos";
import "aos/dist/aos.css"

const Sertifikat = () => {
    const Kartu = [
        {id:1, judul:'Data Analysis', kalimat:'Sertifikasi Penyelesaian Course FreeCodeCamp Data Analysis With Python'},
        {id:2, judul:'Data Analysis - Python Introduction', kalimat:'Sertifikasi Penyelesaian Course Data Analysis With Python DQLab Free Class'},
        {id:3, judul:'SQL Fundamental for Data Science', kalimat:'Sertifikasi penyelesaian Course SQL DQLab Free Class'},
        {id:4, judul:'Microsoft Excel Pivot Table', kalimat:'Sertifikasi Penyelesaian Course Excel pivot Table Myskill Id'}

    ]

    useEffect(()=> {
        Aos.init({duration:2000})
    })

    return (
        <div data-aos="fade-up" className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8`}>
           <Heading1 Text={`Certification`} Styling={`text-center text-xl mb-10 capitalize sm:text-2xl md:text-4xl lg:text-6xl`}/>
            <div className={`grid grid-cols-1 gap-7`}>
                {Kartu.map((card)=>(
                    <Card key={card.id} Title={card.judul} Teks={card.kalimat} styleHeading={`text-3xl`} StyleKalimat={`text-2xl`} />
                ))}
            </div>
        </div>

    )
    
}

export default Sertifikat

