import React from "react";

const Heading1 = ({Text, Styling}) => {
    return (
        <h1 className={`${Styling}`}>{Text}</h1>
    )
};

export default Heading1

