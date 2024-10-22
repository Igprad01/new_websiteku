import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Toggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button className={`btn btn-square bg-white hover:bg-white`} onClick={handle}>
            {isDarkMode ? ( <FontAwesomeIcon icon={faMoon} size="lg" />):(
                <FontAwesomeIcon icon={faSun} size="lg" />
            )}
        </button>
    )
}

export default Toggle