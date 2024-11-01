import React from "react";

const Image = ({src, alt, styleImg}) => {

    return (
        <img src={src} alt={alt} className={styleImg}/>
    )
}

export default Image