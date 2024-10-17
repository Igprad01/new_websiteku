import React from "react";
import Navbar from './../Components/Layouts/Navbar/Navbar';
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style


const Template = () => {
    return (
        <body className="font-montserrat">
            <Navbar />
        </body>
    )
}


export default Template