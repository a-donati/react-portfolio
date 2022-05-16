import React from "react";
import { Link } from 'react-router-dom';
import resume from '../../files/angela-donati-portfolio-resume.docx.pdf';
import './Navigation.css'



function Navigation() {
  return (


    <nav className="navbar navbar-dark bg-dark navbar-inverse d-block">

      <Link to="/" className="navbar-brand">Angela Donati</Link>
      <Link to="/Portfolio" className="nav-item m-2">Portfolio</Link>
      <Link to="/Contact" className="nav-item m-2">Contact</Link>
      <Link to={resume} className="nav-item m-2">Resume</Link>

    </nav>


  );

}


export default Navigation