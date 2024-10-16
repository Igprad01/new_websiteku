import React from "react";


const NavbarList = () => {
    const List = ['Home','About','Project','Certification'];
    return (
        <ul className={`flex justify-end`}>
            {List.map((list) => (
                <a href="#">{list}</a>
            ))}
        </ul>
    )
}

export default NavbarList