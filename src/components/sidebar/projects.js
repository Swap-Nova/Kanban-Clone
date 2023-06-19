import React from 'react';
import "./projects.css";
import Plus from "../../assets/sidebar-icon/plus.svg";

function Projects(){
    return(
        <>
            <div id="project-header">
                <p className="heading">my projects</p>

                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="plus-icon" src={Plus} />
            </div>

            <div id="project-list">
                <ul className="main-list">
                    {/* <p className="dot-1">•</p> */}
                    <li className="list-1">Mobile App</li>
                    <p className="triple-dots">•••</p>

                    {/* <p className="dot-2">•</p> */}
                    <li className="list-2">Redesign</li>

                    {/* <p className="dot-3">•</p> */}
                    <li className="list-3">Systems</li>

                    {/* <p className="dot-4">•</p> */}
                    <li className="list-4">Wireframes</li>
                </ul>
            </div>
        </>
    )
}

export default Projects;