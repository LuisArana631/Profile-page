import './Skills.css'

const skillsItems = require('../../../constants/skills')

export const Skills = () => {
  return (
    <div className='section skills' id='skills'> 
      <div className='skills-info'>
        <h1 className='skills-title'>SKILLS</h1>
        <p className='skills-text'>Here are a few technologies I've been working with recently:</p>
      </div>
      <div className='skills-items'>
      {
          skillsItems.skills.map((skillItem) => (
            <div key={`${skillItem.id}skill`} className={skillItem.className}>
              <div className='icon-skill'>
                {skillItem.icon}
              </div>
              <span className='skill-span'>
                {skillItem.name}  
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}