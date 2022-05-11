import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from "../../components/Main/Main";
import './About/css';
import circleImage from '../../images/angela.png'

const About = () => {
    const title = "About Me";
    const circleImageAlt = "Photo of Angela Donati"
    const aboutContent = (
        <div className="row px-3">
            <div className="col">
                <p>
                I am a full stack web developer currently enrolled in University of
                New Hampshire's Full Stack Coding Bootcamp. I am someone who loves to take their own learning and
                skill-building
                into their own hands, at their own pace. I aspire to work on projects that allow others to do the same.
                Thank you for looking!
                <div className="social-links mt-3 text-center">
                <a href="https://www.linkedin.com/in/angeladonati/" className="linkedin"><i
                    className="fab fa-linkedin fa-2x"></i></a>
                <a href="https://github.com/a-donati" className="github"><i className="fab fa-github fa-2x"></i></a>
                <a href="mailto: angeladonati93@gmail.com" className="email"><i className="fas fa-envelope fa-2x"></i></a>
              </div>
                </p>
            </div>
        </div>
    );
    return (
        <Main circleImage={circleImage} circleImageAlt={circleImageAlt} content ={aboutContent} title={title}/>
    );
};

export default About;