import React from 'react';
import Header from '../header/Header';
import './TopBar.css';
import { NavLink } from 'react-router-dom';
import pic from '../../images/wallpaperflare.com_wallpaper.jpg';

//React component returns JSX kind on markup
function TopBar() {
    return (
        <div>
            <div className="topbar">
                <div className="topbar-left">
                    <i className="topbar-social-icon fab fa-instagram"></i>
                    <i className="topbar-social-icon fab fa-facebook"></i>
                    <i className="topbar-social-icon fab fa-linkedin" ></i>
                    <i className="topbar-social-icon fab fa-twitter"></i>
                </div>
                <div className="topbar-center">
                    <ul className="topbar-list">
                        <li className="topbar-list-item">
                            <NavLink to="/">HOME</NavLink>
                        </li>
                        <li className="topbar-list-item">ABOUT</li>
                        <li className="topbar-list-item">CONTACT</li>
                        <li className="topbar-list-item"><NavLink to="/create">CREATE PROPERTY</NavLink></li>
                        <li className="topbar-list-item">LOGOUT</li>
                    </ul>
                </div>
                <div className="topbar-right">
                    <img className="topbar-profile-pic" src={pic} alt="this is user image" />
                    <i className="topbar-search fas fa-search"></i>
                </div>
            </div>
        </div>
    )
}

export default TopBar
