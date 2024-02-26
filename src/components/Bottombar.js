import BellIcon from "@/svg/Bellicon";
import SourceControlIcon from "@/svg/SourceControlicon";
import CheckIcon from "@/svg/Checkicon";
import ErrorIcon from "@/svg/Erroricon";
import WarningIcon from "@/svg/Warningicon";
import styles from "@/styles/Bottombar.module.css";
import TerminalIcon from "@/svg/Terminalicon";

const Bottombar = () => {
  return (
    <footer className={styles.bottombar}>
      <div className={styles.container}>
        <a
          href="https://github.com/LuisArana631/Profile-page"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.section}
        >
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <WarningIcon className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <TerminalIcon className={styles.icon} />
        </div>
        <div className={styles.section}>
          <CheckIcon className={styles.icon} />
          <p>Prettier</p>
        </div>
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
