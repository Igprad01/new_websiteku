import { useEffect } from "react";
import Card from "../../Elements/Card/Card";
import Heading1 from "../../Elements/Heading1/Heading1";
import Aos from "aos";
import "aos/dist/aos.css"

const Sertifikat = () => {
    const Kartu = [
        {id:1, judul:'Data Analysis', kalimat:'Sertifikasi Penyelesaian Course FreeCodeCamp Data Analysis With Python.', buttonstyle:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide',kalimatButton:'Lihat Sertifikat', link:'https://academy.dqlab.id/Certificate_check/result/DQLABFREECLASS01DSEMOH#mycertificate'},
        {id:2, judul:'Data Analysis - Python Introduction', kalimat:'Sertifikasi Penyelesaian Course Data Analysis With Python DQLab Free Class.', buttonstyle:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Sertifikat', link:'https://academy.dqlab.id/Certificate_check/result/DQLABINTP1VHLPVW#mycertificate'},
        {id:3, judul:'SQL Fundamental for Data Science', kalimat:'Sertifikasi Penyelesaian Course SQL DQLab Free Class.', buttonstyle:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Sertifikat', link:'https://academy.dqlab.id/Certificate_check/result/DQLABSQLT1RSWSFV#mycertificate'},
        {id:4, judul:'Microsoft Excel Pivot Table', kalimat:'Sertifikasi Penyelesaian Course Excel Pivot Table MySkill.', buttonstyle:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Sertifikat', link:'https://drive.google.com/file/d/1nZ7h6-0pq2u8megQc0dvLTLhHa4mHDPt/view?usp=drive_link'},
        {id:5, judul:'Data Analysis With Python', kalimat:'Sertifikasi Course FreeCodeCamp Data Analysis With Python.', buttonstyle:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Sertifikat', link:'https://www.freecodecamp.org/certification/Igprad/data-analysis-with-python-v7'}
    ]

    useEffect(()=> {
        Aos.init({duration:2000})
    }, []);

    return (
        <div data-aos="fade-up" className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8`} id="sertifikasi">
           <Heading1 Text={`Certification`} Styling={`text-center text-2xl capitalize mb-10 sm:text-3xl md:text-4xl lg:text-5xl`}/>
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
                {Kartu.map((card)=>(
                    <Card key={card.id} Title={card.judul} Teks={card.kalimat} styleHeading={`font-bold mt-4 mb-3 text-center text-xl sm:text-lg md:text-xl`} StyleKalimat={`mt-3 mb-4 text-justify text-slate-300 text-sm sm:text-base md:text-base`} styleButton={card.buttonstyle} textbutton={card.kalimatButton} Link={card.link} />
                ))}
            </div>
        </div>

    )
    
}

export default Sertifikat

