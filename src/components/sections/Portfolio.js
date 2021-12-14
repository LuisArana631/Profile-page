import React from 'react';
import './Portfolio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export const Portfolio = () => {
    return (
        <div className="section">
            <div className="content">
                <div className="portfolio-div">
                    <h2>Portfolio</h2>
                    <hr/>
                    <div className="pages-portfolio">
                        <div className="portfolio-item">
                            <a href="https://luisarana631.github.io/Pokedex-React/">
                                <span className="icon-port"><FontAwesomeIcon icon={faReact} /></span>
                                <span className="item-port-text">Pokedex using React (REDUX)</span>
                            </a>
                        </div>                              
                    </div>                    
                </div>
            </div>
        </div>
    )
}
