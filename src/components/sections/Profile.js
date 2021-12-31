import React from 'react';
import './Profile.css';

import profilePicture from '../../assets/img/foto.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faLinkedin, faYoutube, faGoogle, faNodeJs, faGithub, faHtml5, faCss3, faDocker, faMarkdown, faJs } from '@fortawesome/free-brands-svg-icons';

export const Profile = () => {
    return (
        <div id="profile" className="section">
            <div className="content">
                <div className="left-div">    
                    <div className="div-container-info">
                        <img className="profile-pic" src={profilePicture} alt="Profile"/>
                        
                        <h2><b>Luis Arana</b></h2>
                        <br className="br-display"/>
                        <hr/>
                        <br/>
                        <p>
                            I'm studying Systems Engineering at University of San Carlos of Guatemala, exploring new technologies and developing software solutions using quick hacks. I'm also sharing my knowledge in youtube 😁.
                        </p>
                        <br className="br-display"/>
                        <p>
                            <b>Email:</b> luarana631@gmail.com
                        </p>
                    </div>
                </div>
                <div className="right-div">
                    
                    <div className="div-container-info">
                        <div>
                            <h3>Some skills</h3>
                            <hr/>
                            <div className="skills-div">
                                <div className="skill-item">
                                    <span className="icon-port"><FontAwesomeIcon icon={faReact} /></span>                                
                                </div> 

                                <div className="skill-item">
                                    <span className="icon-port"><FontAwesomeIcon icon={faJs} /></span>                                
                                </div> 

                                <div className="skill-item">
                                    <span className="icon-port"><FontAwesomeIcon icon={faNodeJs} /></span>                                
                                </div> 

                                <div className="skill-item">
                                    <span className="icon-port"><FontAwesomeIcon icon={faDocker} /></span>                                
                                </div> 

                                <div className="skill-item">
                                    <span className="icon-port"><FontAwesomeIcon icon={faMarkdown} /></span>                                
                                </div> 

                                <div className="skill-item">
                                    <span className="icon-port"><FontAwesomeIcon icon={faGithub} /></span>                                
                                </div> 

                                <div className="skill-item">
                                    <span className="icon-port"><FontAwesomeIcon icon={faHtml5} /></span>                                
                                </div> 

                                <div className="skill-item">
                                    <span className="icon-port"><FontAwesomeIcon icon={faCss3} /></span>                                
                                </div> 


                            </div>
                        </div>
                        
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <div>
                            <h3>Connect with Me</h3>
                            <hr/>
                            <div className="skills-div">
                                <div className="skill-item action-btn">
                                    <a className="enlace" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/luis-arana-a44598191/">
                                        <span className="icon-port"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    </a>
                                </div> 
                                <div className="skill-item action-btn">
                                    <a className="enlace" rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCglXczWYAsCmJmY_iTXzSxQ">
                                        <span className="icon-port"><FontAwesomeIcon icon={faYoutube} /></span>
                                    </a>
                                </div> 
                                <div className="skill-item action-btn">
                                    <a className="enlace" rel="noreferrer" target="_blank" href="https://www.instagram.com/luis_fer631/">
                                        <span className="icon-port"><FontAwesomeIcon icon={faGithub} /></span>
                                    </a>    
                                </div> 
                                <div className="skill-item action-btn">
                                    <a className="enlace" rel="noreferrer" target="_blank" href="https://mailto:luarana631@gmail.com">
                                        <span className="icon-port"><FontAwesomeIcon icon={faGoogle} /></span>
                                    </a>
                                </div> 
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
