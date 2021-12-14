import React from 'react';
import './Profile.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faLinkedin, faYoutube, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

export const Profile = () => {
    return (
        <div className="section">
            <div className="content">
                <div className="left-div">        
                    <h2>Luis Arana</h2>
                    <hr/>
                    <p>
                        I'm studying Systems Engineering at University of San Carlos of Guatemala, exploring new technologies and developing software solutions using quick hacks. I'm also sharing my knowledge in youtube 😁.
                    </p>
                </div>
                <div className="right-div">
                    <div>
                        <h3>Some skills</h3>
                        <hr/>
                        <div className="skills-div">
                            <div className="skill-item">
                                <span className="icon-port"><FontAwesomeIcon icon={faReact} /></span>                                
                            </div> 
                        </div>
                    </div>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <div>
                        <h3>Connect with Me</h3>
                        <hr/>
                        <div className="skills-div">
                            <div className="skill-item">
                                <a href="https://luisarana631.github.io/Pokedex-React/">
                                    <span className="icon-port"><FontAwesomeIcon icon={faLinkedin} /></span>
                                </a>
                            </div> 
                            <div className="skill-item">
                                <a href="https://luisarana631.github.io/Pokedex-React/">
                                    <span className="icon-port"><FontAwesomeIcon icon={faYoutube} /></span>
                                </a>
                            </div> 
                            <div className="skill-item">
                                <a href="https://luisarana631.github.io/Pokedex-React/">
                                    <span className="icon-port"><FontAwesomeIcon icon={faInstagram} /></span>
                                </a>
                            </div> 
                            <div className="skill-item">
                                <a href="https://luisarana631.github.io/Pokedex-React/">
                                    <span className="icon-port"><FontAwesomeIcon icon={faGoogle} /></span>
                                </a>
                            </div> 
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
