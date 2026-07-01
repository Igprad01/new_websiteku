import { useEffect } from "react";
import Heading2 from "../../Elements/Heading2/Heading2";
import Aos from "aos";
import "aos/dist/aos.css";

const Skill = () => {

    const cardSkill = [
        {id:1, img:'/Logo/laravel.webp', alt:'Laravel'},
        {id:2, img:'/Logo/nextjs.webp', alt:'Next JS'},
        {id:3, img:'/Logo/react-js.webp', alt:'React JS'},
        {id:4, img:'/Logo/Vue.js.webp', alt:'Vue JS'},
        {id:5, img:'/Logo/tailwinds.webp', alt:'Tailwind CSS'},
        {id:7, img:'/Logo/SQL.webp', alt:'MySQL'},
        {id:9, img:'/Logo/wordpress.webp', alt:'WordPress'},
        {id:10, img:'/Logo/sheet.webp', alt:'Excel'},
        {id:11, img:'/Logo/looker-studio.webp', alt:'Looker Studio'},
        {id:12, img:'/Logo/C.webp', alt:'C'},
        {id:13, img:'/Logo/arduino.webp', alt:'Arduino Uno'},
    ]

    useEffect(()=> {
        Aos.init({duration:2000})
    }, []);

    return (
        <div data-aos="fade-up" className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8`} id="skill">
            <Heading2 Text={`Skill & Tools`} Styling={`text-center text-2xl capitalize mb-10 sm:text-3xl md:text-4xl lg:text-5xl`}/>
            <div className={`grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4`}>
                {cardSkill.map((card) => (
                     <div key={card.id} className="border box-border p-6 bg-transparent flex justify-center items-center h-full rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                          <img 
                              src={card.img} 
                              alt={card.alt} 
                              className="w-20 h-20 sm:w-24 sm:h-24 object-contain" 
                              loading="lazy" 
                              decoding="async" 
                              width="96" 
                              height="96" 
                          />
                     </div>
                ))}
            </div>
        </div>
    )
}

export default Skill