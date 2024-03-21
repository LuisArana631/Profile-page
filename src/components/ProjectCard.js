import LinkIcon from "@/svg/Linkicon";
import GithubIcon from "@/svg/Githubicon";
import styles from "@/styles/ProjectCard.module.css"
import PropTypes from "prop-types";

export default function ProjectCard ({ project }) {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <div className={styles.stats}>
        <div>
          { project.repo && ( <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <GithubIcon height={20} width={20} className={styles.icon} />
          </a> )}
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            <LinkIcon height={20} width={20} className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
}
