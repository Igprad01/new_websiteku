import React from "react";
import Card from "../../Elements/Card/Card";
import Heading1 from "../../Elements/Heading1/Heading1";
import Button from "../../Elements/Button/Button";

const Sertifikat = () => {
    const Kartu = [
        {id:1, judul:'Data Analysis', kalimat:'ini adalah kalimat1'},
        {id:2, judul:'ini adalah judul 1', kalimat:'ini adalah kalimat1'},
        {id:3, judul:'ini adalah judul 1', kalimat:'ini adalah kalimat1'},
        {id:4, judul:'ini adalah judul 1', kalimat:'ini adalah kalimat1'}

    ]

    return (
        <div className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8`}>
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

