const NavbarList = ({ styling = "flex items-center gap-7", active, onNavigate }) => {
    const List = [
        { name: 'Beranda', link: '#home', id: 'home' },
        { name: 'Tentang', link: '#about', id: 'about' },
        { name: 'Project', link: '#project', id: 'project' },
        { name: 'Sertifikat', link: '#sertifikasi', id: 'sertifikasi' },
        { name: 'Keahlian', link: '#skill', id: 'skill' },
    ];
    return (
        <ul className={styling}>
            {List.map((item) => (
                <li key={item.id}>
                    <a
                        href={item.link}
                        onClick={() => onNavigate && onNavigate()}
                        className={`text-[13px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                            active === item.id ? "text-[#c8a24b]" : "text-[#8a8a8a] hover:text-[#f2f0ea]"
                        }`}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default NavbarList;