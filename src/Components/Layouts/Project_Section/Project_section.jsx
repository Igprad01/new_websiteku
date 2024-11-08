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
        {id:1, title:'Portofolio Old', teks:'Project website pertama yang terdiri dari Skills dan beberapa project lama pada website tersebut', img:'src/image/newPortofolio.png'},
        {id:2, title:'Ucapan Hari Raya Idul Fitri', teks:'Sebuah Project yang dibuat untuk mengucapkan Selamat Hari Raya Idul Fitri, pada website tersebut terdapat beberapa fitur button yang langsung mengarah ke dana kaget, user yang mengakses nya mendapatkan gift THR dari website ini',img:'src/image/idulFitri.png'},
        {id:3, title:'Website Film ', teks:'website film random dengan menggunakan API free film, beberapa fitur masih coming soon yang nantinya update lagi', img:'src/image/MoviesWeb.png'},
        {id:4, title:'Auto Random Color', teks:'project random dengan melihat warna warni pada box yang sudah disediakan', img:'/src/image/randomColor.png'},
    ]

    return (
        <div data-aos="fade-up" className={`container mx-auto px-4 py-8  sm:px-6 lg:px-8`}>
            <Heading1 Text={`Project`} Styling={`text-center text-xl capitalize mb-10 sm:text-2xl md:text-4xl lg:text-6xl`}/>
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 `}>
                {card.map((card)=>(
                    <Card key={card.id} Title={card.title} Teks={card.teks} Imgsrc={card.img} styleImage={`w-3/4 mx-auto rounded-xl`} styleHeading={`font-bold text-xl mx-15 mb-5 text-center`} StyleKalimat={`mt-5 mx-0 text-lg sm:mx-20 text-justify text-xl md:text-2xl`} />
                ))}
            </div>
        </div>
    );
};

export default Section_Project;
