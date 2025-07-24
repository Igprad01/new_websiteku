import React, { useEffect } from "react";
import Card from "../../Elements/Card/Card";
import Heading1 from "../../Elements/Heading1/Heading1";
import Aos from "aos";
import "aos/dist/aos.css"

const Sertifikat = () => {
    const Kartu = [
        {id:1, judul:'Data Analysis', kalimat:'Sertifikasi Penyelesaian Course FreeCodeCamp Data Analysis With Python', buttonstyle:'btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-5',kalimatButton:'click Here', link:'https://academy.dqlab.id/Certificate_check/result/DQLABFREECLASS01DSEMOH#mycertificate'},
        {id:2, judul:'Data Analysis - Python Introduction', kalimat:'Sertifikasi Penyelesaian Course Data Analysis With Python DQLab Free Class', buttonstyle:'btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-5', kalimatButton:'Click Here', link:'https://academy.dqlab.id/Certificate_check/result/DQLABINTP1VHLPVW#mycertificate'},
        {id:3, judul:'SQL Fundamental for Data Science', kalimat:'Sertifikasi penyelesaian Course SQL DQLab Free Class', buttonstyle:'btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-x mt-5', kalimatButton:'CLick Here', link:'https://academy.dqlab.id/Certificate_check/result/DQLABSQLT1RSWSFV#mycertificate'},
        {id:4, judul:'Microsoft Excel Pivot Table', kalimat:'Sertifikasi Penyelesaian Course Excel pivot Table Myskill Id', buttonstyle:'btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-5', kalimatButton:'Click Here', link:'https://drive.google.com/file/d/1nZ7h6-0pq2u8megQc0dvLTLhHa4mHDPt/view?usp=drive_link'},
        {id:5, judul:'Data Analysis With Python', kalimat:'Sertifikasi course freecodecamp data analysis with python', buttonstyle:'btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-5', kalimatButton:'Click Here', link:'https://www.freecodecamp.org/certification/Igprad/data-analysis-with-python-v7'}
    ]

    useEffect(()=> {
        Aos.init({duration:2000})
    })

    return (
        <div data-aos="fade-up" className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8`} id="sertifikasi">
           <Heading1 Text={`Certification`} Styling={`text-center text-xl mb-10 capitalize sm:text-2xl md:text-4xl lg:text-6xl`}/>
            <div className={`grid grid-cols-1 gap-7`}>
                {Kartu.map((card)=>(
                    <Card key={card.id} Title={card.judul} Teks={card.kalimat} styleHeading={`text-3xl`} StyleKalimat={`text-2xl`} styleButton={card.buttonstyle} textbutton={card.kalimatButton} Link={card.link}  />
                ))}
            </div>
        </div>

    )
    
}

export default Sertifikat

