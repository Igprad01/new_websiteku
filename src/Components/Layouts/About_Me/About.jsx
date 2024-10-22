import React from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Kalimat from "../../Elements/Paragraph/Paragraph";

const About= () => {
    return (
        <div className={`container mx-24 my-36`}>
            <Heading1 Text={'ini adalah teks'} />
            <Kalimat teks={'ini adalah teks'} />
        </div>
    )
}

export default About