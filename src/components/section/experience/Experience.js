import './Experience.css'
import { GoPrimitiveDot } from 'react-icons/go'

const experience = require('../../../constants/experience')
const programador = require('../../../assets/img/programando.gif')

export const Experience = () => {
  return (
    <div className='section experience' id='experience'>
      <h1 className='experience-title'>EXPERIENCE</h1>
      <div className='experience-columns'>
        <div className='experience-items'>
        {
          experience.experience.map((job) => (
            <div key={`${job.id}experience`} className='experience-item'>
              <GoPrimitiveDot size={20}/>
              <div className='experience-info'>
                <span className='experience-name'>{job.name}</span>
                <span className='experience-place'>{job.place}</span>
                <span className='experience-time'>{job.time} - <b>{job.duration}</b></span>
                <div className='experience-icons'>
                  Tools:
                  {
                    job.tools.map((tool) => tool)
                  }
                </div>
              </div>
            </div>
          ))
        }
        </div>
        <div className='experience-img'>
          <img className='img-experience' alt='programador' src={programador}></img>
        </div>
      </div>
    </div>
  )
}