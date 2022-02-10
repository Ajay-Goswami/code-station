import React from 'react';
import './Header.css';
// import codePic from '../../images/kate-trysh-mkQBVya-1fM-unsplash.jpg';
// import codePic from '../../images/bryan-natanael-hR8l1s4u8QE-unsplash.jpg';
import codePic from '../../images/toms-rits-9wMOajylJGU-unsplash.jpg';


function Header() {
    return (
        <div className="header-section">
            <div className="hero-text">
                <span className="hero-text-title">Code-Station</span>
                <span className="hero-text-subtitle">Property Listing</span>
            </div>
            {/* <img className="hero-img" src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
            <img className="hero-img" src={codePic} alt="this is user image" />
        </div>
    )
}

export default Header
