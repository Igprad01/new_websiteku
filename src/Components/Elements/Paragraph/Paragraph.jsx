import React from "react";

const Kalimat = ({teks, Styling}) => {
    return (
        <p className={`${Styling}`}>{teks}</p>
    )
}

export default Kalimat