import React from 'react'
import './Sidebar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faFileCode } from '@fortawesome/free-regular-svg-icons';

export const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <ul>
                    <li className="list active">
                        <a href="/">
                            <span className="icon"><FontAwesomeIcon icon={faIdBadge} /></span>
                            <span className="title">Profile</span>
                        </a>                    
                    </li>
                    <li className="list">
                        <a href="/">
                            <span className="icon"><FontAwesomeIcon icon={faFileCode}/></span>
                            <span className="title">Portfolio</span>
                        </a>
                    </li>
                    <div className="indicator">

                    </div>
                </ul>
            </div>
        </div>
    )
}
