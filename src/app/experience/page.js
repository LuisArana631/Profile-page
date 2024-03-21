import styles from "@/app/experience/experience.module.css";
import { EXPERIENCE } from "@/constants/experience"; 
import ExperienceCard from "@/components/ExperienceCard";

export const metadata = {
  title: "Experience | Luis Arana's Portfolio",
};

export default function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.foreground}>
        <h1 className={styles.title}>About my experience!</h1>
        <div className={styles.cards}>
          {
            EXPERIENCE.reverse().map((experience) => (
              < ExperienceCard key={experience.id} experience={experience}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
