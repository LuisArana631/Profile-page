import styles from '@/styles/ExperienceCard.module.css'
import PropTypes from "prop-types";

export default function ExperienceCard ({ experience }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h4 className={styles.title}>{experience.name}</h4>
        <hr/>
        <p className={styles.description}>{experience.description}</p>
        <hr/>
        <strong><p className={styles.place}>{experience.place}</p></strong>
        <p className={styles.time}>{experience.time} | <strong>{experience.duration}</strong></p>
        <hr/>
        <div className={styles.tags}>
          {experience.tools.map((tool) => (
            <span key={tool.id} className={tool.className}>
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

ExperienceCard.propTypes = {
  experience: PropTypes.object.isRequired,
}