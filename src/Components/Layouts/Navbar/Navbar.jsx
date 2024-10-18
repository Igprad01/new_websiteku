import React, { useState } from "react";
import NavbarList from "../../Elements/NavbarList/NavbarList";
import Heading1 from "../../Elements/Heading1/Heading1";

const Navbar = () => {
    const [Open,SetOpen] = useState(false);

    const hamburger = () => {
        SetOpen(!Open);
    };
    return (
        <nav className={`w-full p-10 bg-slate-600 text-white`}>
            <div className={`container mx-auto text-2xl`}>
                <div className={`hidden justify-between md:flex items-end space-x-5`}>
                <Heading1 Text = "ini adalah teks"/>
                <NavbarList />
                </div>
            </div>
            <div className={`justify-between md:hidden flex items-end`}>
                <Heading1 Text= "ini adalah teks" />
           <button onClick={hamburger}>
           <svg viewBox="0 0 100 80" width="20" height="20">
                <rect width="100" height="20" ></rect>
                <rect y="30" width="100" height="20" ></rect>
                <rect y="60" width="100" height="20" ></rect>
            </svg>  
           </button>
            </div>
            {Open && (
                <div>
                    <NavbarList />
                </div>
            )}
        </nav>
    )
}

export default Navbar