import React from "react";

const Heading2 = ({Text, Styling}) => {
    return (
        <h2 className={`${Styling}`}>{Text}</h2>
    )
}

export default Heading2