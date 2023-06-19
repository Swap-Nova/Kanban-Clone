import React from 'react';
import './navbar.css'; 
import SearchIcon from '@mui/icons-material/Search';
import Calendar from "../../assets/navbar-images/calendar.svg";
import Message from "../../assets/navbar-images/message.svg";
import Notification from "../../assets/navbar-images/notification.svg";
import Face from "../../assets/sidebar-icon/face.svg";

const SearchBar = () => {
return (
        <>
            <div className="search-container">
                <i className="fa fa-search search-icon" />
                <input type="text" placeholder="Search for anything ..." className="search-input" />
                <button type="submit" className="search-button">
                    <SearchIcon />
                </button>
            </div>

            <div className="page-icons">
                <button id="button-page-icons" type="button">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img className="calendar-icon" src={Calendar} />
                </button>

                
                <button id="button-page-icons" type="button">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img className="message-icon" src={Message} />
                </button>

                <button id="button-page-icons" type="button">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img className="notification-icon" src={Notification} />
                </button>
            </div>

            <div className="profile">
                <p className="name">Anima Agarwal</p>
                <p className="location">U.P, India</p>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="face-icon" src={Face} />
                <p><i class="arrow down"></i></p>
            </div>

            <hr className="horizontal-line"></hr>
            <div className="vertical-line"><hr></hr></div>
        </>
    );
};

export default SearchBar;