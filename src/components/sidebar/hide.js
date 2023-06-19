import React from "react";
import "./hide.css";
import ProjectIcon from "../../assets/sidebar-icon/project_icon.svg";

function Hide(){
    return(
        <>
            <div id="top-container">

                <h2 className="website-name">Project M.</h2>

                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="icon" src={ProjectIcon} />

                <i class="arrow left"></i>
            </div>
        </>
    );
}

export default Hide;