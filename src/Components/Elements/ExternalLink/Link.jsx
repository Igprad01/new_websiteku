import React from "react";

const ExternalLink = ({href,konten,styling}) => {
    return (
        <a href={href} className={styling}>{konten}</a>
    )
}

export default ExternalLink