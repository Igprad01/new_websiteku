import Heading1 from "../Heading1/Heading1";
import Kalimat from "../Paragraph/Paragraph";
import Image from "../../image/Image";

const Card = ({Teks,Title,styleHeading,Imgsrc, Ket, styleImage, StyleKalimat,styleButton, textbutton, Link, stack}) => {

    
    return (
        <div className={`border box-border px-3 py-6 bg-transparent flex flex-col h-full rounded-md shadow-sm hover:shadow-md transition-shadow`}>
            <Heading1 Text={Title} Styling={styleHeading} />
            <Image src={Imgsrc} alt={Ket} styleImg={styleImage}/>
            <Kalimat teks={Teks} Styling={StyleKalimat}/>
            {stack && stack.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-3 mt-2 mb-4">
                    {stack.map((tech, idx) => (
                        <div key={idx} className="tooltip tooltip-bottom" data-tip={tech.name}>
                            <img src={tech.icon} alt={tech.name} className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-300" />
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-auto text-center pt-8 pb-3">
                <a href={`${Link}`} target="_blank" rel="noopener noreferrer">
                    <button className={`${styleButton}`}>{textbutton}</button>
                </a>
            </div>
        </div>
    )
}

export default Card