import DevIcon from "devicon-react-svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const devIconStyle = {
    fill: "thistle",
    width: "40px",
};

export default function About() {
    return (
        <div>
            <h3>About</h3>
            <p>
                {/* todo: put image here */}
                I am a full stack web developer currently enrolled in University of
                New Hampshire's Full Stack Coding Bootcamp. I am someone who loves to take their own learning and
                skill-building
                into their own hands, at their own pace. I aspire to work on projects that allow others to do the same.
                Thank you for looking!
                {/* todo: add social icons and links */}
                <FontAwesomeIcon icon="check-square" />
                <h4 className="mt-4">Skills </h4>
                <DevIcon icon='html5' style={devIconStyle} />
                <DevIcon icon='css3' style={devIconStyle} />
                <DevIcon icon='bootstrap' style={devIconStyle} />
                <DevIcon icon='react' style={devIconStyle} />
                <DevIcon icon='javascript' style={devIconStyle} />
                <DevIcon icon='nodejs' style={devIconStyle} />
                <DevIcon icon='mongodb' style={devIconStyle} />
                <DevIcon icon='mysql' style={devIconStyle} />

            </p>




        </div>
    );
}
