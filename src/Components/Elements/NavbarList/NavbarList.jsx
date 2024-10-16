import React from "react";


const NavbarList = () => {
    const List = ['home',]
    return (
        <ul>
            {List.map((list) => {
                <a href="">{list}</a>
            })}
        </ul>
    )
}

export default NavbarList