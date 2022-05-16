import DevIcon from "devicon-react-svg";
import photo from '../../images/angela.png'
import './About.css'

const devIconStyle = {
  fill: "rgb(244, 190, 244)",
  width: "40px",
};

export default function About() {
  return (
    <div>
      <main id="main">
        <div className="container-fluid p-0">
          <div id="about" class="about d-flex">
            <div class="container">
              <div className="no">
                <h3 className="about-title">About</h3>
                <div class="photo d-flex flex-center p-3">    <img className="img-fluid img-profile mx-auto img-fluid rounded-circle"
                  src={photo} alt="Angela Donati photo"></img>          </div>
                <p>
                  I am a full stack web developer currently enrolled in University of
                  New Hampshire's Full Stack Coding Bootcamp. I am someone who loves to take their own learning and
                  skill-building
                  into their own hands, at their own pace. I aspire to work on projects that allow others to do the same.
                  Thank you for looking!

                </p>

                <div className="social-links mt-3 text-center">
                  <a href="https://www.linkedin.com/in/angeladonati/" className="linkedin" aria-label="Linkedin profile"><i
                    className="fab fa-linkedin fa-2x m-2"></i></a>
                  <a href="https://github.com/a-donati" aria-label="a-donati Github profile" className="github"><i
                    className="fab fa-github fa-2x m-2"></i></a>
                  <a href="mailto: angeladonati93@gmail.com" className="email" aria-label="Email angeladonati93@gmail.com"><i
                    className="fas fa-envelope fa-2x m-2"></i></a>
                </div>

              </div></div></div></div></main>

      <h4 className="mt-4 title">Programming Languages &amp; Tools </h4>
      <DevIcon icon='html5' style={devIconStyle} />
      <DevIcon icon='css3' style={devIconStyle} />
      <DevIcon icon='bootstrap' style={devIconStyle} />
      <DevIcon icon='react' style={devIconStyle} />
      <DevIcon icon='javascript' style={devIconStyle} />
      <DevIcon icon='nodejs' style={devIconStyle} />
      <DevIcon icon='mongodb' style={devIconStyle} />
      <DevIcon icon='mysql' style={devIconStyle} />





    </div>
  );
}
