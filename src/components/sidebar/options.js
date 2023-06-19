import React from "react";
import Home from "../../assets/sidebar-icon/home.svg";
import Messages from "../../assets/sidebar-icon/messages.svg";
import Tasks from "../../assets/sidebar-icon/tasks.svg";
import Members from "../../assets/sidebar-icon/members.svg";
import Settings from "../../assets/sidebar-icon/settings.svg";
import "./options.css";

function options(){
    return(
        <> 
            <div id="icon-text">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="home-icon-1" src={Home} />
                <p className="text-1">Home</p>

                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="home-icon-2" src={Messages} />
                <p className="text-2">Messages</p>

                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="home-icon-3" src={Tasks} />
                <p className="text-3">Tasks</p>

                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="home-icon-4" src={Members}/>
                <p className="text-4">Members</p>

                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="home-icon-5" src={Settings} />
                <p className="text-5">Settings</p>
            </div>

            <hr className="horizontal-line-1" />
        </>
    );
}

export default options;