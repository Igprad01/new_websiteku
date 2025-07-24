// Section_Project.js
import React, { useEffect } from "react";
import Card from "../../Elements/Card/Card";
import Heading1 from "../../Elements/Heading1/Heading1";
import Aos from "aos";
import "aos/dist/aos.css"

const Section_Project = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    })
    const card = [
        {id:1, title:'Portofolio Old', teks:'Project website pertama yang terdiri dari Skills dan beberapa project lama pada website tersebut', img:'/img/newPortofolio.png', stylingklik:'btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl lg:mx-64 lg:my-32', kalimatButton:'click Here', link:'https://putrapradwi.vercel.app/'},
        {id:2, title:'Ucapan Hari Raya Idul Fitri', teks:'Sebuah Project yang dibuat untuk mengucapkan Selamat Hari Raya Idul Fitri, pada website tersebut terdapat beberapa fitur button yang langsung mengarah ke dana kaget, user yang mengakses nya mendapatkan gift THR dari website ini',img:'/img/idulFitri.png', stylingklik:'btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl  lg:mx-64 lg:my-10', kalimatButton:'Click Here', link:'https://idulfitri-nine.vercel.app/'},
        {id:3, title:'App Patungan ', teks:'Project sederhana untuk mengisi waktu luang yang berfungsi untuk menghitung biaya patungan bersama dengan teman-teman tercinta', img:'/img/Apppatungan.png', stylingklik:'btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl  lg:mx-64 lg:my-10', kalimatButton:'Click here', link:'https://patunganapp.vercel.app/'},
        {id:4, title:'Auto Random Color', teks:'project random dengan melihat warna warni pada box yang sudah disediakan', img:'/img/randomColor.png', stylingklik:'btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl  lg:mx-64 lg:my-16 ', kalimatButton:'Click Here', link:'https://auto-random-color.vercel.app/'},
    ]

    return (
        <div data-aos="fade-up" className={`container mx-auto px-4 py-8  sm:px-6 lg:px-8`} id="project">
            <Heading1 Text={`Project`} Styling={`text-center text-xl capitalize mb-10 sm:text-2xl md:text-4xl lg:text-6xl`}/>
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 `}>
                {card.map((card)=>(
                    <Card key={card.id} Title={card.title} Teks={card.teks} Imgsrc={card.img} styleImage={`w-3/4 mx-auto rounded-xl`} styleHeading={`font-bold text-xl mx-15 mb-5 text-center`} StyleKalimat={`mt-5 mx-0 text-lg sm:mx-20 text-xl md:text-2xl`} styleButton={card.stylingklik} textbutton={card.kalimatButton} Link={card.link}/>
                ))}
            </div>
        </div>
    );
};

export default Section_Project;

//  kurang responsif pada card button
// kurang button pada certificate 