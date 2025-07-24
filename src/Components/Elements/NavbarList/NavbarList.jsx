import React from "react";


const NavbarList = ({styling}) => {
    const List = [
        {name: 'Home', link:'#home'},
        {name: 'About', link:'#about'},
        {name: 'Project', link:'#project'},
        {name: 'Certification', link:'#sertifikasi'},
        {name: 'Skill', link:'#skill'}
    ]
    return (
        <ul className={`mr-10 ${styling}`}>
            {List.map((list) => (
                <a href={list.link} className={`mr-10 hover:text-white delay-100 capitalize`}>{list.name}</a>
            ))}
        </ul>
    )
}

export default NavbarList

// const List = ['Home','About','Project','Certification'];