
import React, { useState } from "react";
import "./header.css";

const Header = () => {
    /*=============== Toggle menu =============*/
    const [Toggle, showMenu] = useState(false);

    const handleToggle = () => {
        showMenu(!Toggle);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Keshav</a>
                <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active_link">
                                <i className="uil uil-estate nav_icon"></i>Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav_icon"></i> About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>
                        {/* Add more nav items here */}
                    </ul>
                    <i className="uil uil-times nav_close" onClick={handleToggle}></i>
                </div>
                <div className="nav_toggle" onClick={handleToggle}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;