import styles from '@/styles/ExperienceCard.module.css'
import PropTypes from "prop-types";

const MONTH_MAP = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

function calcCurrentDuration(timeStr) {
  const parts = timeStr.split(' - ');
  if (parts[1]?.trim() !== 'Current') return null;

  const [monthAbbr, yearStr] = parts[0].trim().split(' ');
  const month = MONTH_MAP[monthAbbr.replace('.', '')];
  const year = parseInt(yearStr, 10);

  const start = new Date(year, month);
  const now = new Date();

  let totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) return `${months} Month${months !== 1 ? 's' : ''}`;
  if (months === 0) return `${years} Year${years !== 1 ? 's' : ''}`;
  return `${years} Year${years !== 1 ? 's' : ''} ${months} Month${months !== 1 ? 's' : ''}`;
}

export default function ExperienceCard ({ experience }) {
  const duration = calcCurrentDuration(experience.time) ?? experience.duration;
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h4 className={styles.title}>{experience.name}</h4>
        <hr/>
        <p className={styles.description}>{experience.description}</p>
        <hr/>
        <strong><p className={styles.place}>{experience.place}</p></strong>
        <p className={styles.time}>{experience.time} | <strong>{duration}</strong></p>
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