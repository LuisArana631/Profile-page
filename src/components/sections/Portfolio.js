import React from 'react';
import './Portfolio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

export const Portfolio = () => {
    return (
        <div id="portfolio" className="section">
            <div className="content">
                <div className="portfolio-div">
                    <h2>Portfolio</h2>
                    <hr className="portfolio-title"/>
                    <div className="pages-portfolio">
                        <div className="portfolio-item action-btn">
                            <a className="enlace" rel="noreferrer" target="_blank" href="https://luisarana631.github.io/Pokedex-React/">
                                <span className="icon-port"><FontAwesomeIcon icon={faReact} /></span>
                                <span className="item-port-text">Pokedex using React (REDUX)</span>
                            </a>
                        </div>         

                        <div className="portfolio-item action-btn">
                            <a className="enlace" rel="noreferrer" target="_blank" href="https://luisarana631.github.io/MatrioshTS_Traductor/home">
                                <span className="icon-port"><FontAwesomeIcon icon={faJs} /></span>
                                <span className="item-port-text">Matriosh TS using Ionic</span>
                            </a>
                        </div>                                

                        <div className="portfolio-item action-btn">
                            <a className="enlace" rel="noreferrer" target="_blank" href="https://luisarana631.github.io/Energy-Blog-IT3">
                                <span className="icon-port"><FontAwesomeIcon icon={faAngular} /></span>
                                <span className="item-port-text">Energies blog using Angular</span>
                            </a>
                        </div>                                

                    </div>                    
                </div>
            </div>
        </div>
    )
}
