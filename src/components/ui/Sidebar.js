/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './Sidebar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faFileCode } from '@fortawesome/free-regular-svg-icons';

export const Sidebar = () => {

    useEffect(() => {
        let list = document.querySelectorAll('.list');
        for (let i=0; i<list.length; i++){
            list[i].onclick = function() {
                let j = 0;
                while (j < list.length){
                    list[j++].className = 'list';
                }
                list[i].className = 'list active';
            }
        }
    });

    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <ul>
                    <li className="list active">
                        <a onClick={() => {
                                        const anchor = document.querySelector('#profile')
                                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}
                            >
                            <span className="icon"><FontAwesomeIcon icon={faIdBadge} /></span>
                            <span className="title">Profile</span>
                        </a>                    
                    </li>
                    <li className="list">
                        <a onClick={() => {
                                            const anchor = document.querySelector('#portfolio')
                                            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}
                                >
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
