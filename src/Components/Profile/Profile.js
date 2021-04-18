import React from 'react';
import { FaGithub, FaYoutube, FaLinkedin, FaRegClock } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi'
import './Profile.css';

const Profile = () => {

    return (
        <div className="profile-container">
            <img className="circular-img" src="https://www.lavozdelsandinismo.com/wp-estaticos/2018/07/mandarina.jpg" alt="Italian Trulli" />
            <h1> <strong> Hi! I'm Luis Arana </strong> </h1>
            <p> Engineering student in the University of San Carlos of Guatemala </p>
            <div>
                <FaGithub />
                <FaYoutube />
                <FaLinkedin />
                <FaRegClock />
                <HiMail />

            </div>
        </div>
    );      
}

export default Profile;