import React from 'react';
import "./thoughts.css";
import Bulb from "../../assets/sidebar-icon/bulb.svg";

function Thoughts(){
    return(
        <>
            <div id="background-container"></div>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img className="bulb-icon" src={Bulb} />

            <div id="thought-container">
                <p className="thoughts-heading">
                Thoughts Time
                </p>
                <p className="quote">
                We don't have any notice for you, till then you can share your thoughts with your peers.
                </p>
            </div>
        </>
    );
}

export default Thoughts;