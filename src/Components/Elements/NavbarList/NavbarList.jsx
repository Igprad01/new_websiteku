import React from "react";


const NavbarList = () => {
    const List = ['Home','About','Project','Certification'];
    return (
        <ul className={`flex justify-end mr-10`}>
            {List.map((list) => (
                <a href="#" className={`mr-10`}>{list}</a>
            ))}
        </ul>
    )
}

export default NavbarList

