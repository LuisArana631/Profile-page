import styles from "@/app/home.module.css";
import Link from "next/link";
import Illustration from "@/components/Illustration";

export const metadata = {
  title: "Home | Luis Arana's Portfolio",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.foreground}>
        <p className={styles.greeting}>Hi There</p>
        <h1 className={styles.name}>{"I'm Luis Arana"}</h1>
        <h3 className={styles.bio}>{"Systems and Science Engineer"}</h3>
        <div className={styles.buttons}>
          <a
            href="https://www.linkedin.com/in/luisarana-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.button}>LinkedIn</button>
          </a>
          <Link href="/contact">
            <button className={styles.outlined}>Contact</button>
          </Link>
        </div>
      </div>
      <Illustration className={styles.illustration} />
    </div>
  );
}
