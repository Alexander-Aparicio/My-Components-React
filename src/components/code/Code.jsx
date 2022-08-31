import styles from "./Code.module.css";

const Code = ({ title, children }) => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Code;
