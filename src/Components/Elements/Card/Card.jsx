import React from "react";
import Heading1 from "../Heading1/Heading1";
import Kalimat from "../Paragraph/Paragraph";
import Image from "../../image/Image";

const Card = ({Teks,Title,styleHeading,Imgsrc, Ket, styleImage, StyleKalimat, ButtonText,styleButton}) => {
    
    return (
        <div className={`border box-border px-3 py-3 bg-transparent`}>
            <div className={`mx-auto`}>
            <Heading1 Text={Title} Styling={styleHeading} />
            <Image src={Imgsrc} alt={Ket} styleImg={styleImage}/>
            <Kalimat teks={Teks} Styling={StyleKalimat}/>
            </div>
        </div>
    )
}

export default Card