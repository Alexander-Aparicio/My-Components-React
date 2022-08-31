import { useEffect, useRef, useState } from "react";
import styles from "./ProgresoBar.module.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const barProgress = useRef();
  const value = useRef();

  useEffect(() => {
    if (progress < 51) {
      setTimeout(() => {
        setProgress(progress + 1);
        barProgress.current.style.width = `${progress}` + "%";
        value.current.style.opacity = `${progress * 2}` + "%";
      }, 60);
    }
  }, [progress]);

  return (
    <section className={styles.component}>
      <div className={styles.boxBar}>
        <p className={styles.name}>Progreso</p>
        <div className={styles.bar}>
          <div ref={barProgress} className={styles.progress}>
            <p ref={value}>{progress}%</p>
          </div>
        </div>
      </div>
      <div className={styles.boxReset}>
        <button className={styles.reset} onClick={() => setProgress(0)}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default ProgressBar;
