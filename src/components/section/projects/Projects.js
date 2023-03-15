import './Projects.css'

const projectsInfo = require('../../../constants/projects')

export const Projects = () => {
  return (
    <div className='section projects' id='projects'>
      <h1 className='projects-title'>PROJECTS</h1>
      <div className='projects-items'>
        {
          projectsInfo.projects.map((project) => (
            <div key={project.id} className='project-item'>
              <a href={project.link} target="_blank" className='link-project' rel='noreferrer'>{project.name}</a>
              <div className='project-footer'>
                {project.tool}
                <a href={project.repo} target="_blank" className='repo-project' rel='noreferrer'>Repositorio</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}