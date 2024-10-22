import React, { useState } from "react";
import NavbarList from "../../Elements/NavbarList/NavbarList";
import Toggle from "../../Elements/Toggle/Toggle";

const Navbar = () => {
    const [Open,SetOpen] = useState(false);

    const hamburger = () => {
        SetOpen(!Open);
    };
    return (
        <nav className={`relative flex justify-center items-center text-black my-12 text-2xl`}>
        <div className={`hidden md:flex bg-gray-300 rounded-full shadow-lg px-10 py-5 pl-28 cursor-pointer hover:shadow-black delay-75`}>
            <NavbarList />
        </div>
        <div className={`md:hidden flex justify-end items-end w-full pr-6`}>
            <button onClick={hamburger}>
                <svg viewBox="0 0 100 80" width="20" height="20">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>  
            </button>
        </div>
        {Open && (
            <div className={`absolute top-16 bg-slate-50 py-10 px-10 w-full text-left md:hidden`}>
                <div className={`flex flex-col space-y-4`}>
                    <NavbarList />
                </div>
            </div>
        )}
        {/* <div className="absolute right-32">
            <Toggle />
        </div> */}
    </nav>
    
    )
}

export default Navbar