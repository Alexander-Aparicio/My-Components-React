import styles from "./TitleComponent.module.css";

const TitleComponent = ({ children }) => {
  return <h2 className={styles.h2}>{children}</h2>;
};

export default TitleComponent;
