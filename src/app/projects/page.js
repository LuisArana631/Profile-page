import styles from '@/app/projects/projects.module.css'
import PROJECTS from '@/constants/projects'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: "Projects | Luis Arana's Portfolio"
}

export default function Projects() {
  return (
    <>
      <div className={styles.user}>
        <div>
          <h3>Projects Luis Arana</h3>
        </div>
      </div>
      <div className={styles.container}>
        {
          PROJECTS.map((project) => (
            <div key={project.type}>
              <h4>{project.type}</h4>
              <div className={styles.cards}>
                {
                  project.items.map((item) => (
                    <ProjectCard key={item.name} project={item} />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}