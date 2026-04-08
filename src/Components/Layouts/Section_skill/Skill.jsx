import { useEffect } from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Aos from "aos";
import "aos/dist/aos.css";

const Skill = () => {

    const cardSkill = [
        {id:1, img:'/Logo/laravel.png', alt:'Laravel'},
        {id:2, img:'/Logo/nextjs.png', alt:'Next JS'},
        {id:3, img:'/Logo/react-js.png', alt:'React JS'},
        {id:4, img:'/Logo/Vue.js.png', alt:'Vue JS'},
        {id:5, img:'/Logo/tailwinds.png', alt:'Tailwind CSS'},
        {id:7, img:'/Logo/SQL.png', alt:'MySQL'},
        {id:9, img:'/Logo/wordpress.png', alt:'WordPress'},
        {id:10, img:'/Logo/sheet.png', alt:'Excel'},
        {id:11, img:'/Logo/looker-studio.png', alt:'Looker Studio'},
        {id:12, img:'/Logo/C.png', alt:'C'},
        {id:13, img:'/Logo/arduino.png', alt:'Arduino Uno'},
    ]

    useEffect(()=> {
        Aos.init({duration:2000})
    }, []);

    return (
        <div data-aos="fade-up" className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8`} id="skill">
            <Heading1 Text={`Skill & Tools`} Styling={`text-center text-2xl capitalize mb-10 sm:text-3xl md:text-4xl lg:text-5xl`}/>
            <div className={`grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4`}>
                {cardSkill.map((card) => (
                     <div key={card.id} className="border box-border p-6 bg-transparent flex justify-center items-center h-full rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                         <img src={card.img} alt={card.alt} className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
                     </div>
                ))}
            </div>
        </div>
    )
}

export default Skill