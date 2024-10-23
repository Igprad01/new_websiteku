import React from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Kalimat from "../../Elements/Paragraph/Paragraph";

const About= () => {
    return (
        <div className={`container mx-auto my-40 px-6 sm:px-6 md:px-10 lg:px-12`}>
            <Heading1 Text={'ini adalah teks'} Styling = {`text-center mb-10 text-xl capitalize sm:text-2xl md:text-4xl lg:text-6xl`} />
            <div className={`text-justify border border-white p-4 sm:px-4 md:px-8 lg:px-10`}>
                <Kalimat teks = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' Styling={`px-2 py-2 sm:px-4 md:px-6 lg:px-6`} /> 
            </div>
        </div>
    )
}

export default About