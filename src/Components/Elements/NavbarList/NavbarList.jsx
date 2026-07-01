const NavbarList = ({styling}) => {
    const List = [
        {name: 'Home', link:'#home'},
        {name: 'About', link:'#about'},
        {name: 'Project', link:'#project'},
        {name: 'Certification', link:'#sertifikasi'},
        {name: 'Skill', link:'#skill'}
    ]
    return (
        <ul className={`flex mr-10 ${styling ? styling : 'flex-row'}`}>
            {List.map((list) => (
                <li key={list.name}>
                    <a href={list.link} className={`mr-10 hover:text-white delay-100 capitalize`}>{list.name}</a>
                </li>
            ))}
        </ul>
    )
}   

export default NavbarList

// const List = ['Home','About','Project','Certification'];