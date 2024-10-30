// Section_Project.js
import React from "react";
import Card from "../../Elements/Card/Card";
import Heading1 from "../../Elements/Heading1/Heading1";

const Section_Project = () => {
    const card = [
        {id:1, title:'ini adalah teks', teks:'ini adalah teks'},
        {id:2, title:'ini adalah teks', teks:'ini adalah teks'},
        {id:3, title:'ini adalah teks', teks:'ini adalah teks'},
        {id:4, title:'ini adalah teks', teks:'ini adalah teks'},
        {id:5, title:'ini adalah teks', teks:'ini adalah teks'},
        {id:6, title:'ini adalah teks', teks:'ini adalah teks'},
    ]

    return (
        <div className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8 `}>
            <Heading1 Text={`ini adalah judul`} Styling={`text-center text-2xl mb-10 capitalize font bold sm:text-3xl md:text-4xl`}/>
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 `}>
                {card.map((card)=>(
                    <Card key={card.id} Title={card.title} Teks={card.teks}/>
                ))}
            </div>
        </div>
    );
};

export default Section_Project;
