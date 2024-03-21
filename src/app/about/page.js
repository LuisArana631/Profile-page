import styles from "@/app/about/about.module.css";
import { SKILLS } from "@/constants/skills";
import Image from "next/image";

export const metadata = {
  title: "About | Luis Arana's Portfolio",
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.foreground}>
        <div className={styles.about}>
          <h1 className={styles.title}>About me!</h1>
          <p className={styles.text}>
            Hi! My name is Luis Arana and I enjoy exploring new technologies and
            developing solutions using quick and usefull hacks.
            <br />
            <br />
            Actually I&apos;m a Systems Engineer at the University of San Carlos
            of Guatemala, I&apos;m also a backend develepor and I like to
            explore new and different technologies as a hobby.
            <br />
            <br />I also like to share my knoledge in Youtube, it&apos;s usefull
            to practice. 😁
          </p>
        </div>
        <div className={styles.skills_banner}>
          <h1 className={styles.title}>Skills</h1>
          <div className={styles.skills}>
            {SKILLS.map((skill) => (
              <div key={skill.id} className={styles.skill_card}>
                <Image src={skill.icon} alt={skill.id} height={22} width={22} />
                <p className={styles.skill_name}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
