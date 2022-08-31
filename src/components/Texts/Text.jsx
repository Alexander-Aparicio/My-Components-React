import styles from "./Text.module.css";

const Text = ({ children }) => {
  return (
    <div className={styles.component}>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default Text;
