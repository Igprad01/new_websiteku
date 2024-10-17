import React from "react";
import NavbarList from "../../Elements/NavbarList/NavbarList";

const Navbar = (styling) => {
    return (
        <nav className={`w-full p-5 bg-slate-600 text-white`}>
            <div className={`container mx-auto text-xl `}>
                <NavbarList />
            </div>
        </nav>
    )
}

export default Navbar