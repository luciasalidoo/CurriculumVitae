import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.headingText}>
            Hi, I'm Lucía
        </h1>
      </div>
    </section>
  );
};
