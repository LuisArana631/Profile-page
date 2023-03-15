import './Profile.css'

const profilePicture = require('../../../assets/img/foto.jpeg')

export const Profile = () => {
  return (
    <div className='section profile' id='profile'>
      <div className='profile-info  fade-in'>
        <h1 className='profile-title'>ABOUT</h1>
        <hr />
        <p className='profile-text'>
          Hi! My name is Luis Arana and I enjoy exploring new technologies and developing solutions using quick and usefull hacks.
          <br /><br />
          Actualy I'm studying Syste  ms Engineering at University of San Carlos of Guatemala, I'm also a backend developer and explore another technologies as hobby.
          <br /><br />
          I also like to share my knowledge in youtube, it's usefull to practice. 😁
        </p>
      </div>
      <div className='profile-picture'>
        <img className='img-profile' alt='profile-img' src={profilePicture}></img>
      </div>
    </div>
  )
}