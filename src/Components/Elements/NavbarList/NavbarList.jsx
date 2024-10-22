import React from "react";


const NavbarList = ({styling}) => {
    const List = ['Home','About','Project','Certification'];
    return (
        <ul className={`mr-10 ${styling}`}>
            {List.map((list) => (
                <a href="#" className={`mr-10 hover:text-white delay-100`}>{list}</a>
            ))}
        </ul>
    )
}

export default NavbarList

