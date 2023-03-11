import './Footer.css'

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className='footer'>
      <p>
        Developed with <FontAwesomeIcon icon={faHeart} /> by Luis Arana
      </p>
    </div>
  )
}