import React from "react";
import './Sidebar.css';
import { HashRouter, Link } from 'react-router-dom';
import resume from '../../files/angela-donati-portfolio-resume.docx.pdf';

const Sidebar = () => {
    const handleClick = () => {
        document.querySelector('.sidebar').style.width = "0px";
    };

    return (
        <HashRouter>
            <aside className="sidebar" onBlur={handleClick}>
                <div id="close-menu">
                    <i className="fas fa-window-close fa-2x"
                    id="hamburger-close"
                    onClick={handleClick}></i>
                </div>
                <div className="list-group list-group-flush sidebar-links h4">
                    <Link to="/" className="list-group-item">
                        About
                    </Link>
                    <Link to="/portfolio" className="list-group-item">
                        Portfolio
                    </Link>
                    <a href={resume}
                    target="_blank"
                    className="list-group-item"
                    >
                        Resume
                    </a>
                    {/* social links */}
                    <a href="https://github.com/a-donati" target="_blank">
                        <i className="fab fa-github-square fa-3x mr-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/angeladonati/" target="_blank">
                        <i className="fab fa-linkedin fa-3x mr-2"></i>
                    </a>
                    <a href="mailto:angeladonati93@gmail.com" target="_blank">
                        <i className="fas fa-envelope-square fa-3x"></i>
                    </a>
                </div>
            </aside>
        </HashRouter>
    );
};

export default Sidebar