import React from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Card from "../../Elements/Card/Card";


const skill = () => {

    const cardSkill = [
        {id:1, img:'/Logo/react-js.png'},
        {id:2, img:'/Logo/tailwinds.png'},
        {id:3, img:'/Logo/laragon.png'},
        {id:4, img:'/Logo/wordpress.png'},
        {id:5, img:'/Logo/sheet.png'},
        {id:6, img:'/Logo/looker-studio.png'},
        {id:7, img:'/Logo/SQL.png'},
        {id:8, img:'/Logo/Vue.js.png'},
    ]

    return (
        <div className={`container mx-auto px-2 py-8 sm:px-2 lg:px-8`} id="skill">
            <Heading1 Text={`Skill`} Styling={`text-center text-xl mb-10 capitalize sm:text-2xl md:text-4xl lg:text-6xl`}/>
            <div className={`grid grid-cols-2 gap-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3`}>
                {cardSkill.map((card) => (
                     <Card key={card.id} Imgsrc={card.img} styleImage={`w-30 h-20 mx-auto  rounded-lg object-contain`} />
                ))}
            </div>
        </div>
    )
}

export default skill