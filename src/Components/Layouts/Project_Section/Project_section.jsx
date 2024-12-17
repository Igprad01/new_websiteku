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
        {id:1, title:'Portofolio Old', teks:'Project website pertama yang terdiri dari Skills dan beberapa project lama pada website tersebut', img:'/img/newPortofolio.png', stylingklik:'btn btn-primary mx-20 my-24 lg:mx-56', kalimatButton:'ini adalah button'},
        {id:2, title:'Ucapan Hari Raya Idul Fitri', teks:'Sebuah Project yang dibuat untuk mengucapkan Selamat Hari Raya Idul Fitri, pada website tersebut terdapat beberapa fitur button yang langsung mengarah ke dana kaget, user yang mengakses nya mendapatkan gift THR dari website ini',img:'/img/idulFitri.png', stylingklik:'btn btn-primary mx-20 my-4 lg:mx-56', kalimatButton:'ini adalah button'},
        {id:3, title:'Website Film ', teks:'website film random dengan menggunakan API free film, beberapa fitur masih coming soon yang nantinya update lagi', img:'/img/MoviesWeb.png', stylingklik:'btn btn-primary mx-20 my-4 lg:mx-56', kalimatButton:'ini adalah button'},
        {id:4, title:'Auto Random Color', teks:'project random dengan melihat warna warni pada box yang sudah disediakan', img:'/img/randomColor.png', stylingklik:'btn btn-primary mx-20 my-12 lg:mx-56', kalimatButton:'ini adalah button'},
    ]

    return (
        <div data-aos="fade-up" className={`container mx-auto px-4 py-8  sm:px-6 lg:px-8`} id="project">
            <Heading1 Text={`Project`} Styling={`text-center text-xl capitalize mb-10 sm:text-2xl md:text-4xl lg:text-6xl`}/>
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 `}>
                {card.map((card)=>(
                    <Card key={card.id} Title={card.title} Teks={card.teks} Imgsrc={card.img} styleImage={`w-3/4 mx-auto rounded-xl`} styleHeading={`font-bold text-xl mx-15 mb-5 text-center`} StyleKalimat={`mt-5 mx-0 text-lg sm:mx-20 text-xl md:text-2xl`} styleButton={card.stylingklik} textbutton={card.kalimatButton}/>
                ))}
            </div>
        </div>
    );
};

export default Section_Project;

//  kurang responsif pada card button
// kurang button pada certificate 