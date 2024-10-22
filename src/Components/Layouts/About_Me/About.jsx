import React from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Kalimat from "../../Elements/Paragraph/Paragraph";

const About= () => {
    return (
        <div className={`container mx-60 my-36`}>
            <Heading1 Text={'ini adalah teks'} Styling = 'text-center mb-10' />
            <div className={`text-justify border border-white`}>
                <Kalimat teks = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' Styling={`px-5 py-2`} /> 
            </div>
        </div>
    )
}

export default About