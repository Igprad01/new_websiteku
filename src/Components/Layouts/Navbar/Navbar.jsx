import React, { useState } from "react";
import NavbarList from "../../Elements/NavbarList/NavbarList";
import Heading1 from "../../Elements/Heading1/Heading1";

const Navbar = () => {
    const [Open,SetOpen] = useState(false);

    const hamburger = () => {
        SetOpen(!Open);
    };
    return (
        <nav className={`sticky top-10 flex justify-center items-center text-black my-12 text-2xl`}>
        <div className={`hidden md:flex bg-gray-300 rounded-full shadow-lg px-10 py-5 pl-28 cursor-pointer hover:shadow-black delay-75`}>
            <NavbarList />
        </div>
        <div className={`md:hidden flex justify-end items-end w-full pr-6`}>
            <button onClick={hamburger} >
                <svg viewBox="0 0 100 80" width="20" height="20">
                  <rect width="100" height="20" fill="white"></rect>
                  <rect y="30" width="100" height="20" fill="white"></rect>
                  <rect y="60" width="100" height="20" fill="white"></rect>
                </svg> 
            </button>
        </div>
        {Open && (
           <div className="absolute top-20 right-10 left-5 overflow-visible bg-white px-5 py-5 items-center rounded-lg md:hidden z-10">
           <NavbarList styling={`flex flex-col justify-start space-y-3 text-lg sm:text-xl`} />
         </div>
                 
        )}
        {/* <div className="absolute right-32">
            <Toggle />
        </div> */}
    </nav>
    
    )
}

export default Navbar

