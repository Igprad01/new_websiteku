import React from "react";
import Heading1 from "../Heading1/Heading1";
import Kalimat from "../Paragraph/Paragraph";

const Card = ({Teks,Title}) => {
    
    return (
        <div className={`border box-border py-10 px-10 bg-slate-600 `}>
            <div className={``}>
            <Heading1 Text={Title} />
            <Kalimat teks={Teks} />
            </div>
        </div>
    )
}

export default Card